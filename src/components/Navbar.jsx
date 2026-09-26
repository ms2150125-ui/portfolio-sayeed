import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [['About', '/#about'], ['Skills', '/#skills'], ['Work', '/#work'], ['Journey', '/#experience'], ['Certificates', '/#certifications'], ['Photography', '/#gallery'], ['Contact', '/#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const handleScroll = () => setScrolled(window.scrollY > 18); window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll) }, [])
  return <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}><div className="container nav__inner"><a className="wordmark" href="/#top">MD<span>.</span> SAYEED</a><nav className="nav__links" aria-label="Primary navigation">{links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</nav><div className="nav__actions"><a className="nav__resume" href="/resume.pdf">Resume</a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button></div></div>{open && <nav className="mobile-menu" aria-label="Mobile navigation">{links.map(([label, href]) => <a href={href} onClick={() => setOpen(false)} key={label}>{label}</a>)}<a href="/resume.pdf">Resume</a></nav>}</header>
}