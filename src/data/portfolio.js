export const profile = {
  name: "Mike Jordan Fernandez",
  role: "Full-stack developer",
  location: "Marikina City, Philippines",
  intro:
    "I build web applications from the interface to the API and database with React, TypeScript, Node.js, and PostgreSQL. My work includes a vocabulary app, a deployed online card shop, and a church registration system used in live operations.",
  about:
    "I'm a full-stack developer who enjoys bringing interfaces and the systems behind them together. I've built responsive React applications, secure authentication flows, and APIs, and contributed to production projects ranging from a blockchain marketplace to attendee registration and QR workflows.",
  email: "fmikejordan1213@gmail.com",
  resume:
    "https://drive.google.com/file/d/1GKulQDM8cBx7ORkW-1UMNI4qF2hb7LNE/view?usp=sharing",
  github: "https://github.com/mjfernandez02",
  linkedin: "https://www.linkedin.com/in/fernandez-mike-jordan/",
};

export const projects = [
  {
    title: "GrayMerchant Online Card Shop",
    year: "2026 to present",
    desc: "Contribute backend authentication and authorization to a deployed card shop by adapting AuthFlow for registration, login, sessions, rotating refresh tokens, logout, and OAuth 2.0. Implement staff and admin access, account lockout, request validation, and end-to-end authentication tests.",
    stack: ["OAuth 2.0", "JWT", "Sessions", "RBAC", "End-to-end testing"],
    href: "https://github.com/Jhin2003/gray-merchant",
  },
  {
    title: "Elevate Registration System",
    year: "2026 to present",
    desc: "Contribute frontend features to the church's live registration website and desktop application. Migrate attendee registration from Firebase to Supabase while preserving form validation and using saved attendee UUIDs for QR generation.",
    stack: ["React", "TypeScript", "Vite", "Tauri", "Chakra UI", "Supabase"],
  },
  {
    title: "WordWell",
    year: "March 2026 to present",
    desc: "Built a vocabulary learning web app with a responsive React interface for daily lessons and practice. Developed its authentication platform with OAuth 2.0, PKCE, refresh-token rotation, cookie-based SSO, and protected routes with automatic token renewal.",
    stack: [
      "React",
      "Chakra UI",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "Vitest",
    ],
    href: "https://github.com/mjfernandez02/WordWell",
    demo: "https://wordwelll.vercel.app/",
    preview: "/previews/wordwell.png",
    previewAlt: "WordWell homepage with daily vocabulary lessons and practice",
  },
  {
    title: "Go Green Ticket",
    subtitle: "Responsive event discovery website",
    status: "Frontend prototype",
    desc: "Built a responsive event discovery interface for browsing movies, concerts, sports, and theatre. Added live search, touch-friendly carousels, keyboard navigation, and accessible FAQs, with smooth transitions and support for reduced motion. Booking and payments aren't connected yet.",
    stack: [
      "Next.js",
      "React",
      "Material UI",
      "JavaScript",
      "Responsive Design",
    ],
    demo: "https://ggt-ui.vercel.app/",
    demoLabel: "View preview",
    preview: "/previews/go-green-ticket.png",
    previewAlt:
      "Go Green Ticket frontend prototype with event categories, search, and a featured movie carousel",
  },
];

export const skills = [
  { group: "Languages", items: "TypeScript, JavaScript" },
  {
    group: "Frontend",
    items:
    "React, Next.js, Vite, Chakra UI, Tailwind CSS, Material UI, HTML, CSS",
  },
  {
    group: "Backend",
    items: "Node.js, Express.js, REST APIs",
  },
  {
    group: "Data",
    items: "PostgreSQL, MySQL, Supabase, Prisma",
  },
  {
    group: "Testing and tools",
    items: "Git, GitHub, Vercel, Render",
  },
];

export const experience = [
  {
    when: "June to July 2025",
    what: "Full Stack Developer, Energi (Contract)",
    note: "Developed Node.js indexing jobs for NFT mints, transfers, marketplace volume, and IPFS metadata across multiple blockchains. Implemented responsive Next.js and Material UI features from Figma and contributed caching, batching, and debugging improvements to the production codebase.",
  },
];

export const education = {
  when: "2022 to 2026",
  degree: "Bachelor of Science in Computer Science",
  school: "AMA Computer University",
};
