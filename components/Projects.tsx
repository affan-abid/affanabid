'use client'
import { projects, techStackIcons, techStackIconUrls } from '@/data'
import { useReveal } from '@/hooks/useReveal'
import sec from './Section.module.css'
import styles from './Projects.module.css'

const ICON_CDN = 'https://cdn.simpleicons.org'

function getIconSrc(tech: string): string | null {
  if (techStackIconUrls[tech]) return techStackIconUrls[tech]
  const slug = techStackIcons[tech]
  return slug ? `${ICON_CDN}/${slug}` : null
}

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
              {p.stack.map((t) => {
                const iconSrc = getIconSrc(t)
                return (
                  <span key={t} className={styles.tech}>
                    {iconSrc ? (
                      <img
                        src={iconSrc}
                        alt={t}
                        className={styles.techIcon}
                        width={14}
                        height={14}
                      />
                    ) : null}
                    {t}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
