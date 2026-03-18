// Add spotlight items here, like resume/contact/education highlights.
// These show up in the top "Recent Uploads" grid.
export const spotlightSection = {
    id: 'spotlight',
    title: 'Recent Uploads',
    description: 'Latest updates and milestones.',
    variant: 'grid',
    items: [
      {
        id: 'brock-university-highlight',
        title: 'Brock University Grad',
        description:
          'Graduated from Brock University with a Bachelor of Science in Computer Science. Key Courses: Data Structures and Algorithms, Software Engineering, Natural Language Processing, Artificial Intelligence, and more.',
        meta: 'Education · Class of 2025',
        accent: 'from-emerald-500 to-teal-500',
        thumbnail: {
          type: 'image',
          src: '/brock_u.jpeg',
          alt: 'Brock University Campus',
        },
        filters: ['education'],
        profiles: ['full-stack', 'community'],
        cta: '/content/brock-university-highlight',
      },
      {
        id: 'connect-with-me',
        title: "Connect with me!",
        description:
          'Get in touch to discuss potential collaborations or opportunities. I am always reachable at ashuchauhan2702@gmail.com or 905-358-4278.',
        meta: 'Contact · North America',
        badge: 'Available',
        accent: 'from-red-500 to-rose-600',
        thumbnail: {
          type: 'image',
          src: '/contact-me.jpg',
          alt: 'Click me to connect with me!',
        },
        filters: ['contact'],
        profiles: ['full-stack', 'mobile', 'community'],
        cta: '/content/connect-with-me',
      },
      {
        id: 'aws-cloud-practitioner-cert',
        title: 'Certified Cloud Practitioner',
        description:
          'Currently pursuing foundational AWS certification to strengthen cloud infrastructure knowledge and best practices.',
        meta: 'Certification · In Progress',
        badge: 'Work in Progress',
        accent: 'from-orange-500 to-amber-400',
        thumbnail: {
          type: 'image',
          src: '/aws.png',
          alt: 'AWS Certified Cloud Practitioner',
        },
        filters: ['education'],
        profiles: ['full-stack'],
        cta: '/content/aws-cloud-practitioner-cert',
      },
      {
        id: 'resume',
        title: 'Resume',
        description:
          'Complete overview of my education, work experience, technical skills, and key projects.',
        meta: 'Document · PDF',
        badge: 'Updated 2025',
        accent: 'from-blue-600 to-indigo-600',
        thumbnail: {
          type: 'image',
          src: '/resume.jpg',
          alt: 'View my resume',
        },
        filters: ['education'],
        profiles: ['full-stack', 'mobile', 'community'],
        cta: '/content/resume',
      },
    ],
  }
