import { useEffect, useState } from 'react'
import { GitBranch, Network, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const links = [['About', '#about'], ['Skills', '#skills'], ['Featured Work', '#work'], ['Experience', '#experience'], ['Certifications', '#certifications'], ['Gallery', '#gallery'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const handleScroll = () => setScrolled(window.scrollY > 18); window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll) }, [])
  return <motion.header className={`nav ${scrolled ? 'nav--scrolled' : ''}`} animate={{ y: 0 }} initial={{ y: -20 }} transition={{ duration: .45 }}><div className="container nav__inner"><a className="wordmark" href="#top">MD<span>.</span> SAYEED</a><nav className="nav__links" aria-label="Primary navigation">{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav><div className="nav__actions"><a className="icon-link" href="https://github.com/ms2150125-ui" aria-label="GitHub"><GitBranch size={17} /></a><a className="icon-link" href="https://linkedin.com/in/md-sayeed-13b79b42b" aria-label="LinkedIn"><Network size={17} /></a><a className="icon-link" href="https://www.facebook.com/mdsayeed.dev" aria-label="Facebook" target="_blank" rel="noreferrer"><span className="facebook-mark">f</span></a><a className="nav__resume" href="/resume.pdf">Resume <span>↗</span></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button></div></div>{open && <motion.nav className="mobile-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} aria-label="Mobile navigation">{links.map(([label, href]) => <a href={href} onClick={() => setOpen(false)} key={label}>{label}</a>)}</motion.nav>}</motion.header>
}