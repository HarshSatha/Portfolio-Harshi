import { profile } from '../data.js'
import portrait from '../assets/harsshita.jpg'

const techBadges = [
  ['Copilot Studio', 'AI Agents', '/logos/copilot.svg', 'label-copilot'],
  ['Agentic AI', 'Automation', '/logos/copilot.svg', 'label-ai'],
  ['Data Engineering', 'SQL · ETL · BI', '/logos/sql.svg', 'label-data'],
]

export default function Hero() {
  return <section id="home" className="hero section-grid-bg">
    <div className="hero-copy">
      <span className="hello-pill">✦ Hello, I&apos;m</span>
      <h1><span>Harsshita</span><em>Sathasivam</em></h1>
      <h2>{profile.role}</h2>
      <div className="hero-tags">{profile.subtitle.split(' · ').map((x, i) => <span key={x}>{i > 0 && <b>·</b>}{x}</span>)}</div>
      <p className="hero-lead">{profile.summary}</p>
      <div className="hero-actions"><a className="btn primary" href="#projects">Explore My Work <span>→</span></a><a className="btn ghost" href="#contact">Let&apos;s Connect <span>↗</span></a></div>
      <div className="socials"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><img className="social-logo" src="/logos/linkedin.svg" alt="LinkedIn"/></a><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><img className="social-logo" src="/logos/github.svg" alt="GitHub"/></a></div>
    </div>
    <div className="hero-visual">
      <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="hero-glow"/>
      <div className="portrait-ring"><img src={portrait} alt="Harsshita Sathasivam"/></div>
      {techBadges.map(([title, sub, logo, cls]) => <div className={'float-label '+cls} key={title}><span className="logo-box"><img src={logo} alt=""/></span><div><strong>{title}</strong><small>{sub}</small></div></div>)}
      <span className="scribble">Dream<br/>Build<br/>Grow ♡</span>
    </div>
  </section>
}
