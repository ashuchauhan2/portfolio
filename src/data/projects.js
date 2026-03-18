// Add new portfolio projects here.
// Each item becomes a project reel on the home page and inside `/reels`.
export const projectsSection = {
    id: 'projects',
    title: 'Project Queue',
    description: 'Products and experiments shipped recently.',
    variant: 'reels',
    items: [
      {
        id: 'astro-autotapper',
        title: 'Astro AutoTapper',
        description:
          'Android app that automates astrophotography workflows.',
        meta: 'Project · Kotlin · MVVM',
        highlights: [
          'Implements AccessibilityService touch simulation with precise timing and target selection.',
          'Modular architecture across ViewModels, repositories, and StateFlow for maintainable scaling.',
          'Built for astrophotography enthusiasts to allow for automatic camera triggering and image capture.',
        ],
        learnings: [
          'Android app development with Kotlin and MVVM architecture',
          'Balanced AI-assisted prototyping with manual QA to ship a stable release.',
          'AccessibilityService development for automating camera triggering',
        ],
        thumbnail: {
          type: 'image',
          src: '/astro.jpg',
          alt: 'Astro AutoTapper automation app',
        },
        filters: ['projects'],
        profiles: ['full-stack', 'mobile'],
        channel: {
          label: 'Code',
          type: 'code',
          href: 'https://youtu.be/JttZY6Wco1k?si=x6Zn58R_TrSuEcZv',
        },
      },
      {
        id: 'consistify',
        title: 'Consistify · Habit Systems',
        description:
          'Flutter app that helps friends stay accountable with shared streaks, points, and community nudges.',
        meta: 'Project · Flutter · Firebase',
        highlights: [
          'Designs habit loops with live leaderboards, reminders, and collaborative challenges.',
          'Ships production-ready mobile UI with Bloc state management and Firebase Auth + Firestore.',
          'Personally used by my friend group to build the habit of going to the gym together.'
        ],
        learnings: [
          'Deepened expertise in cross-platform Flutter layouts and animation polish.',
          'Refined Firebase security rules and analytics instrumentation for consumer apps.',
          'Gamification techniques as well as habit formation psychology',
          'Building a mobile app with Flutter',
        ],
        thumbnail: {
          type: 'image',
          src: '/consistify.png',
          alt: 'Consistify habit tracking app',
        },
        filters: ['projects'],
        profiles: ['full-stack', 'mobile'],
        channel: {
          label: 'Code',
          type: 'code',
          href: 'https://www.youtube.com/shorts/nvrotY2moCE',
        },
      },
      {
        id: 'gn-packages',
        title: 'GN Packages · Pro Shop Utility',
        description:
          'Java Swing desktop app to automate membership lookups.',
        meta: 'Project · Java · Swing',
        highlights: [
          'Replaced manual spreadsheets with an indexed membership catalog and search shortcuts.',
          'Cut manual lookup time from 20 seconds/person to 5 seconds/person',
          'Reduced 100% of manual data entry errors.',
        ],
        learnings: [
          'How to build simple apps that have a real-world impact',
          'Managing a simple CSV database and not overengineering the solution',
          'Building a desktop app with Java Swing',
        ],
        thumbnail: {
          type: 'image',
          src: '/gnpackages.png',
          alt: 'GN Packages desktop app',
        },
        filters: ['projects'],
        profiles: ['full-stack'],
        channel: {
          label: 'Code',
          type: 'code',
          href: 'https://github.com/ashuchauhan2/gnpackages',
        },
      },
      {
        id: 'coursemix',
        title: 'CourseMix · Academic Planner',
        description:
          'Academic planning tool for Brock University students.',
        meta: 'Project · Next.js · Supabase',
        highlights: [
          'Helps students map out their degree progression and visualize their progress',
          'Provides personalized course recommendations based on prerequisite requirements and academic history',
        ],
        learnings: [
          'How to build a full-stack application from scratch.',
          'Working around data limitations and finding creative workarounds.',
          'Working in an agile development environment and collaborating with a team.',
          'Database management, data entry, and data analysis.',
          'Theorized ML data pipelines to create a smarter course suggestions system.',
        ],
        thumbnail: {
          type: 'image',
          src: '/coursemix.jpeg',
          alt: 'CourseMix planning interface',
        },
        filters: ['projects'],
        profiles: ['full-stack'],
        channel: {
          label: 'Live Demo',
          type: 'live',
          href: 'https://coursemix.ca',
        },
      },
      {
        id: 'gastimator',
        title: 'Gastimator · Trip Fuel Forecasts',
        description:
          'TypeScript web tool that estimates trip fuel costs based on route distance, efficiency, and live prices.',
        meta: 'Project · Next.js · Google Maps',
        highlights: [
          'Leverages Google Maps APIs for distance calculations and location autocomplete.',
          'Helped my family analyze our fuel consumption and costs for our driving',
        ],
        learnings: [
          'How to use GCP and Google Maps APIs to build a web application.',
          'Building a simple utility tool that can be used by people in real life.',
        ],
        thumbnail: {
          type: 'image',
          src: '/gastimator.png',
          alt: 'Gastimator fuel planning interface',
        },
        filters: ['projects'],
        profiles: ['full-stack'],
        cta: 'https://gastimator.vercel.app/',
        channel: {
          label: 'Live Demo',
          type: 'live',
          href: 'https://gastimator.vercel.app/',
        },
      },
      {
        id: 'genetic-algorithm-cryptanalysis',
        title: 'Cryptanalysis Genetic Algorithm',
        description:
          'Genetic algorithm that cracks Vigenère cipher text through population-based key evolution.',
        meta: 'Project · Java · Algorithms',
        highlights: [
          'Implements crossover, mutation, and scoring functions tuned for ciphertext frequency analysis.',
          'Visualises convergence metrics for demo-ready presentations.',
        ],
        learnings: [
          'Implementing a genetic algorithm from scratch and understanding the theory behind it.',
          'Deep understanding of the theory of genetic algorithms and how they work.',
        ],
        thumbnail: {
          type: 'image',
          src: '/ga.png',
          alt: 'Genetic algorithm cryptanalysis visualization',
        },
        filters: ['projects'],
        profiles: ['full-stack'],
        channel: {
          label: 'Code',
          type: 'code',
          href: 'https://github.com/ashuchauhan2/GeneticAlgorithm',
        },
      },
      {
        id: 'image-to-text',
        title: 'Image to Text OCR Toolkit',
        description:
          'Python + Kivy desktop tool that converts user-selected images into raw text using OCR.',
        meta: 'Project · Python · OCR',
        highlights: [
          'Uses OCR to get raw text from images..',
          'Used personally to transcribe handwritten notes and documents during university.',
        ],
        learnings: [
          'Learned how to build simple GUIs with Kivy',
          'Introductory knowledge of OCR and image processing',
          'How to build a simple desktop app with Python',
        ],
        thumbnail: {
          type: 'image',
          src: '/image2text.png',
          alt: 'Image to Text OCR interface',
        },
        filters: ['projects'],
        profiles: ['full-stack'],
        cta: 'https://github.com/ashuchauhan2/imagetotext',
        channel: {
          label: 'Code',
          type: 'code',
          href: 'https://youtu.be/CSoQYXdu0hI?si=Cp2J6-NtWMGU5_jA',
        },
      },
      {
        id: 'discord-stock-bot',
        title: 'Discord Stock Bot',
        description:
          'Python bot that surfaces real-time stock quotes and company snapshots inside Discord.',
        meta: 'Project · Python · Discord API',
        highlights: [
          'Built for friend group to track stocks and get real-time updates in Discord.',
          'Data gethered through web scraping.',
        ],
        learnings: [
          'Learned web scraping and how to extract data from a website.',
          'Learned how to use the Discord API to build a bot.',
        ],
        thumbnail: {
          type: 'image',
          src: '/stock.png',
          alt: 'Discord stock bot commands',
        },
        filters: ['projects'],
        profiles: ['full-stack'],
        cta: 'https://github.com/ashuchauhan2/stockBot',
        channel: {
          label: 'Code',
          type: 'code',
          href: 'https://github.com/ashuchauhan2/stockBot',
        },
      },
    ],
  }
