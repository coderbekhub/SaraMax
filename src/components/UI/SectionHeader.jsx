import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ kicker, title, subtitle, align = 'left' }) => {
  return (
    <motion.header
      className={`section-header section-header--${align}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {kicker && <p className="section-header__kicker">{kicker}</p>}
      {title && <h2 className="section-header__title">{title}</h2>}
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </motion.header>
  );
};

export default SectionHeader;

