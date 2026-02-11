import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import SectionHeader from '../components/UI/SectionHeader.jsx';
import Button from '../components/UI/Button.jsx';

const initialValues = {
  name: '',
  phone: '',
  message: '',
};

const Contacts = () => {
  const { t } = useTranslation();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setStatus('idle');
  };

  const validate = () => {
    const next = {};
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;

    if (!values.name.trim()) {
      next.name = t('contacts.validation.nameRequired');
    }
    if (!values.phone.trim()) {
      next.phone = t('contacts.validation.phoneRequired');
    } else if (!phoneRegex.test(values.phone)) {
      next.phone = t('contacts.validation.phoneInvalid');
    }
    if (!values.message.trim()) {
      next.message = t('contacts.validation.messageRequired');
    } else if (values.message.trim().length < 10) {
      next.message = t('contacts.validation.messageShort');
    }

    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues(initialValues);
  };

  return (
    <motion.div
      className="page page--contacts"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <section className="section section--contacts">
        <div className="container section__grid section__grid--split">
          <div>
            {/* <SectionHeader
              kicker={t('contacts.title')}
              title={null}
              subtitle={t('contacts.subtitle')}
            /> */}

            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55 }}
            >
              <div className={`field ${errors.name ? 'field--error' : ''}`}>
                <label htmlFor="name" className="field__label">
                  {t('contacts.form.name')}
                </label>
                <div className="field__control">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    className="field__input"
                    placeholder="Ismingizni kiriting"
                  />
                  <span className="field__focus-ring" />
                </div>
                {errors.name && (
                  <p className="field__error">{errors.name}</p>
                )}
              </div>

              <div className={`field ${errors.phone ? 'field--error' : ''}`}>
                <label htmlFor="phone" className="field__label">
                  {t('contacts.form.phone')}
                </label>
                <div className="field__control">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    className="field__input"
                    placeholder="+998 90 123 45 67"
                  />
                  <span className="field__focus-ring" />
                </div>
                {errors.phone && (
                  <p className="field__error">{errors.phone}</p>
                )}
              </div>

              <div
                className={`field field--textarea ${
                  errors.message ? 'field--error' : ''
                }`}
              >
                <label htmlFor="message" className="field__label">
                  {t('contacts.form.message')}
                </label>
                <div className="field__control">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={values.message}
                    onChange={handleChange}
                    className="field__input field__input--textarea"
                    placeholder="Habaringizni kiriting"
                  />
                  <span className="field__focus-ring" />
                </div>
                {errors.message && (
                  <p className="field__error">{errors.message}</p>
                )}
              </div>

              <div className="contact-form__footer contactBtn">
                <Button type="submit">{t('contacts.form.submit')}</Button>
                {status === 'success' && (
                  <p className="contact-form__status contact-form__status--success">
                    {t('contacts.form.success')}
                  </p>
                )}
                {status === 'error' && (
                  <p className="contact-form__status contact-form__status--error">
                    {t('contacts.form.error')}
                  </p>
                )}
              </div>
            </motion.form>
          </div>

          <motion.aside
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-info__title">
              {t('contacts.info.title')}
            </h3>
            <p className="contact-info__text">
              {t('contacts.info.description')}
            </p>

            <ul className="contact-info__list">
              <li>
                <span className="contact-info__label">
                  {t('contacts.info.emailLabel')}
                </span>
                <a href="mailto:hello@saramax.studio">
                  hello@saramax.studio
                </a>
              </li>
              <li>
                <span className="contact-info__label">
                  {t('contacts.info.phoneLabel')}
                </span>
                <a href="tel:+998946687353">+99894 668 73 53</a>
              </li>
              <li>
                <span className="contact-info__label">
                  {t('contacts.info.locationLabel')}
                </span>
                <span>{t('contacts.info.locationValue')}</span>
              </li>
            </ul>

            <div className="contact-map">
              <div className="contact-map__glass1">
                {/* <span className="contact-map__dot contact-map__dot--one" /> */}
                <span className="contact-map__dot contact-map__dot--two" />
                <p className="contact-map__placeholder">
                  <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118047.0530334864!2d68.99734039726557!3d41.28666060000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8901363e8813%3A0xec5319ff49acfa1d!2zIk8ncml6b3Igc2F2ZG8ga29tcGxlLXNpIiBNQ2hKICgwKjEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCk!5e1!3m2!1sru!2s!4v1770728467846!5m2!1sru!2s" width="450" height="250" frameBorder="0" allowFullScreen="" loading="lazy"></iframe>
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </motion.div>
  );
};

export default Contacts;

