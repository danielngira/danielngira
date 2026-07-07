export const Folders = {
  Closed: "Closed",
  Projects: "Projects",
  MyComputer: "My Computer",
  Media: "Media",
  Resume: "Resume",
  ContactMe: "Contact Me",
};

export const DANIEL_BIO = [
  "Hello and welcome to my space on the internet.",
  "---------------------------------------",
  "I'm Daniel Ngira, a computer science graduate from the University of Chicago and a software engineer interested in building useful, reliable, and well-designed products.",
  "Most of my work sits between product engineering and infrastructure. I have built React Native and Supabase applications, worked with AI-powered user experiences, provisioned AWS infrastructure with CDK, automated deployments with GitHub Actions, and designed lower-level systems projects like a pipelined ARM/LEGv8 simulator.",
  "I like projects where I can understand the problem deeply and keep improving the details until the product feels clear and usable.",
  "This portfolio was inspired by Windows XP, the first operating system I remember using. I wanted it to feel like a small desktop from my childhood: a place where you can open folders, explore files, and get to know my work, projects, resume, and interests!",
];

export const DANIEL_RESUME = `Daniel Ngira
312-757-0145 | danielngira@uchicago.edu

EDUCATION
--------------------------------------------------------------------------------
The University of Chicago                                             Jun 2026
Bachelor of Science, Computer Science                                   Chicago

Achievements:
- Odyssey Scholar (2022-26)
- Luther H. Foster Jr. Public Service Internship Program (2022-24)

Coursework:
- Computer Architecture
- Systems Programming I & II
- Algorithms
- Programming Languages


CERTIFICATIONS
--------------------------------------------------------------------------------
- Google Africa Developer Training Program: Mobile Web Development Track
- CodePath Intermediate Technical Interview Prep


TECHNICAL SKILLS
--------------------------------------------------------------------------------
Languages:
- Python, C, C++, TypeScript, JavaScript, HTML, CSS, C#

Frameworks:
- React, AWS CDK, Next.js, Vue.js, Expo React Native, Django, Tailwind CSS, Node.js

Databases:
- MySQL, PostgreSQL, Prisma, Supabase

APIs:
- GraphQL, REST

Cloud & DevOps:
- AWS EC2, S3, RDS, Lambda, CloudFront
- CI/CD with GitHub Actions
- Docker

Libraries:
- pandas, React Query, Redux Toolkit, Axios


EXPERIENCE
--------------------------------------------------------------------------------
Mila Support                                                      Jun 2025 - Aug 2025
Software Engineering Intern                                                Virtual

- Built an AI-powered doula mobile app from scratch through pilot launch on a
  2-person team using React Native, Supabase, and TypeScript, centralizing care
  plans, expert calls, and AI guidance to make postpartum support more accessible.

- Integrated Calendly with the Supabase backend, automating scheduling and call
  tracking to save an estimated 3-5 minutes per booking and reduce manual
  coordination for expert support calls.

- Built privacy and notification preference settings, partner-sharing features,
  and dynamic weekly care plans with Supabase logic, enhancing user privacy and
  delivering personalized care.

- Developed AI-generated summaries and guidance via the OpenAI API and custom
  prompt logic, delivering concise, actionable information to users.


GridLink                                                         Jun 2024 - Aug 2024
Software Engineering Intern                                                Virtual

- Designed and provisioned modular AWS infrastructure using CDK in TypeScript on
  a 2-person team, separating frontend, backend, logging, and shared resources
  into distinct stacks to improve maintainability, scalability, and cut estimated
  cloud operating costs by ~20%.

- Implemented multi-environment Prod/Beta setup with RDS isolation, DNS
  certificates, and secure routing, enabling safe testing and faster deployments.

- Managed PostgreSQL databases via RDS with schema migrations through Prisma,
  ensuring consistent updates across environments.

- Established monitoring and logging with CloudWatch and Lambda-based Slack
  alerts, improving production visibility and cutting estimated incident
  detection and initial triage time by ~50%.

- Automated deployments with GitHub Actions and Nx, reducing deployment time
  from ~30 minutes to ~8 minutes and lowering manual deployment errors.


TECHNICAL PROJECTS
--------------------------------------------------------------------------------
LEGv8 / ARM 64 Simulator                                      Sep 2025 - Dec 2025
https://github.com/danielngira/computer-architecture-lab-2

- Designed a microprocessor with 5-stage pipeline, hazard detection and
  forwarding for RAW hazards, branch handling with flush/late cancel, and a
  data-cache model with hit/miss and write-policy behavior.

- Prototyped performance counters for CPI, stall cycles, cache hit rate, and
  trace logging for bottleneck analysis.

- Analyzed pipeline performance across varying instruction mixes to quantify CPI
  and cache efficiency.


College Life Simulator                                      Jan 2025 - Mar 2025
https://github.com/spencerdearman/procrastination-simulator

- Developed a React-based simulation game that mimics a college student's daily
  schedule.

- Implemented dynamic scheduling features using React components and state
  management, integrating a custom game-logic system to simulate time progression
  and task execution.
`;

export const SITE_TODOS: string[] = [
  "Add my projects",
  "Add my favorite books, movies and albums to media folder",
  "Add functionality to minimize and maximize pages",
  "Add functionality to move pages around screen",
];
