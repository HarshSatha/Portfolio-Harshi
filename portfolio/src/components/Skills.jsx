import { skills } from '../data.js'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.group}>
              <p className="group-title">{group.group}</p>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span className="skill-chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
