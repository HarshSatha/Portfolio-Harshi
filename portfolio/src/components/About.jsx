import { profile } from '../data.js'
import portrait from '../assets/harsshita.jpg'

const facts = [['✦','Problem Solver'],['♡','Team Player'],['★','Continuous Learner']]
export default function About(){return <section id="about" className="about section">
  <div className="about-photo-wrap"><div className="photo-frame about-photo-frame"><img src={portrait} alt="Harsshita Sathasivam"/></div><span className="scribble about-scribble">Same<br/>girl.<br/>Bigger<br/>dreams ♡</span></div>
  <div className="about-copy"><SectionLabel text="About Me"/><h2>Turning ideas into<br/><span>intelligent solutions</span></h2>
    <p>{profile.summary}</p>
    <p>{profile.tagline}</p>
    <p>I currently work as a Junior Data Engineer at Saksoft Limited, where I focus on Microsoft Copilot Studio agents, Agentic AI, AI testing and enterprise automation, while using SQL, SSIS, Power BI, Tableau and Python across data engineering workflows.</p>
    <div className="fact-pills">{facts.map(([icon,label])=><span key={label}><b>{icon}</b>{label}</span>)}</div>
  </div>
</section>}
function SectionLabel({text}){return <div className="section-label"><span>✦</span>{text}</div>}
