'use client'
import { experience } from '@/data'
import { useReveal } from '@/hooks/useReveal'
import sec from './Section.module.css'
import styles from './Experience.module.css'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className={sec.section} ref={ref}>
      <p className={sec.label}>03 — Experience</p>
      <h2 className={sec.title}>
        Where I&apos;ve<br /><em className={sec.titleAccent}>Worked</em>
      </h2>

      <div className={styles.list}>
        {experience.map((job) => (
          <div key={job.role + job.period} className={`${styles.card} reveal`}>
            {/* Left accent bar */}
            <div className={styles.accentBar} />

            {/* Header */}
            <div className={styles.header}>
              <div>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.company}>{job.company} · {job.location}</p>
              </div>
              <div className={styles.meta}>
                <span className={styles.period}>{job.period}</span>
                {job.current && <span className={styles.currentBadge}>Current</span>}
              </div>
            </div>

            {/* Metric chips */}
            <div className={styles.metrics}>
              {job.metrics.map(({ val, label }) => (
                <div key={label} className={styles.metric}>
                  <span className={styles.metricVal}>{val}</span>
                  <span className={styles.metricLabel}>{label}</span>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <ul className={styles.bullets}>
              {job.bullets.map((b, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
