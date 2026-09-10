import { education } from '../data.js'

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-head">
          <h2>Education</h2>
        </div>

        <div className="edu-list">
          {education.map((e) => (
            <div className="edu-item" key={e.school + e.degree}>
              <span className="edu-period">{e.period}</span>
              <div>
                <h3 className="edu-school">{e.school}</h3>
                <p className="edu-degree">{e.degree}</p>
                {e.detail && <p className="edu-detail">{e.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
