import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import SectionHeader from '../components/UI/SectionHeader.jsx';
import ServiceCard from '../components/UI/ServiceCard.jsx';

const Services = () => {
  const { t } = useTranslation();
  const services = t('services.cards', { returnObjects: true });

  return (
    <motion.div
      className="page page--services"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <section className="section section--services-page">
        <div className="container">
          <SectionHeader
            kicker={t('services.pageTitle')}
            title={null}
            subtitle={t('services.pageSubtitle')}
            align="center"
          />

          <div className="grid grid--three grid--services">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        <motion.div
          className="section section--services-note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container">
            <p>
              We can join at any stage — from idea validation to a live product
              that needs a sharp, premium redesign.
            </p>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Services;

