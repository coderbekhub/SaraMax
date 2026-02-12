import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Button from '../components/UI/Button.jsx';
import SectionHeader from '../components/UI/SectionHeader.jsx';
import ServiceCard from '../components/UI/ServiceCard.jsx';
import ProjectCard from '../components/UI/ProjectCard.jsx';
import HeroSeyf from '../img/heroSeyf.png'
import Slider from '../components/Slider.jsx';
import Gallery from '../components/Gallery.jsx';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = t('services.cards', { returnObjects: true }).slice(0, 3);
  const projects = t('projects.cards', { returnObjects: true }).slice(0, 3);
  const projectFilters = t('projects.filters', { returnObjects: true });

  const projectsWithCategory = projects.map((p) => ({
    ...p,
    categoryLabel: projectFilters[p.category] || '',
  }));

  return (
    <motion.div
      className="page page--home"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <section className="hero">
        {/* <div className="hero__overlay" /> */}
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />

        <div className='heroContent container'>
          <div className="hero__inner  ">
            <motion.div
              className="hero__content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <p className="hero__kicker">{t('hero.kicker')}</p>
              <h1 className="hero__title">{t('hero.title')}</h1>
              <p className="hero__subtitle">{t('hero.subtitle')}</p>

              <div className="hero__actions">
                <Button onClick={() => navigate('/contacts')}>
                  {t('hero.ctaPrimary')}
                </Button>
                <Button variant="ghost" onClick={() => navigate('/projects')}>
                  {t('hero.ctaSecondary')}
                </Button>
              </div>

            </motion.div>
          </div>
          <div className='heroSeyf'>
            <img src={HeroSeyf} alt="heroSeyf" />
          </div>
        </div>
      </section>

      {/* <section className="section section--intro">
        <div className="container section__grid">
          <SectionHeader
            kicker={t('intro.title')}
            title={null}
            subtitle={t('intro.text')}
          />
          <motion.div
            className="section__side-note"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <p>
              10+ premium products launched, 30+ brands elevated. We work with
              founders and teams who care about craft and detail.
            </p>
          </motion.div>
        </div>
      </section> */}

      <section className="section section--services servicesSection">
        <div className="container">
          <SectionHeader
            kicker={t('services.previewTitle')}
            title={t('services.pageTitle')}
            subtitle={t('services.previewSubtitle')}
          /> 
          {/* <div className="grid grid--three">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div> */}

          <Slider />
        </div>
      </section>

      <section className="section section--projects projectsSection">
        <div className="container">
          <SectionHeader
            kicker={t('projects.previewTitle')}
            title={t('projects.pageTitle')}
            subtitle={t('projects.previewSubtitle')}
          />

          <Gallery />
          {/* <div className="grid grid--three">
            {projectsWithCategory.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div> */}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;

