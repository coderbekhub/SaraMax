import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import SectionHeader from '../components/UI/SectionHeader.jsx';
import ProjectCard from '../components/UI/ProjectCard.jsx';
import Gallery from '../components/Gallery.jsx'

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = t('projects.cards', { returnObjects: true });
  const filterLabels = t('projects.filters', { returnObjects: true });

  const projectsWithLabels = useMemo(
    () =>
      projects.map((p) => ({
        ...p,
        categoryLabel: filterLabels[p.category] || '',
      })),
    [projects, filterLabels],
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsWithLabels;
    return projectsWithLabels.filter((p) => p.category === activeFilter);
  }, [projectsWithLabels, activeFilter]);

  return (
    <motion.div
      className="page page--projects"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <section className="section section--projects-page">
        <div className="container">
          <SectionHeader
            title={t('projects.pageTitle')}
            subtitle={t('projects.pageSubtitle')}
          />

          {/* <div className="projects-filters">
            {Object.entries(filterLabels).map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={`projects-filters__item ${
                  activeFilter === key ? 'projects-filters__item--active' : ''
                }`}
                onClick={() => setActiveFilter(key)}
              >
                {label}
              </button>
            ))}
          </div> */}

          {/* <div className="grid grid--three grid--projects">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div> */}
        </div>
        <Gallery />
      </section>
    </motion.div>
  );
};

export default Projects;

