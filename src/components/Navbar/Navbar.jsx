import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import navBrand from '../../img/brend.png'

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <NavLink to="/" className="navbar__logo">
          <img src={navBrand} alt="SaraMax Logo" />
        </NavLink>

        {/* <span className="navbar__logo-mark" />
          <span className="navbar__logo-text"><img src={navBrand} alt="SaraMax Logo" /> SaraMax</span> */}

        <nav className="navbar__nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => 
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            {t('nav.home')}
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            {t('nav.projects')}
          </NavLink>
          {/* <NavLink
            to="/services"
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            {t('nav.services')}
          </NavLink> */}
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            {t('nav.contacts')}
          </NavLink>
        </nav>

        <div className="navbar__right">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

