// Add professional experience entries here.
// These are rendered as reel-style cards in the experience section.
export const experienceSection = {
    id: 'experience',
    title: 'Experience',
    description: 'My professional experiences.',
    variant: 'reels',
    items: [
      {
        id: 'grand-niagara-team-lead',
        title: 'Grand Niagara GC',
        description:
          'Helped manage the daily operations of a premium golf facility.',
        meta: 'Apr 2023 - Nov 2025',
        location: 'Port Robinson, Ontario',
        highlights: [
          'Built a Java/Swing desktop app that automated membership pass lookups and sped up check-ins.',
          'Optimized facility-wide printer configurations to cut waste and keep operations resilient.',
          'Led 150+ transactions per day, tightening POS processes to reduce discrepancies by 25%.',
          'Assisted with redefining roles during a transition from 18 hole to 9 hole facility.',
        ],
        learnings: [
          'Golf course operations and management',
          'Improving efficiency and customer service',
          'Team management and leadership',
          'Troubleshooting and resolving IT related issues',
        ],
        accent: 'from-rose-500 to-fuchsia-500',
        thumbnail: {
          type: 'image',
          src: '/gnpackages.png',
          alt: 'Grand Niagara golf club operations',
        },
        filters: ['experience'],
        profiles: ['full-stack'],
        cta: '/experience',
        channel: {
          label: 'Code',
          type: 'code',
          href: 'https://github.com/ashuchauhan2/gnpackages',
        },
      },
      {
        id: 'shared-services-canada',
        title: 'Shared Services Canada · IT Support Technician (Intern)',
        description:
          'Maintained national infrastructure health for critical federal services.',
        meta: 'Sep 2022 - Dec 2022',
        location: 'Ottawa, Ontario - Remote',
        highlights: [
          'Executed weekly server health checks to surface risks before they caused outages.',
          'Ran backend maintenance workflows that upheld high availability standards.',
          'Supported 100,000+ federal mobile devices via enterprise MDM tooling.',
          'Started to develop internal Power BI dashboard to track server health and usage.',
        ],
        learnings: [
          'Working in a remote team environment',
          'Taking ownership of issues and resolving them efficiently',
          'Taking initiative to tackle problems and improve processes',
        ],
        accent: 'from-slate-500 to-zinc-700',
        thumbnail: {
          type: 'image',
          src: '/ssc.jpg',
          alt: 'Shared Services Canada IT',
        },
        filters: ['experience'],
        profiles: ['full-stack'],
        cta: '/experience',
      },
    ],
  }
