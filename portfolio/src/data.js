// All portfolio content lives here. Edit this file to update the site —
// you shouldn't need to touch the component files for text changes.

export const profile = {
  name: 'Harsshita Sathasivam',
  role: 'AI Engineer & Junior Data Engineer',
  location: 'West Mambalam, Chennai, Tamil Nadu',
  phone: '+91-9384751009',
  email: 'harshsatha2004@gmail.com',
  // TODO: replace with your real profile URLs
  linkedin: 'https://linkedin.com/in/your-handle',
  github: 'https://github.com/your-handle',
  summary:
    "I build AI-powered agents and data platforms — designing, testing and shipping Agentic AI workflows in Microsoft Copilot Studio, and the ETL pipelines, SQL, and dashboards that keep the data behind them trustworthy.",
  tagline:
    'Designing enterprise AI agents by day, ETL pipelines and dashboards by night — all in service of data that businesses can actually act on.',
}

export const experience = [
  {
    role: 'Junior Data Engineer',
    org: 'Saksoft Limited',
    period: 'Mar 2026 — Present',
    points: [
      'Working on-site with a client to design, develop, and support AI-powered agents using Microsoft Copilot Studio for enterprise use cases.',
      'Building Agentic AI workflows, implementing prompt engineering techniques, and validating AI agent performance.',
      'Conducting AI testing, debugging conversational flows, and optimizing agent responses for improved user experience.',
      'Supporting Azure functions with Python coding to automate workflow optimisation.',
      'Collaborating with cross-functional teams to deliver AI-driven automation solutions and scalable data platforms.',
    ],
  },
  {
    role: 'Trainee Engineer',
    org: 'Saksoft Limited',
    period: 'Jul 2025 — Mar 2026',
    points: [
      'Designed and enhanced AI agents using Microsoft Copilot Studio, focusing on conversational experiences and enterprise automation.',
      'Worked on prompt engineering, AI testing, and Agentic AI concepts to improve agent accuracy and reliability.',
      'Developed SQL queries for data extraction, validation, and analysis to support business requirements.',
      'Supported ETL processes using SSIS and SSMS while monitoring and validating data workflows.',
      'Created and maintained interactive dashboards using Power BI and Tableau for business reporting.',
      'Provided production support by resolving data issues, validating reports, and ensuring data accuracy in live project environments.',
    ],
  },
  {
    role: 'Intern',
    org: 'Cognizant',
    period: 'Dec 2024 — Mar 2025',
    points: [
      'Built ETL pipelines using PySpark on Databricks for scalable AWS-based data processing.',
      'Worked with AWS services including S3, Athena, Redshift, Glue, and QuickSight for data integration and analytics.',
      'Assisted in developing dashboards and automating data workflows to support analytics and reporting requirements.',
      'Gained hands-on experience in data engineering, cloud technologies, and scalable ETL pipeline development.',
    ],
  },
]

export const awards = [
  {
    title: 'Openness Award',
    org: 'Saksoft Limited',
    period: 'Apr 2026 — Jun 2026',
    detail: 'Recognized for valuable contribution at Saksoft.',
  },
  {
    title: 'University 3rd Rank',
    org: 'SRM Institute of Science and Technology',
    period: '2025',
    detail: 'Awarded for academic excellence, B.Tech CSE (Big Data Analytics), CGPA 9.84/10.',
  },
]

