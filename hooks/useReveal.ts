'use client'
import { useEffect, useRef } from 'react'

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets: Element[] = el.classList.contains('reveal')
      ? [el, ...Array.from(el.querySelectorAll('.reveal'))]
      : Array.from(el.querySelectorAll('.reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])
  return ref
}