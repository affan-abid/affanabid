'use client'
import { skillGroups, techStackIcons, techStackIconUrls } from '@/data'
import { useReveal } from '@/hooks/useReveal'
import sec from './Section.module.css'
import styles from './Skills.module.css'

const ICON_CDN = 'https://cdn.simpleicons.org'

function getIconSrc(skill: string): string | null {
  if (techStackIconUrls[skill]) return techStackIconUrls[skill]
  const slug = techStackIcons[skill]
  return slug ? `${ICON_CDN}/${slug}` : null
}

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
              {g.skills.map((s) => {
                const iconSrc = getIconSrc(s)
                return (
                  <span key={s} className={styles.pill}>
                    {iconSrc ? (
                      <img
                        src={iconSrc}
                        alt={s}
                        className={styles.techIcon}
                        width={14}
                        height={14}
                      />
                    ) : null}
                    {s}
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
