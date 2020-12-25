export interface IInternship {
  company: string
  role: string
  from: string
  to: string
}

export const INTERNSHIPS: IInternship[] = [
  {
    company: 'Billme (Thailand)',
    role: 'Backend Developer Intern',
    from: 'June 2019',
    to: 'July 2019',
  },
]

export interface IEducation {
  degree: string
  institite: string
  from: string
  to: string
}

export const EDUCATIONS: IEducation[] = [
  {
    degree: 'B.Sc. Information Technology',
    institite: `King Mongkut's Institute of Technology Ladkrabang`,
    from: '2017',
    to: 'Now',
  },
  {
    degree: 'High School',
    institite: `Assumption Samutprakarn School`,
    from: '2011',
    to: '2017',
  },
]

export interface IAward {
  name: string
  prize: string
  description?: string
}

export const AWARDS: IAward[] = [
  {
    name: '2019 National Software Content (NSC)',
    prize: 'Semifinal in Artificial Intelligence',
    description:
      'Classnalytic - classroom analytic platform tracking students attendance, emotion and behavior then generate into a report',
  },
  {
    name: 'NAPROCK 10th International Programming Contest - Tokushima, Japan',
    prize: 'Special Prize',
    description:
      'Classnalytic - classroom analytic platform tracking students attendance, emotion and behavior then generate into a report',
  },
  {
    name:
      'Actions on Google Hackathon Thailand 2018 - Google Developer Group Thailand',
    prize: '1st Runner-up',
    description:
      'Siri FastPass - Google Assistant app helps your guests visiting your residence more comfortable',
  },
  {
    name: 'The Stupid Hackathon 2018 - StupidHackTH Thailand',
    prize: 'First Prize in the most Angry Emoji Vote Category',
  },
  {
    name:
      'ICT Challenge 2016 - SIT King Mongkut’s University of Technology Thonburi',
    prize: 'Winner',
  },
  {
    name: '2016 C Language Programming Competition - Silipakorn University',
    prize: 'Winner',
  },
  {
    name:
      'Web Development with PHP and Javascript - IT Latkrabang Open House 2016',
    prize: 'Winner',
  },
]

export interface IActivity {
  name: string
  link?: string
  role: string
  from: string
  to: string
}

export const ACTIVITIES: IActivity[] = [
  {
    name: '17th Young Webmaster Camp',
    link: 'https://ywc17.ywc.in.th/',
    role: 'Developer and Core Team',
    from: 'June',
    to: 'December 2019',
  },
]

export interface IFeaturedProject {
  name: string
  year: string
  description: string
  links: {
    title: string
    link: string
  }[]
}

export const FEATUREDPROJECTS: IFeaturedProject[] = [
  {
    name: '17th Young Webmaster Camp',
    year: '2019',
    description: 'Registration Website, API and Backoffice',
    links: [
      {
        title: 'Registration System',
        link: 'https://github.com/WebmasterCamp/ywc17-register',
      },
      {
        title: 'API',
        link: 'https://github.com/WebmasterCamp/ywc-api',
      },
      {
        title: 'Backoffice System',
        link: 'https://github.com/WebmasterCamp/ywc-backoffice',
      },
      {
        title: 'Landing Page',
        link: 'https://github.com/webmasterCamp/ywc17-landing',
      },
    ],
  },
  {
    name: '11th Junior Webmaster Camp',
    year: '2019',
    description: '11th Junior Webmaster Camp Landing Page',
    links: [
      {
        title: 'Github',
        link: 'https://github.com/WebmasterCamp/jwc11-landing',
      },
      { title: 'Website', link: 'https://jwc.in.th/' },
    ],
  },
  {
    name: 'AQI Realtime Monitor',
    year: '2018',
    description:
      'Realtime Air Quality Index Monitor at Faculty of Information Technology, KMITL',
    links: [
      {
        title: 'Github',
        link: 'https://github.com/wiput1999/air-monitor-frontend',
      },
      { title: 'Website', link: 'https://aqi-it.netlify.app/' },
    ],
  },
]

export interface ISchoolProject {
  name: string
  year: string
  description: string
  link: string
}

export const SCHOOLPROJECTS: ISchoolProject[] = [
  {
    name: 'E-Wallet',
    year: '2019',
    description: 'E-Wallet API implemented in Microservice',
    link: 'https://github.com/wiput1999/sop-e-wallet',
  },
  {
    name: 'Hotel Service Management',
    year: '2019',
    description: 'Phoneless room service platform',
    link: 'https://github.com/hotel-service-management',
  },
  {
    name: 'MedicCare',
    year: '2019',
    description: 'Medication reminder application builds on Flutter',
    link: 'https://github.com/itforge-eros/MedicCare',
  },
  {
    name: 'jMedicine',
    year: '2018',
    description:
      'A desktop application that helps to manage your daily medication',
    link: 'https://github.com/oop-it-kmitl-61/jMedicine',
  },
  {
    name: 'Siri FastPass',
    year: '2018',
    description:
      'Google Assistant app helps your guests visiting your residence more comfortable',
    link: 'https://github.com/actions-on-falcon/siri-fastpass',
  },
  {
    name: 'IT Freshy Web Application',
    year: '2018',
    description: 'Web Application for Freshy Activity',
    link: 'https://github.com/itforge-eros/FWA2018',
  },
  {
    name: 'Prachoup Khiri Khan Tourist Guide',
    year: '2018',
    description:
      'Prachoup Khiri Khan Tourist Guide Website, part of Multimedia Class',
    link: 'https://github.com/wiput1999/MultimediaProject2017',
  },
  {
    name: 'Home Monitoring Platform',
    year: '2018',
    description: 'A 24 hours automated spectator in your home',
    link: 'https://github.com/wiput1999/ComPro2017-Project',
  },
  {
    name: 'Terrorism Analysis',
    year: '2017',
    description: 'Terrorism Analysis, part of PSIT class',
    link: 'https://github.com/wiput1999/TerrorismAnalysis',
  },
]

export const SKILLS: string[] = [
  'React',
  'JavaScript',
  'TypeScript',
  'Firebase',
  'NodeJS',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'ExpressJS',
  'NestJS',
  'TypeORM',
  'Docker',
  'Kubernetes',
  'Python',
  'Django',
  'Java',
  'Spring',
]
