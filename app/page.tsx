import Navbar      from '@/components/Navbar'
import Hero        from '@/components/Hero'
import About       from '@/components/About'
import Skills      from '@/components/Skills'
import Experience  from '@/components/Experience'
import Projects    from '@/components/Projects'
import Publication from '@/components/Publication'
import Contact     from '@/components/Contact'
import Footer      from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publication />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
