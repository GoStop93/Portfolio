import CollaborationImage from '../../../assets/icons/projects/collaboration.png';
import BankingImage from '../../../assets/icons/projects/banking.png';
import MoonfareImage from '../../../assets/icons/projects/moonfare.png';
import DigitalImage from '../../../assets/icons/projects/digital.png';
import HvacImage from '../../../assets/icons/projects/hvac.png';

interface InfoType {
  description: string;
  achievements: string[];
  technologies: string;
}

export interface IExperienceProps {
  isExperienceVisible: boolean;
}

export interface IExperienceEntity {
  image: string;
  text: string[];
  info: InfoType;
  id: number;
}

export const ExperienceData: IExperienceEntity[] = [
  {
    id: 1,
    text: ['Moonfare - Digital Private Equity Platform', 'Duration: 10.2024 – till now'],
    image: MoonfareImage,
    info: {
      description: `Moonfare – a digital investment platform offering accredited investors access to private equity, portfolio tools, and expert insights. With over €3 billion in assets under management, Moonfare serves a global investor network with a focus on transparency and performance.`,
      achievements: [
        'Migrated the marketing web application to Next.js, resulting in ~40% faster page load times, improved SEO performance, and a more flexible, scalable architecture.',
        'Refactored and restructured legacy codebase, leading to a noticeable reduction in technical debt and measurable improvements in Core Web Vitals.',
        'Integrated the application with Strapi (headless CMS), enabling the content team to update and deploy landing pages without developer assistance — cutting release cycles by ~30%.',
        'Built a dynamic page functionality that allows complete customization and creation of new landing pages directly from the Strapi admin panel.',
      ],
      technologies: 'Next.js, TypeScript, React Query, Storybook, Axios, Tailwind, Strapi, Jest, Zod',
    },
  },
  {
    id: 2,
    text: ['Automobile Imaging and Management Platform', 'Duration: 05.2023 – 09.2024'],
    image: DigitalImage,
    info: {
      description:
        'A multi-disciplinary imaging studio based in Los Angeles and London, developing a web platform for reviewing and delivering automotive digital assets efficiently. Key clients are Ford and Hyundai.',
      achievements: [
        'Designed and built an advanced automotive visualization interface using cutting-edge visualisation and 360° technologies, enabling high-fidelity model previews for major clients like Ford and Hyundai.',
        'Significantly improved client satisfaction, simplified asset management and made the entire workflow faster, clearer, and centralized by delivering a seamless experience for reviewing 360-degree images and panoramas, including interactive commenting and annotation tools for design collaboration.',
        'Optimized graphic resource loading, resulting in faster page rendering and smoother performance by efficiently handling images and heavy visual assets across the platform.',
        'Mentored 2 junior developers through code reviews, pair programming, and technical guidance — which led to faster onboarding, improved code quality, and a 20% increase in team delivery speed.',
      ],
      technologies: 'React, TypeScript, React Query, React Hook Form, Zustand, Storybook, Axios, MUI, SCSS, CSS Modules',
    },
  },
  {
    id: 3,
    text: ['Digital Content Collaboration Platform', 'Duration: 07.2022 – 04.2023'],
    image: CollaborationImage,
    info: {
      description:
        'A platform for digital creators to collaborate on NFTs, sounds, and gaming assets, generating revenue through smart contracts and revenue share agreements (RSC).',
      achievements: [
        'Developed user-friendly interface for previewing and interacting with digital goods and NFTs, prioritizing visually appealing content display.',
        'Optimized the UI for responsiveness across devices, improving accessibility and usability.',
        'Integrated an AI-powered assistant to streamline content creation, enhancing creator productivity and workflow efficiency.',
      ],
      technologies: 'Next.js, TypeScript, React Query, React Hook Form, Ant Design, Axios, Styled Components, Jest',
    },
  },
  {
    id: 4,
    text: ['HVAC Project Management Platform', 'Duration: 03.2021 – 06.2022'],
    image: HvacImage,
    info: {
      description:
        'A project management platform for the HVAC industry, built to optimize engineering workflows with real-time calculators, collaborative tools, and transparent documentation.',
      achievements: [
        'Built a real-time engineering calculator for HVAC system parameters directly in the browser, ensuring high accuracy and performance.',
        'Developed a user-friendly interface for document and project management, improving team collaboration and navigation.',
        'Established a scalable frontend architecture that enables easy integration of new modules without compromising performance',
      ],
      technologies: 'React, TypeScript, React Query, React Hook Form, MUI, Axios, Styled Components, Jest, Storybook',
    },
  },
  {
    id: 5,
    text: ['Banking application ', 'Duration: 05.2020 – 02.2021'],
    image: BankingImage,
    info: {
      description:
        'A web platform for managing banking services remotely, enabling users to access loan and deposit information, make payments, transfer funds, and interact with banking products online.',
      achievements: [
        'Built intuitive and user-friendly web forms for seamless client interaction with banking services.',
        'Implemented robust client-side data validation and processing using Zod and React Hook Form to enhance security and reliability of financial operations',
      ],
      technologies: 'React, TypeScript, Redux, Redux Toolkit, React Hook Form, Axios, Styled Components, Jest, Zod, i18next,',
    },
  },
];
