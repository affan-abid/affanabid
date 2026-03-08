import { person, heroStats, heroChips } from '@/data'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>

        {/* Badge row — availability + location side by side */}
        <div className={styles.badgeRow}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Open to opportunities
          </div>
          <div className={styles.location}>
            <svg className={styles.locationIcon} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0Z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>New York, USA</span>
          </div>
        </div>

        <h1 className={styles.name}>
          <span className={styles.firstName}>Muhammad</span>
          <em className={styles.lastName}>Affan Abid</em>
        </h1>

        <p className={styles.role}>Senior Full-Stack Engineer</p>

        <p className={styles.summary}>{person.summary}</p>

        <div className={styles.ctas}>
          <a href="#contact" className={styles.btnPrimary}>Get in Touch</a>
          <a href="#projects" className={styles.btnSecondary}>View Work ↓</a>
        </div>

        {/* Scroll hint */}
        <div className={styles.scroll}>
          <div className={styles.scrollLine} />
          <span className={styles.scrollLabel}>scroll</span>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.card}>
          {/* Top accent bar */}
          <div className={styles.cardAccent} />

          <p className={styles.cardLabel}>At a glance</p>

          <div className={styles.metricGrid}>
            {heroStats.map(({ val, unit, label }) => (
              <div key={label} className={styles.metric}>
                <div className={styles.metricVal}>
                  {val}<span className={styles.metricUnit}>{unit}</span>
                </div>
                <div className={styles.metricLabel}>{label}</div>
              </div>
            ))}
          </div>

          <div className={styles.divider} />

          <div className={styles.chipRow}>
            {heroChips.map((c) => (
              <span key={c} className={styles.chip}>{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
