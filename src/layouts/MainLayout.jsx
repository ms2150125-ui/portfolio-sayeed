import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Journey'
import Certificates from '../sections/Certificates'
import Photography from '../sections/Photography'
import Education from '../sections/Education'
import Contact from '../sections/Contact'

export default function MainLayout({ theme, setTheme }) {
  return (
    <div className="site-shell">
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Photography />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}