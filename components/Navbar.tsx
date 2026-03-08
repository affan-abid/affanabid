'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { person } from '@/data'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { href: '#about',       label: 'About' },
  { href: '#skills',      label: 'Skills' },
  { href: '#experience',  label: 'Experience' },
  { href: '#projects',    label: 'Projects' },
  { href: '#contact',     label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive]     = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      let cur = ''
      sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 130) cur = s.id })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <Link href="#" className={styles.logo}>
        {person.shortName}
      </Link>
      <ul className={styles.links}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`${styles.link} ${active === href.slice(1) ? styles.active : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
