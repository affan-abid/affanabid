// data/index.ts — Single source of truth. Edit only this file to update content.

export const person = {
  name: 'Muhammad Affan Abid',
  shortName: 'Affan.',
  role: 'Senior Full-Stack Engineer',
  location: 'Hicksville, NY, USA',
  email: 'm.affanabid@gmail.com',
  phone: '+1 516 552 4991',
  linkedin: 'https://www.linkedin.com/in/affan-abid/',
  summary:
    'Backend-focused full-stack engineer with 5+ years building and scaling B2B SaaS across healthcare, fintech, and education. Shipped 10+ multi-tenant platforms, scaled APIs to 2M+ monthly requests at sub-200ms latency, and cut deployment time by 90%.',
  about: [
    "I'm a <strong>Senior Full-Stack Software Engineer</strong> with 6+ years shipping production B2B SaaS platforms used by thousands across healthcare, fintech, and education. My focus is the backend — scalable APIs, rock-solid multi-tenant data models, and infrastructure that doesn't break at 2AM.",
    "I've built systems that handle <strong>2M+ API requests per month at sub-200ms latency</strong>, achieved zero data-isolation incidents across 15+ multi-tenant products, and eliminated deployment headaches by cutting release cycles <strong>from 2–3 hours down to under 15 minutes</strong>.",
    "Beyond engineering, I'm an <strong>active ML researcher</strong> — published work on ARIMA, LSTM, and RNN models forecasting disease trends from clinical text, bridging data science with real-world healthcare impact.",
  ],
}

export const heroStats = [
  { val: '2M', unit: '+', label: 'Monthly API requests' },
  { val: '90', unit: '%', label: 'Faster deployments' },
  { val: '15', unit: '+', label: 'SaaS platforms shipped' },
  { val: '4.0', unit: '', label: 'MS GPA — SUNY Old Westbury' },
]

export const heroChips = [
  'Node.js', 'TypeScript', 'PHP', 'Laravel', 'Yii', 'React', 'Vue', 'AWS', 'Docker', 'MySQL', 'PostgreSQL', 'Python',
]

export const aboutMetrics = [
  { val: '50', unit: '+', label: 'REST APIs optimised' },
  { val: '35', unit: '%', label: 'Fewer post-release defects' },
  { val: '8',  unit: '+', label: 'Engineers mentored' },
]

export const education = [
  {
    degree: 'MS in Data Science',
    school: 'SUNY Old Westbury',
    year: 'May 2026',
    gpa: '4.0 / 4.0',
  },
  {
    degree: 'MS in Computer Science',
    school: 'Institute of Business Administration',
    year: 'May 2024',
    gpa: null,
  },
  {
    degree: 'BE — Computer & Information Systems Engineering',
    school: 'NED University of Engineering & Technology',
    year: 'Dec 2019',
    gpa: null,
  },
]

export const skillGroups = [
  {
    icon: '⚙️',
    title: 'Backend',
    skills: ['Node.js', 'TypeScript', 'PHP', 'Laravel', 'Yii2', 'Python', 'REST APIs'],
  },
  {
    icon: '🖥️',
    title: 'Frontend',
    skills: ['React', 'Vue.js', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MSSQL', 'MongoDB', 'Query Optimisation', '5M+ row datasets'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    skills: ['AWS EC2', 'AWS S3', 'AWS RDS', 'AWS Lambda', 'Docker', 'GitHub Actions', 'CI/CD'],
  },
  {
    icon: '🔐',
    title: 'Security & Integrations',
    skills: ['JWT', 'OAuth2', 'RBAC', 'OWASP', 'Stripe', 'QuickBooks', 'Xero', 'Azure AD', 'LLM', 'ChatGPT'],
  },
  {
    icon: '🤖',
    title: 'ML & Data Science',
    skills: ['ARIMA / AutoARIMA', 'RNN / LSTM', 'spaCy / NLP', 'Named Entity Recognition', 'Time-Series Forecasting', 'Sentiment Analysis'],
  },
]

export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'GoodCore Software Limited',
    location: 'Karachi, Pakistan',
    period: 'Sep 2022 — Present',
    current: true,
    metrics: [
      { val: '2M+ ',    label: 'monthly API requests' },
      { val: '<200ms ', label: 'avg. API latency' },
      { val: '90% ',    label: 'faster deployments' },
      { val: '40–50% ', label: 'faster dashboard loads' },
      { val: '0 ',      label: 'data-isolation incidents' },
    ],
    bullets: [
      'Achieved <strong>zero data-isolation incidents</strong> across 10+ multi-tenant SaaS products by architecting strict tenant-scoped data models and access control layers in Node.js and Laravel.',
      'Scaled system throughput to <strong>2M+ monthly API requests at sub-200ms average latency</strong> by optimising 50+ REST endpoints with query caching, connection pooling, and load-balanced AWS EC2 deployments.',
      'Reduced dashboard load time by <strong>40–50%</strong> by reengineering SQL queries and indexing strategies on datasets exceeding <strong>5M rows</strong>, eliminating recurring timeout escalations.',
      'Eliminated cross-tenant data exposure vulnerabilities by implementing <strong>JWT/OAuth2 and RBAC</strong> across all platform services — before production.',
      'Cut deployment time by <strong>90% (2–3 hours → under 15 minutes)</strong> by building Docker-based CI/CD pipelines with GitHub Actions and AWS.',
      'Reduced onboarding time for <strong>8+ engineers</strong> by standardising backend architecture patterns and internal documentation, decreasing ramp-up blockers across the team.',
      'Authored and maintained <strong>Swagger/OpenAPI documentation</strong>, accelerating frontend and QA onboarding by ~25%.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'GoodCore Software Limited',
    location: 'Karachi, Pakistan',
    period: 'Nov 2019 — Aug 2022',
    current: false,
    metrics: [
      { val: '40% ',  label: 'fewer transaction errors' },
      { val: '35% ',  label: 'fewer production defects' },
      { val: '20h+ ', label: 'saved per week (billing)' },
      { val: '10+ ',  label: 'third-party integrations' },
    ],
    bullets: [
      'Designed and implemented secure large-scale applications using <strong>Node.js, Laravel, and Yii2</strong>, reducing transaction error rates by 40% and increasing enterprise client trust.',
      'Eliminated manual billing reconciliation workflows by integrating <strong>Stripe, QuickBooks, Xero, and Azure AD</strong>, saving an estimated 20+ hours per week in manual accounting effort.',
      'Reduced production defects by <strong>~35%</strong> by introducing automated test coverage with PHPUnit and Jest across core backend services.',
      'Delivered <strong>4+ long-term enterprise applications</strong> supporting complex financial workflows through iterative Agile/Scrum release cycles.',
    ],
  },
]

