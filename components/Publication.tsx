'use client'
import { publication } from '@/data'
import { useReveal } from '@/hooks/useReveal'
import sec from './Section.module.css'
import styles from './Publication.module.css'

export default function Publication() {
  const ref = useReveal()

  return (
    <section id="publication" className={sec.section} ref={ref}>
      <p className={sec.label}>05 — Research</p>
      <h2 className={sec.title}>
        Published<br /><em className={sec.titleAccent}>Work</em>
      </h2>

      <a
        href={publication.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.card} reveal`}
      >
        <div className={styles.topBar} />
        <div className={styles.inner}>
          <div className={styles.iconWrap}>📄</div>
          <div className={styles.content}>
            <h3 className={styles.title}>{publication.title}</h3>
            <p className={styles.meta}>
              {publication.venue} · {publication.year}
            </p>
            <div className={styles.tags}>
              {publication.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <span className={styles.link}>View Publication → ir.iba.edu.pk</span>
          </div>
        </div>
      </a>
    </section>
  )
}
