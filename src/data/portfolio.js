// Keep the portfolio curated. Add completed work here when there is evidence to share.
export const profile = {
  name: "Ashu Chauhan",
  email: "ashuchauhan2702@gmail.com",
  github: "https://github.com/ashuchauhan2",
  linkedin: "https://www.linkedin.com/in/ashuc27/",
};

export const selectedWork = [
  {
    slug: "coursemix",
    title: "CourseMix",
    category: "Academic planning · Team project",
    status: "Used by 25+ students",
    summary:
      "Turning prerequisites, degree requirements, and incomplete academic data into useful course paths and graduation projections.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    problem:
      "Course selection is more than a list of available classes. Students need to understand how prerequisites and degree requirements fit together, and how today’s choices affect their path to graduation. The academic data available to us was limited, which made the rules and data handling especially important.",
    contribution:
      "I worked on the backend planning logic: checking prerequisites and degree requirements, generating personalized course paths, and calculating graduation projections. The team built and deployed the application with Next.js, React, TypeScript, and PostgreSQL through Supabase.",
    decisions: [
      {
        title: "Model the requirements",
        text: "Translate academic rules into backend logic that can evaluate a student’s record and produce a useful course path.",
      },
      {
        title: "Work with imperfect data",
        text: "Account for limited academic data when building graduation projections and personalized suggestions.",
      },
      {
        title: "Consider the full application",
        text: "The project also included encrypted grade storage and a Vercel CI/CD pipeline for repeatable updates.",
      },
    ],
    outcome:
      "The deployed application helped 25+ active Brock University students organize course selection and scheduling.",
    takeaway:
      "This project reinforced my interest in translating a complicated real-world domain into a system people can actually use.",
    links: [
      {
        label: "View source",
        href: "https://github.com/Avipatel1107/COSC4P02/tree/main/coursemix",
      },
    ],
  },
  {
    slug: "membership-tool",
    title: "A better check-in workflow",
    category: "Operational software · Grand Niagara",
    status: "Deployed on site",
    summary:
      "Replacing paper-based membership pass checks with a searchable desktop tool, built around the daily needs of pro shop staff.",
    technologies: ["Java", "Swing", "Database interface"],
    problem:
      "Membership pass verification at Grand Niagara Golf Club relied on paper records and manual lookups. It was a recurring point of friction during customer check-in, and I experienced the workflow directly while working in the pro shop.",
    contribution:
      "I designed and deployed a Java/Swing desktop application with a searchable database interface to replace the paper-based verification process. Working alongside the staff who used it gave me a direct understanding of the operational problem.",
    decisions: [
      {
        title: "Start with the workflow",
        text: "Focus on the actual check-in task: helping staff find the right membership information without searching paper records.",
      },
      {
        title: "Build a focused interface",
        text: "Use a searchable desktop database interface to make the needed information accessible during daily operations.",
      },
      {
        title: "Understand the environment",
        text: "Alongside the application, I troubleshot point-of-sale, network, and printer issues across the facility.",
      },
    ],
    outcome:
      "The application replaced paper-based membership verification and streamlined customer check-in by reducing manual lookups.",
    takeaway:
      "Useful engineering starts with understanding the environment a tool will operate in, including the people and hardware around it.",
    links: [
      {
        label: "View source",
        href: "https://github.com/ashuchauhan2/gnpackages",
      },
    ],
  },
  {
    slug: "gymrocks",
    title: "Gymrocks",
    category: "iOS application · Independent project",
    status: "Published on the App Store",
    summary:
      "An offline-first strength-training app that turns workout history into progression recommendations and keeps routines close at hand.",
    technologies: ["Swift", "SwiftUI", "Local persistence"],
    problem:
      "Tracking strength training should make the next session easier to plan. The app needed to keep workout data available without connectivity and turn previous performance into useful weight and intensity recommendations.",
    contribution:
      "I built and published a native iOS application with Swift and SwiftUI. It combines workout management, per-exercise trend tracking, and double-progression algorithms with offline-first local storage and deep-link routine sharing.",
    decisions: [
      {
        title: "Keep data available offline",
        text: "Use local persistence so training data remains accessible when a user has no connectivity.",
      },
      {
        title: "Make the history useful",
        text: "Apply double-progression algorithms and track per-exercise trends to inform weight and intensity recommendations.",
      },
      {
        title: "Ship the complete product",
        text: "Support routine sharing through deep links and take the application through publication on the Apple App Store.",
      },
    ],
    outcome:
      "Published on the Apple App Store as a native strength-training app for managing workouts and reviewing training recommendations.",
    takeaway:
      "Shipping a product means connecting the data model, decision logic, user experience, and release process.",
    links: [
      {
        label: "View on the App Store",
        href: "https://apps.apple.com/ca/app/gymrocks/id6762212492",
      },
    ],
  },
];

export const experience = [
  {
    company: "Grand Niagara Golf Club",
    role: "Pro Shop Team Lead · Seasonal",
    dates: "2023–2026",
    summary:
      "Built an operational desktop tool, resolved hardware and network issues, and supported the everyday workflows of a busy facility.",
  },
  {
    company: "Shared Services Canada",
    role: "IT Support Technician · Internship",
    dates: "2022",
    summary:
      "Performed server health checks and maintenance, supported enterprise mobile device management, and resolved access and account issues.",
  },
];

export const focusAreas = [
  {
    title: "Agentic applications",
    description:
      "Tool use, planning, and evaluation that make AI useful in real workflows.",
  },
  {
    title: "Autonomous robotics",
    description:
      "Perception, decision-making, and the connection between software and the physical world.",
  },
  {
    title: "Systems engineering",
    description:
      "Interfaces, reliability, and the tradeoffs that shape how a whole system behaves.",
  },
];
