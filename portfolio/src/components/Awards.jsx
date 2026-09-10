import { awards } from '../data.js'

export default function Awards() {
  return (
    <section id="awards">
      <div className="container">
        <div className="section-head">
          <h2>Awards & Recognition</h2>
        </div>

        <div className="award-grid">
          {awards.map((a) => (
            <div className="award-card" key={a.title}>
              <h3 className="award-title">{a.title}</h3>
              <p className="award-org">{a.org}</p>
              <p className="award-period">{a.period}</p>
              <p className="award-detail">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
