import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from './Button.jsx';

const ServiceCard = ({ service }) => {
  const { t } = useTranslation();

  return (
    <motion.article
      className="card card--service"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div className="card__media card__media--icon">
        <span className="card__tag">{service.tag}</span>
      </div>
      <div className="card__body">
        <h3 className="card__title">{service.title}</h3>
        <p className="card__text">{service.description}</p>
      </div>
      <div className="card__footer">
        <Button variant="ghost">{t('actions.learnMore')}</Button>
      </div>
    </motion.article>
  );
};

export default ServiceCard;

