import { profile } from '../data.js'

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container-wide">
          <div className="contact-inner">
            <div>
              <h2>Let's build something intelligent together.</h2>
              <p className="contact-sub">
                Open to roles and collaborations in Agentic AI, Copilot Studio development, and data
                engineering. Reach out — I usually reply within a day.
              </p>
            </div>

            <div className="contact-links">
              <a className="contact-link" href={`mailto:${profile.email}`}>
                <span className="k">EMAIL</span> {profile.email}
              </a>
              <a className="contact-link" href={`tel:${profile.phone}`}>
                <span className="k">PHONE</span> {profile.phone}
              </a>
              <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                <span className="k">LINKEDIN</span> View profile
              </a>
              <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
                <span className="k">GITHUB</span> View profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>designed &amp; built by {profile.name} · {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
