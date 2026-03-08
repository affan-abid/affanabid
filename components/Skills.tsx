'use client'
import { skillGroups } from '@/data'
import { useReveal } from '@/hooks/useReveal'
import sec from './Section.module.css'
import styles from './Skills.module.css'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className={sec.section} ref={ref}>
      <p className={sec.label}>02 — Expertise</p>
      <h2 className={sec.title}>
        What I<br /><em className={sec.titleAccent}>Work With</em>
      </h2>

      <div className={styles.grid}>
        {skillGroups.map((g) => (
          <div key={g.title} className={`${styles.card} reveal`}>
            <span className={styles.icon}>{g.icon}</span>
            <h3 className={styles.cardTitle}>{g.title}</h3>
            <div className={styles.pills}>
              {g.skills.map((s) => (
                <span key={s} className={styles.pill}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
