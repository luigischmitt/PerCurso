"use client";

import { useState } from 'react';
import styles from './[disciplina]/page.module.css';

export default function DisciplinaContent({ dicas, dificuldades, listas, provas, extras }) {
  const [activeSection, setActiveSection] = useState('dicas');

  const renderActiveContent = () => {
    switch (activeSection) {
      case 'dicas':
        return (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{dicas.title}</h2>
            <div className={styles.card} dangerouslySetInnerHTML={{ __html: dicas.contentHtml }} />
          </section>
        );
      case 'dificuldades':
        return (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{dificuldades.title}</h2>
            <div className={styles.card} dangerouslySetInnerHTML={{ __html: dificuldades.contentHtml }} />
          </section>
        );
      case 'listas':
        return (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{listas.title}</h2>
            <div className={styles.card} dangerouslySetInnerHTML={{ __html: listas.contentHtml }} />
          </section>
        );
      case 'provas':
        return (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{provas.title}</h2>
            <div className={styles.card} dangerouslySetInnerHTML={{ __html: provas.contentHtml }} />
          </section>
        );
      case 'extras':
        return (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{extras.title}</h2>
            <div className={styles.card} dangerouslySetInnerHTML={{ __html: extras.contentHtml }} />
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <nav className={styles.navTabs}>
        <span onClick={() => setActiveSection('dicas')} className={activeSection === 'dicas' ? styles.activeTab : ''}>Dicas</span>
        <span onClick={() => setActiveSection('dificuldades')} className={activeSection === 'dificuldades' ? styles.activeTab : ''}>Dificuldades comuns</span>
        <span onClick={() => setActiveSection('listas')} className={activeSection === 'listas' ? styles.activeTab : ''}>Listas</span>
        <span onClick={() => setActiveSection('provas')} className={activeSection === 'provas' ? styles.activeTab : ''}>Provas antigas</span>
        <span onClick={() => setActiveSection('extras')} className={activeSection === 'extras' ? styles.activeTab : ''}>Extras</span>
      </nav>

      {renderActiveContent()}
    </div>
  );
}
