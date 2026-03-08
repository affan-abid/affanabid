'use client'
import { person, aboutMetrics, education } from '@/data'
import { useReveal } from '@/hooks/useReveal'
import sec from './Section.module.css'
import styles from './About.module.css'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className={sec.section} ref={ref}>
      <p className={sec.label}>01 — About</p>
      <h2 className={sec.title}>
        Engineer. Researcher.<br />
        <em className={sec.titleAccent}>Problem Solver.</em>
      </h2>

      <div className={styles.grid}>
        {/* Bio */}
        <div className={`${styles.bio} reveal`}>
          {person.about.map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
          ))}

          {/* Inline metric strip */}
          <div className={styles.metricStrip}>
            {aboutMetrics.map(({ val, unit, label }) => (
              <div key={label} className={styles.metricCell}>
                <div className={styles.metricVal}>
                  {val}<span>{unit}</span>
                </div>
                <div className={styles.metricLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className={`${styles.aside} reveal`}>
          <div className={styles.block}>
            <p className={styles.blockLabel}>Education</p>
            {education.map((e) => (
              <div key={e.degree} className={styles.eduItem}>
                <p className={styles.eduDegree}>{e.degree}</p>
                <p className={styles.eduSchool}>{e.school} · {e.year}</p>
                {e.gpa && <span className={styles.gpaBadge}>GPA {e.gpa}</span>}
              </div>
            ))}
          </div>

          <div className={styles.block}>
            <p className={styles.blockLabel}>Location & Contact</p>
            <div className={styles.contactList}>
              <span>📍 {person.location}</span>
              <a href={`mailto:${person.email}`}>✉️ {person.email}</a>
              <a href={`tel:${person.phone}`}>📞 {person.phone}</a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
