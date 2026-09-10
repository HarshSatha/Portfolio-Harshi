import { certifications, publications } from '../data.js'

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="section-head">
          <h2>Certifications</h2>
        </div>

        <div className="list-rows" style={{ marginBottom: 72 }}>
          {certifications.map((c) => (
            <div className="list-row" key={c.title}>
              <span className="bar" aria-hidden="true" />
              <div className="rt">
                <h4>{c.title}</h4>
                <p>{c.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section-head">
          <h2>Conferences & Publications</h2>
        </div>

        <div className="list-rows">
          {publications.map((p) => (
            <div className="list-row" key={p.title}>
              <span className="bar" aria-hidden="true" />
              <div className="rt">
                <span className="venue">{p.venue}</span>
                <h4>{p.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
