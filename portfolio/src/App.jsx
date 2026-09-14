import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Publications from './components/Publications.jsx'
import Awards from './components/Awards.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App(){
  return <div className="site-shell">
    <Nav />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Awards />
      <Education />
      <Contact />
    </main>
    <footer className="footer"><div className="footer-brand"><span className="mini-logo">HS</span><span>Harsshita Sathasivam</span></div><div className="footer-nav"><a href="#home">Home</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#publications">Publications</a><a href="#awards">Awards</a><a href="#education">Education</a><a href="#contact">Contact</a></div><div className="footer-social"><a href="https://www.linkedin.com/in/harsshitasathasivam/" target="_blank" rel="noreferrer"><img src="/logos/linkedin.svg" alt="LinkedIn"/></a><a href="https://github.com/HarshSatha" target="_blank" rel="noreferrer"><img src="/logos/github.svg" alt="GitHub"/></a></div><p>© 2026 Harsshita Sathasivam · Built with curiosity & AI</p></footer>
  </div>
}
