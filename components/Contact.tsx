'use client'
import { useState } from 'react'
import { person } from '@/data'
import { useReveal } from '@/hooks/useReveal'
import sec from './Section.module.css'
import styles from './Contact.module.css'

const LINKS = [
  { tag: 'EMAIL',    href: `mailto:${person.email}`,  label: person.email },
  { tag: 'PHONE',    href: `tel:${person.phone}`,      label: person.phone },
  { tag: 'LINKEDIN', href: person.linkedin,            label: 'Muhammad Affan Abid' },
  { tag: 'RESEARCH', href: 'https://ir.iba.edu.pk/research-projects-mscs/51/', label: 'Published Paper — IBA' },
]

const STATUS_ITEMS = [
  {
    icon: '📍',
    tag: 'LOCATION',
    label: 'Hicksville, New York',
    sub: 'Open to Remote · Hybrid · Relocation',
    color: 'accent' as const,
  },
  {
    icon: '🇺🇸',
    tag: 'WORK AUTH',
    label: 'US Work Authorized',
    sub: 'OPT · Available Immediately',
    color: 'blue' as const,
  },
]

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <section id="contact" className={`${sec.section} ${styles.section}`} ref={ref}>
      <p className={sec.label}>06 — Contact</p>
      <h2 className={`${sec.title} ${styles.title}`}>
        Let&apos;s Build<br /><em className={sec.titleAccent}>Something.</em>
      </h2>

      <div className={styles.grid}>
        <div className={`${styles.left} reveal`}>
          <p className={styles.copy}>
            Open to senior engineering roles, technical leadership, and consulting opportunities.
            If you&apos;re building something ambitious in healthcare, fintech, or beyond — let&apos;s talk.
          </p>

          {/* Clickable contact links */}
          <div className={styles.links}>
            {LINKS.map(({ tag, href, label }) => (
              <a key={tag} href={href} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span className={styles.linkTag}>{tag}</span>
                <span className={styles.linkLabel}>{label}</span>
              </a>
            ))}
          </div>

          {/* Non-link status items — location & work auth */}
          <div className={styles.statusGrid}>
            {STATUS_ITEMS.map(({ icon, tag, label, sub, color }) => (
              <div key={tag} className={`${styles.statusCard} ${styles[`statusCard__${color}`]}`}>
                <span className={styles.statusIcon}>{icon}</span>
                <div className={styles.statusBody}>
                  <div className={styles.statusTag}>{tag}</div>
                  <div className={styles.statusLabel}>{label}</div>
                  <div className={styles.statusSub}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className={`${styles.right} reveal`}>
          {sent ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>✓</span>
              Message received! I&apos;ll be in touch soon.
            </div>
          ) : (
            <>
              <input className={styles.input} type="text"  name="name"    placeholder="Your Name"    value={form.name}    onChange={onChange} />
              <input className={styles.input} type="email" name="email"   placeholder="Your Email"   value={form.email}   onChange={onChange} />
              <textarea className={`${styles.input} ${styles.textarea}`} name="message" placeholder="Your Message" value={form.message} onChange={onChange} />
              <button className={styles.submit} onClick={onSubmit}>Send Message →</button>
            </>
          )}
        </div> */}
      </div>
    </section>
  )
}
