import LegalPage from '../components/LegalPage.jsx';

const CONTENT = {
  title: 'Privacy Policy',
  updated: 'Last updated: September 2026',
  keywords: ['Reine Fondange AI privacy policy', 'data protection Australia'],
  sections: [
    {
      h: '1. Who We Are',
      p: 'Reine Fondange AI ("we", "us") operates the website reinefondange-ai.com and the digital wealth services described on it. For the purposes of the Australian Privacy Act 1988 (Cth), we are the data controller of the personal information described in this policy.',
    },
    {
      h: '2. Information We Collect',
      p: 'We collect information you give us directly, plus limited technical data needed to run the site safely:',
      items: [
        'Contact and identity details: first name, last name, email address and phone number submitted through our registration form.',
        'Verification details: government-issued ID and proof of address, processed when you complete identity verification.',
        'Technical data: IP address, browser type, approximate location and pages visited, used to keep the platform secure.',
        'Cookie data: small files described in section 6, used for site function and improvement.',
      ],
    },
    {
      h: '3. How We Use Your Information',
      p: 'We use your information to process registration requests, verify your identity, respond to enquiries, secure the platform against fraud, and - with your consent - send you updates about your account and our services. We never sell your personal data.',
    },
    {
      h: '4. Legal Bases',
      p: 'We process your data on the following lawful grounds: performance of a contract (opening and running your account), legal obligation (identity checks and anti-money-laundering rules), legitimate interest (securing the platform and improving our service) and consent (marketing communications, which you can withdraw at any time).',
    },
    {
      h: '5. Who We Share Information With',
      p: 'We share your information only with service providers who help us operate - identity verification partners, custodians, payment processors and email providers - each bound by contract to protect your data. We disclose information to authorities only where the law requires it.',
    },
    {
      h: '6. Cookies',
      p: 'We use essential cookies to keep the site working and optional analytics cookies to understand how it is used. You can clear or block cookies at any time through your browser settings.',
    },
    {
      h: '7. Data Retention',
      p: 'We keep your information only as long as needed for the purposes above, or as long as the law requires. Verification records are retained in line with anti-money-laundering rules; marketing data is removed when you withdraw consent.',
    },
    {
      h: '8. Your Rights',
      p: 'Under the Australian Privacy Act you may request access to, correction of, or deletion of your personal data, object to or restrict certain processing, and ask for a portable copy. To exercise any of these rights, email support@reinefondange-ai.com. You may also complain to the Office of the Australian Information Commissioner (oaic.gov.au).',
    },
    {
      h: '9. Changes To This Policy',
      p: 'We update this policy from time to time. Material changes will be announced on this page with a revised date, and where required, notified to you directly.',
    },
  ],
};

export default function PrivacyPolicy() {
  return <LegalPage content={CONTENT} path="/privacy-policy" />;
}
