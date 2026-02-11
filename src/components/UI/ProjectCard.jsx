import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from './Button.jsx';

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();

  return (
    <motion.article
      className="card card--project"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div className="card__media card__media--placeholder">
        <span className="card__pill">{project.label}</span>
      </div>
      <div className="card__body">
        <div className="card__tag">{project.categoryLabel}</div>
        <h3 className="card__title">{project.title}</h3>
        <p className="card__text">{project.description}</p>
      </div>
      <div className="card__footer">
        <Button variant="ghost">{t('actions.viewProject')}</Button>
      </div>
    </motion.article>
  );
};

export default ProjectCard;

