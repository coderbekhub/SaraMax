import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LANGS = [
  { code: 'uz', label: 'UZ' },
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = i18n.language || 'uz';

  const handleChange = (code) => {
    i18n.changeLanguage(code);
    document.documentElement.lang = code;
  };

  return (
    <div className="lang-switcher">
      {LANGS.map((lang) => (
        <motion.button
          key={lang.code}
          type="button"
          whileHover={{ y: -1, opacity: 0.9 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleChange(lang.code)}
          className={`lang-switcher__btn ${
            current.startsWith(lang.code) ? 'lang-switcher__btn--active' : ''
          }`}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

