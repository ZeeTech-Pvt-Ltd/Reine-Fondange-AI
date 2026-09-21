import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { NAV_LINKS } from '../data/content.js';
import { prefetchPage } from '../App.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <Logo />
          <span className="logo__text">
            Reine Fondange <span className="logo__ai">AI</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onMouseEnter={() => prefetchPage(l.to)}
              className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <Link className="btn btn--cyan btn--sm" to="/sign-up">
            Sign Up now
          </Link>
          <button
            className="header__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${open ? ' is-open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            onClick={() => setOpen(false)}
            onMouseEnter={() => prefetchPage(l.to)}
            className={({ isActive }) => (isActive ? 'is-active' : '')}
          >
            {l.label}
          </NavLink>
        ))}
        <Link className="btn btn--cyan" to="/sign-up" onClick={() => setOpen(false)}>
          Sign Up now
        </Link>
      </div>
    </header>
  );
}
