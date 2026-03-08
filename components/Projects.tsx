'use client'
import { projects } from '@/data'
import { useReveal } from '@/hooks/useReveal'
import sec from './Section.module.css'
import styles from './Projects.module.css'

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className={sec.section} ref={ref}>
      <p className={sec.label}>04 — Projects</p>
      <h2 className={sec.title}>
        Selected<br /><em className={sec.titleAccent}>Work</em>
      </h2>

      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.name} className={`${styles.card} reveal`}>
            <span className={styles.num}>{p.num}</span>

            <div className={styles.top}>
              <span className={styles.domain}>{p.domain}</span>
              <span className={styles.years}>{p.years}</span>
            </div>

            <h3 className={styles.name}>{p.name}</h3>
            <p
              className={styles.desc}
              dangerouslySetInnerHTML={{ __html: p.description }}
            />

            <div className={styles.stack}>
              {p.stack.map((t) => (
                <span key={t} className={styles.tech}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
