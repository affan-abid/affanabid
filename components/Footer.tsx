import { person } from '@/data'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <span className={styles.name}>{person.name}</span>
      <span className={styles.copy}>© {year} · {person.role} · {person.location}</span>
    </footer>
  )
}