export const projects = [
  {
    title: 'AI-COC — Pre-Sales Assistant AI Agent',
    role: 'Junior Data Engineer',
    period: 'Mar 2026 — Present',
    description:
      'Designed, developed, and tested a Pre-Sales Assistant AI Agent using Microsoft Copilot Studio to support enterprise pre-sales activities. Built Agentic AI workflows, implemented prompt engineering techniques, performed AI testing, and optimized conversational experiences to deliver accurate, context-aware responses for business users.',
    tags: ['Copilot Studio', 'Agentic AI', 'Prompt Engineering', 'AI Testing'],
  },
  {
    title: 'Data Analytics Platform — Production Support & Automation',
    role: 'Support Engineer',
    period: 'Aug 2025 — Dec 2025',
    description:
      'Worked as a Support Engineer on a live data analytics project — monitoring SQL jobs across all environments, handling weekend production support, validating data in SQL, SSIS, and Tableau, and creating SSIS packages to automate data workflows.',
    tags: ['SQL', 'SSIS', 'Tableau', 'Production Support'],
  },
  {
    title: 'Healthcare ETL Pipeline for Stroke Analysis',
    role: 'Personal / Academic Project',
    period: '',
    description:
      'Built using AWS (S3, Glue, Athena, Redshift, QuickSight) to automate data ingestion, transformation, and visualization for stroke-risk analytics.',
    tags: ['AWS', 'Glue', 'Athena', 'Redshift', 'QuickSight'],
  },
  {
    title: 'Fruit Disease Detection',
    role: 'Personal / Academic Project',
    period: '',
    description:
      'Created a lightweight CNN using TensorFlow and Keras to classify fruit leaf diseases; deployed via Streamlit. Published as "Enhanced Fruit Disease Detection with Leaves Using CNN" at IC2ACM 2023.',
    tags: ['TensorFlow', 'Keras', 'CNN', 'Streamlit'],
  },
  {
    title: 'IntelliFinance — Intelligent Budget Analysis App',
    role: 'Personal / Academic Project',
    period: '',
    description:
      'Developed an Android-based personal finance management app using Kotlin, Firebase, and ML Kit. Integrated OCR-powered receipt scanning to automatically extract expense data and built real-time visual dashboards to categorize, track, and analyze spending patterns.',
    tags: ['Kotlin', 'Firebase', 'ML Kit', 'OCR'],
  },
]

export const skills = [
  {
    group: 'AI & Agent Development',
    items: ['Microsoft Copilot Studio', 'Agentic AI', 'AI Testing', 'Prompt Engineering', 'Conversational AI', 'Workflow Automation'],
  },
  {
    group: 'Data Engineering',
    items: ['ETL Pipelines', 'Data Warehousing', 'Data Transformation', 'Data Modeling', 'Data Validation'],
  },
  {
    group: 'Databases & Querying',
    items: ['SQL', 'SSMS', 'SSIS'],
  },
  {
    group: 'Cloud & Data Platforms',
    items: ['AWS', 'Databricks'],
  },
  {
    group: 'Business Intelligence',
    items: ['Power BI', 'Tableau'],
  },
  {
    group: 'Programming',
    items: ['Python'],
  },
]

export const certifications = [
  {
    title: 'Microsoft Learn',
    detail: 'Completed 12 AI and Microsoft Copilot Studio training modules; earned 2 Microsoft Trophies and multiple achievement badges.',
  },
  {
    title: 'Anthropic Claude',
    detail: 'Completed 17 certifications covering Claude AI, prompt engineering, AI safety, and enterprise AI applications.',
  },
  {
    title: 'Outskill',
    detail: 'Gen AI Mastermind Certification.',
  },
]

export const publications = [
  {
    venue: 'IC2ACM 2023',
    title: 'Enhanced Fruit Disease Detection with Leaves Using CNN',
  },
  {
    venue: 'IRJAEH 2024',
    title: 'Advanced Personal Budget Analytics Using OCR and NLP',
  },
  {
    venue: 'IMSTEM 2025',
    title: 'Secure Online Auction System with ML-Based Fraud Detection',
  },
]

export const education = [
  {
    school: 'SRM Institute of Science and Technology, Ramapuram — Chennai',
    degree: 'B.Tech in Computer Science and Engineering (Specialisation: Big Data Analytics)',
    period: 'Sep 2021 — May 2025',
    detail: 'CGPA: 9.84/10 · Awarded University 3rd Rank for academic excellence',
  },
  {
    school: 'Modern Senior Secondary School, Chennai',
    degree: '12th Standard (CBSE)',
    period: 'Apr 2020 — Apr 2021',
    detail: 'Score: 95.0%',
  },
  {
    school: 'Modern Senior Secondary School, Chennai',
    degree: '10th Standard (CBSE)',
    period: 'Apr 2018 — Apr 2019',
    detail: 'Score: 87.4%',
  },
]
