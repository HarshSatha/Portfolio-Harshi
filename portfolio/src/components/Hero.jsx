import { profile } from '../data.js'
import photo from '../assets/harsshita.jpg'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container-wide hero-grid">
        <div>
          <div className="hero-eyebrow reveal" style={{ animationDelay: '0.05s' }}>
            Available for new opportunities
          </div>

          <h1 className="reveal" style={{ animationDelay: '0.12s' }}>
            {profile.name}
            <br />
            <span className="gradient">{profile.role}</span>
          </h1>

          <p className="hero-summary reveal" style={{ animationDelay: '0.2s' }}>
            {profile.summary}
          </p>

          <div className="hero-actions reveal" style={{ animationDelay: '0.28s' }}>
            <a
              className="btn btn-primary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View my work
            </a>
            <a
              className="btn btn-ghost"
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact me
            </a>
          </div>

          <div className="hero-meta reveal" style={{ animationDelay: '0.36s' }}>
            <div className="hero-meta-item">
              <span className="label">Based in</span>
              <span className="value">{profile.location}</span>
            </div>
            <div className="hero-meta-item">
              <span className="label">Currently</span>
              <span className="value">Junior Data Engineer, Saksoft</span>
            </div>
            <div className="hero-meta-item">
              <span className="label">Focus</span>
              <span className="value">Agentic AI · Data Engineering</span>
            </div>
          </div>
        </div>

        <div className="hero-photo-wrap reveal" style={{ animationDelay: '0.15s' }}>
          <div className="hero-photo-frame">
            <img src={photo} alt={`Portrait of ${profile.name}`} />
            <span className="corner-tick tl" aria-hidden="true" />
            <span className="corner-tick br" aria-hidden="true" />
          </div>
        </div>
      </div>
    </header>
  )
}
