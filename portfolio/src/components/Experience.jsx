import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head">
          <h2>Experience</h2>
        </div>

        <div className="timeline">
          {experience.map((job, i) => (
            <div className={`timeline-item${i === 0 ? ' current' : ''}`} key={job.role + job.period}>
              <span className="timeline-node" aria-hidden="true" />
              <span className="timeline-period">{job.period}</span>
              <h3 className="timeline-role">{job.role}</h3>
              <p className="timeline-org">{job.org}</p>
              <ul className="timeline-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
