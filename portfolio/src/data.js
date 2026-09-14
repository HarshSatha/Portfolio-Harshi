// Portfolio content. Keep this file as the single source of truth for your details.
export const profile = {
  name: 'Harsshita Sathasivam',
  role: 'AI Developer',
  subtitle: 'Agentic AI · Copilot Studio · Data Engineering',
  location: 'West Mambalam, Chennai, Tamil Nadu',
  phone: '+91-9384751009',
  email: 'harshsatha2004@gmail.com',
  linkedin: 'https://www.linkedin.com/in/harsshitasathasivam/',
  github: 'https://github.com/HarshSatha',
  summary:
    'I build AI-powered agents and data platforms — designing, testing and shipping Agentic AI workflows in Microsoft Copilot Studio, and the ETL pipelines, SQL, and dashboards that keep the data behind them trustworthy.',
  tagline:
    'Designing enterprise AI agents by day, ETL pipelines and dashboards by night — all in service of data that businesses can actually act on.',
}

export const experience = [
  {
    role: 'Junior Data Engineer', org: 'Saksoft Limited', period: 'Mar 2026 — Present', logo: '/logos/saksoft.svg',
    points: [
      'Working on-site with a client to design, develop, and support AI-powered agents using Microsoft Copilot Studio for enterprise use cases.',
      'Building Agentic AI workflows, implementing prompt engineering techniques, and validating AI agent performance.',
      'Conducting AI testing, debugging conversational flows, and optimizing agent responses for improved user experience.',
      'Supporting Azure functions with Python coding to automate workflow optimisation.',
      'Collaborating with cross-functional teams to deliver AI-driven automation solutions and scalable data platforms.',
    ],
  },
  {
    role: 'Trainee Engineer', org: 'Saksoft Limited', period: 'July 2025 — Mar 2026', logo: '/logos/saksoft.svg',
    points: [
      'Developed SQL queries for data extraction, validation, and analysis to support business requirements.',
      'Supported ETL processes using SSIS and SSMS while monitoring and validating data workflows.',
      'Worked on SQL-based data validation, issue analysis, and troubleshooting for business reporting requirements.',
      'Created and maintained interactive dashboards using Power BI and Tableau for business reporting.',
      'Provided production support by resolving data issues, validating reports, and ensuring data accuracy in live project environments.',
    ],
  },
  {
    role: 'Intern', org: 'Cognizant', period: 'Dec 2024 — Mar 2025', logo: '/logos/cognizant.svg',
    points: [
      'Built ETL pipelines using PySpark on Databricks for scalable AWS-based data processing.',
      'Worked with AWS services including S3, Athena, Redshift, Glue, and QuickSight for data integration and analytics.',
      'Assisted in developing dashboards and automating data workflows to support analytics and reporting requirements.',
      'Gained hands-on experience in data engineering, cloud technologies, and scalable ETL pipeline development.',
    ],
  },
]

export const featuredProjects = [
  {
    title: 'AI-COC — Pre-Sales Assistant AI Agent', role: 'AI / Agent Development', period: 'Mar 2026 — Present', icon: '✦',
    description: 'Designed, developed, and tested a Pre-Sales Assistant AI Agent using Microsoft Copilot Studio to support enterprise pre-sales activities. Built Agentic AI workflows, prompt engineering and AI testing into the conversational experience.',
    tags: ['Copilot Studio', 'Agentic AI', 'Prompt Engineering', 'AI Testing'],
  },
  {
    title: 'Data Analytics Platform — Production Support & Automation', role: 'Support Engineering', period: 'Aug 2025 — Dec 2025', icon: '◇',
    description: 'Worked on a live analytics project, monitoring SQL jobs, validating data across SQL, SSIS and Tableau, supporting production and creating SSIS packages to automate workflows.',
    tags: ['SQL', 'SSIS', 'Tableau', 'Production Support'],
  },
  {
    title: 'Healthcare ETL Pipeline for Stroke Analysis', role: 'Personal / Academic Project', period: '', icon: '▣',
    description: 'Built an AWS-based pipeline using S3, Glue, Athena, Redshift and QuickSight for automated ingestion, transformation and visualization of stroke-risk analytics.',
    tags: ['AWS', 'Glue', 'Athena', 'Redshift'],
  },
]

