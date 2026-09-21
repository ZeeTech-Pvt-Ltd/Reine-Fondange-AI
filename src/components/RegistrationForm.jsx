import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import 'intl-tel-input/dist/css/intlTelInput.min.css';
import { SITE } from '../data/content.js';

// Lead form with an intl-tel-input phone field. Utils are attached eagerly at
// init so the example placeholder renders at page load (not on first focus).

export default function RegistrationForm({
  idPrefix = 'hero',
  title = 'Create your account',
  notice = '',
  buttonLabel = 'Sign Up now',
  showConsent = true,
}) {
  const navigate = useNavigate();
  const phoneRef = useRef(null);
  const itiRef = useRef(null);
  const utilsReady = useRef(null);
  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(true);

  const fid = (name) => `${idPrefix}-${name}`;

  useEffect(() => {
    const input = phoneRef.current;
    if (!input || itiRef.current) return;

    let destroyed = false;

    // Lazy-load the library so its JS stays off the critical path. Until it
    // arrives the field is a plain tel input with a static placeholder.
    (async () => {
      let itiMod;
      try {
        itiMod = await import('intl-tel-input');
      } catch {
        return; // plain input remains fully usable
      }
      if (destroyed) return;

      const iti = itiMod.default(input, {
        // AU flag + dial code render instantly; a background geo check refines it later.
        initialCountry: 'au',
      });
      itiRef.current = iti;

      // Validators + example placeholder attach on idle or first focus -
      // whichever comes first - never during initial page load.
      const attachUtils = () => {
        if (utilsReady.current) return;
        utilsReady.current = new Promise((r) => {
          itiMod.default
            .attachUtils(() => import('intl-tel-input/utils'))
            .then(r)
            .catch(() => r());
        });
      };
      input.addEventListener('focus', attachUtils, { once: true });
      const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 2000));
      idle(attachUtils);

      // Quietly refine the country from the visitor's IP - but never clobber
      // anything the user has already typed (ipapi.co is Cloudflare-blocked
      // on localhost, so ipwho.is leads the chain).
      (async () => {
        let code = '';
        try {
          const res = await fetch('https://ipwho.is/');
          const data = await res.json();
          code = data.country_code;
        } catch {
          try {
            const res = await fetch('https://ipapi.co/json/');
            const data = await res.json();
            code = data.country_code;
          } catch {
            code = '';
          }
        }
        // Only update if this iti instance is still the live one (StrictMode
        // double-mount destroys the first instance before its fetch resolves).
        if (code && input.value.trim() === '' && itiRef.current === iti) {
          try {
            iti.setCountry(code);
          } catch {
            /* instance was torn down mid-flight */
          }
        }
      })();
    })();

    return () => {
      destroyed = true;
      itiRef.current?.destroy();
      itiRef.current = null;
      utilsReady.current = null;
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setSuccess('');

    const data = Object.fromEntries(new FormData(e.target).entries());
    const errs = {};

    if (!data.firstName.trim()) errs.firstName = 'First name is required';
    if (!data.lastName.trim()) errs.lastName = 'Last name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
      errs.email = 'Enter a valid email address';
    }

    // Honeypot - bots fill it, humans never see it.
    if (data.website) return;

    // Phone: full validation once utils are loaded; raw sanity check otherwise.
    let phone = data.phone.trim();
    const iti = itiRef.current;
    if (iti) {
      let valid = false;
      try {
        valid = iti.isValidNumber();
      } catch {
        // utils may still be attaching - wait briefly, then retry.
        await Promise.race([
          utilsReady.current || Promise.resolve(),
          new Promise((r) => setTimeout(r, 3000)),
        ]);
        try {
          valid = iti.isValidNumber();
        } catch {
          valid = false;
        }
      }
      if (valid) {
        phone = iti.getNumber();
      } else if (phone.replace(/\D/g, '').length < 7) {
        errs.phone = 'Enter a valid phone number';
      }
    } else if (phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Enter a valid phone number';
    }

    if (showConsent && !agreed) {
      errs.consent = 'Please accept to continue';
    }

    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});

    setSubmitting(true);
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          offerName: SITE.offerName,
          firstName: data.firstName.trim(),
          lastName: data.lastName.trim(),
          email: data.email.trim(),
          phone,
        }),
      });
      if (!res.ok) {
        // The endpoint rate-limits 3 attempts per 5 minutes per IP.
        const msg = await res.text().catch(() => '');
        throw new Error(
          res.status === 429 || /limit|many|attempt/i.test(msg)
            ? 'Too many attempts - please wait a few minutes and try again.'
            : 'Something went wrong on our side. Please try again in a moment.'
        );
      }
      setSuccess('Account request received - redirecting…');
      setTimeout(() => navigate('/thank-you'), 600);
    } catch (err) {
      setFormError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="form form-wrap" onSubmit={handleSubmit} noValidate>
      <h2 className="form__title">{title}</h2>
      {notice && <p className="form__notice">{notice}</p>}

      {formError && (
        <div className="form__error" role="alert">
          {formError}
        </div>
      )}
      {success && (
        <div className="form__success" role="status">
          {success}
        </div>
      )}

      {/* Honeypot field - hidden from humans and assistive tech */}
      <input className="form__honey" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="form__row">
        <div className="field">
          <label htmlFor={fid('firstName')}>First name</label>
          <input
            id={fid('firstName')}
            name="firstName"
            type="text"
            placeholder="Oliver"
            autoComplete="given-name"
            className={errors.firstName ? 'input-error' : ''}
          />
          {errors.firstName && <span className="error-text">{errors.firstName}</span>}
        </div>
        <div className="field">
          <label htmlFor={fid('lastName')}>Last name</label>
          <input
            id={fid('lastName')}
            name="lastName"
            type="text"
            placeholder="Whitfield"
            autoComplete="family-name"
            className={errors.lastName ? 'input-error' : ''}
          />
          {errors.lastName && <span className="error-text">{errors.lastName}</span>}
        </div>
      </div>

      <div className="field">
        <label htmlFor={fid('email')}>Email</label>
        <input
          id={fid('email')}
          name="email"
          type="email"
          placeholder="oliver@example.com.au"
          autoComplete="email"
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>

      <div className="field">
        <label htmlFor={fid('phone')}>Phone number</label>
        {/* no placeholder: intl-tel-input generates a real example number
            for whichever country is selected (e.g. 412 345 678 / 301 2345678) */}
        <input
          id={fid('phone')}
          ref={phoneRef}
          name="phone"
          type="tel"
          autoComplete="tel"
          className={errors.phone ? 'input-error' : ''}
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}
      </div>

      {showConsent && (
        <div>
          <label className="form__consent">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>
              I have read and agree to the{' '}
              <Link to="/privacy-policy" style={{ color: '#16c784', textDecoration: 'underline' }}>
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link to="/terms-of-use" style={{ color: '#16c784', textDecoration: 'underline' }}>
                Terms &amp; Conditions
              </Link>
              .
            </span>
          </label>
          {errors.consent && <span className="error-text">{errors.consent}</span>}
        </div>
      )}

      <button className="btn btn--cyan" type="submit" disabled={submitting}>
        {submitting ? 'Submitting…' : buttonLabel}
      </button>

      <p className="form__note">Protected by 2FA and 256-bit SSL encryption</p>
    </form>
  );
}
