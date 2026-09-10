import { profile } from '../data.js'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <h2>About</h2>
        </div>

        <div className="about-grid">
          <p className="about-text">
            I'm an AI Engineer and Junior Data Engineer with hands-on experience designing, building,
            testing, and supporting AI-powered agents using Microsoft Copilot Studio. My work centers on
            Agentic AI, AI testing, prompt design, and intelligent workflow automation for enterprise use
            cases — complemented by a solid foundation in data engineering, from ETL pipelines and SQL to
            AWS, SSIS, Power BI, Tableau, and Python. I care about production support, data validation,
            and analytics workflows that turn raw data into business decisions people can trust.
          </p>

          <div className="about-facts">
            <div className="about-fact">
              <span className="k">LOCATION</span>
              <span className="v">{profile.location}</span>
            </div>
            <div className="about-fact">
              <span className="k">ROLE</span>
              <span className="v">Junior Data Engineer, Saksoft Limited</span>
            </div>
            <div className="about-fact">
              <span className="k">EDUCATION</span>
              <span className="v">B.Tech CSE, SRM Institute of Science and Technology</span>
            </div>
            <div className="about-fact">
              <span className="k">CGPA</span>
              <span className="v">9.84 / 10 · University 3rd Rank</span>
            </div>
            <div className="about-fact">
              <span className="k">EMAIL</span>
              <span className="v">{profile.email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