export const projects = [
  {
    title: 'IntelliFinance', role: 'Personal / Academic Project', period: '2024', icon: '▣',
    description: 'Android-based personal finance management app using Kotlin, Firebase and ML Kit, with OCR-powered receipt scanning and visual spending analytics.',
    tags: ['Kotlin', 'Firebase', 'ML Kit', 'OCR'],
  },
  {
    title: 'Bid.Win.Own', role: 'Academic Project', period: '2025', icon: '◇',
    description: 'Online auction platform with ML-based fraud detection using Isolation Forest and Autoencoder techniques, secure payments and real-time bidding.',
    tags: ['Django', 'Flask', 'ML', 'Razorpay'],
  },
  {
    title: 'IC2ACM-2023', role: 'Conference Presentation', period: '2023', icon: '✦',
    description: 'Fruit disease detection using a lightweight CNN to classify fruit leaf diseases, presented at IC2ACM 2023.',
    tags: ['Python', 'CNN', 'Computer Vision', 'OpenCV'],
  },
]

export const skills = [
  { title: 'AI & Agent Development', items: 'Microsoft Copilot Studio · Agentic AI · AI Testing · Prompt Engineering · Conversational AI · Workflow Automation', logos: ['/logos/copilot.svg'] },
  { title: 'Data Engineering', items: 'ETL Pipelines · Data Warehousing · Data Transformation · Data Modeling · Data Validation', logos: ['/logos/ssis.svg'] },
  { title: 'Databases & Querying', items: 'SQL · SSMS · SSIS', logos: ['/logos/sql.svg', '/logos/ssms.svg', '/logos/ssis.svg'] },
  { title: 'Cloud & Data Platforms', items: 'AWS · Databricks', logos: ['/logos/aws.svg', '/logos/databricks.svg'] },
  { title: 'Business Intelligence', items: 'Power BI · Tableau', logos: ['/logos/powerbi.svg', '/logos/tableau.svg'] },
  { title: 'Programming', items: 'Python', logos: ['/logos/python.svg'] },
]

export const awards = [
  { title: 'University 3rd Rank', org: 'SRM Institute of Science and Technology', period: '2025', detail: 'B.Tech CSE (Big Data Analytics) · CGPA 9.84/10', badge: 'Academic Distinction', type: 'rank' },
  { title: 'Saksoft Openness Award', org: 'Saksoft Limited', period: 'Apr — Jun 2026', detail: 'Recognized for valuable contribution, collaboration and contribution to AI agent development.', badge: 'Professional Recognition', type: 'openness', certificate: '/certificates/openness-award.png' },
]

export const publications = [
  { type: 'Published Research', venue: 'IRJAEM · 2025', title: 'Secure Online Auction System with ML-Based Fraud Detection', description: 'Research on a secure and scalable online auction platform with machine-learning-based fraud detection.', url: 'https://goldncloudpublications.com/index.php/irjaem/article/view/886' },
  { type: 'Published Research', venue: 'IRJAEH · 2024', title: 'Advanced Personal Budget Analytics Using OCR and NLP', description: 'Research on intelligent personal finance analytics using OCR and NLP techniques.', url: 'https://irjaeh.com/index.php/journal/article/view/397' },
  { type: 'Conference Presentation', venue: 'IC2ACM · 2023', title: 'Enhanced Fruit Disease Detection with Leaves Using CNN', description: 'Presented research on CNN-based fruit leaf disease detection at IC2ACM 2023.', url: null },
]

export const education = [
  { school: 'SRM Institute of Science and Technology, Ramapuram — Chennai', degree: 'B.Tech in Computer Science and Engineering (Specialisation: Big Data Analytics)', period: 'Sep 2021 — May 2025', detail: 'CGPA: 9.84/10', distinction: 'University 3rd Rank · Academic Distinction', logo: '/logos/srm.svg' },
  { school: 'Modern Senior Secondary School, Chennai', degree: '12th Standard (CBSE)', period: 'Apr 2020 — Apr 2021', detail: 'Score: 95.0%' },
  { school: 'Modern Senior Secondary School, Chennai', degree: '10th Standard (CBSE)', period: 'Apr 2018 — Apr 2019', detail: 'Score: 87.4%' },
]
