import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'awards', label: 'Awards' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a className="nav-mark" href="#top" onClick={(e) => { e.preventDefault(); goTo('top') }}>
        <span className="dot" aria-hidden="true" />
        HS.dev
      </a>

      <div className="nav-links">
        {LINKS.map((l) => (
          <button
            key={l.id}
            className={active === l.id ? 'active' : ''}
            onClick={() => goTo(l.id)}
          >
            {l.label}
          </button>
        ))}
      </div>

      <a className="nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); goTo('contact') }}>
        Get in touch
      </a>

      <button
        className="nav-toggle"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => goTo(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
