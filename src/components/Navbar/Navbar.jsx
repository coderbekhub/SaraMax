import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import navBrand from '../../img/brend.png'

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher.jsx';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <NavLink to="/" className="navbar__logo">
          <img src={navBrand} alt="SaraMax Logo" />
        </NavLink>

        {/* <span className="navbar__logo-mark" />
          <span className="navbar__logo-text"><img src={navBrand} alt="SaraMax Logo" /> SaraMax</span> */}

        <nav className="navbar__nav navbar__nav--desktop">
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
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            {t('nav.services')}
          </NavLink>
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

          <button
            type="button"
            className={`navbar__burger ${isOpen ? 'navbar__burger--active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="navbar__nav-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navbar__link navbar__link--mobile ${
                  isActive ? 'navbar__link--active' : ''
                }`
              }
            >
              {t('nav.home')}
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `navbar__link navbar__link--mobile ${
                  isActive ? 'navbar__link--active' : ''
                }`
              }
            >
              {t('nav.projects')}
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `navbar__link navbar__link--mobile ${
                  isActive ? 'navbar__link--active' : ''
                }`
              }
            >
              {t('nav.services')}
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `navbar__link navbar__link--mobile ${
                  isActive ? 'navbar__link--active' : ''
                }`
              }
            >
              {t('nav.contacts')}
            </NavLink>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