export const projects = [
  {
    num: '01',
    domain: 'Licensing / Music Ed',
    name: 'PMLLHub',
    description: 'Automated royalty distribution, billing, and reporting for <strong>500+ educational institutions and choirs</strong> — eliminating manual end-to-end processing time with a multi-module licensing management platform.',
    stack: ['Node.js', 'MySQL', 'React.js', 'Stripe', 'XERO'],
    years: '2020–2026',
  },
  {
    num: '02',
    domain: 'Public Sector / GovTech',
    name: 'BidSushi',
    description: 'Built a <strong>full-stack tender automation platform</strong> for public sector clients, reducing manual bid management effort and streamlining the end-to-end workflow from submission to real-time tracking.',
    stack: ['Node.js', 'PostgreSQL', 'React'],
    years: '2023',
  },
  {
    num: '03',
    domain: 'Healthcare Staffing',
    name: 'GPWales',
    description: 'Healthcare staffing platform enabling real-time shift discovery, booking, and management for medical professionals. Reduced manual coordination effort by <strong>~40%</strong> via automated scheduling and approval workflows.',
    stack: ['PHP', 'Laravel', 'Docker', 'MySQL', 'Vue.js'],
    years: '2023–2025',
  },
  {
    num: '04',
    domain: 'Fintech / Pension',
    name: 'ISIO',
    description: 'Secure pension policy management covering enrollment, contributions, and compliance reporting. Designed optimised PostgreSQL schemas and integrated <strong>AWS S3 + Azure AD</strong> for document handling.',
    stack: ['PHP', 'Laravel', 'React', 'PostgreSQL', 'AWS S3'],
    years: '2024–2025',
  },
  {
    num: '05',
    domain: 'Education Technology',
    name: 'AppsAnywhere',
    description: 'Cloud-based academic software delivery platform used by universities. Improved deployment consistency and access reliability for <strong>thousands of students and staff</strong>.',
    stack: ['PHP', 'Zend', 'MySQL', 'MSSQL', 'Vue.js'],
    years: '2021–2023',
  },
  {
    num: '06',
    domain: 'ML Research',
    name: 'Disease Trend Forecasting',
    description: 'NLP pipeline using spaCy to extract medical entities from clinical records, then trained ARIMA, AutoARIMA, RNN, and LSTM models to forecast disease trends. Evaluated via RMSE and MAE.',
    stack: ['Python', 'spaCy', 'LSTM', 'ARIMA', 'RNN'],
    years: '2024–2025',
  },
]

export const publication = {
  title: 'Analyzing Disease Trends in Clinical Records: A Comparative Study of ARIMA, AutoARIMA, RNN and LSTM Time Series Models on Extracted Medical Entities',
  venue: 'Institute of Business Administration',
  year: '2024–2025',
  tags: ['NLP', 'Time-Series Forecasting', 'Healthcare AI', 'LSTM', 'ARIMA'],
  url: 'https://ir.iba.edu.pk/research-projects-mscs/51/',
}
