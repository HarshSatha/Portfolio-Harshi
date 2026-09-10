import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container-wide">
        <div className="section-head">
          <h2>Projects</h2>
        </div>

        <div className="project-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="top-row">
                <h3>{p.title}</h3>
                {p.period && <span className="project-period">{p.period}</span>}
              </div>
              <p className="project-role">{p.role}</p>
              <p className="project-desc">{p.description}</p>
              <div className="tag-row">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
