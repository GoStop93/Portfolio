import XworkImage from '../../../assets/images/xwork.jpg';
import BankingImage from '../../../assets/images/banking.jpg';
import CRMImage from '../../../assets/images/crm.png';

interface InfoType {
  description: string;
  responsibilities: string[];
  technologies: string;
}

export interface IExperienceProps {
  image: string;
  text: string[];
  info: InfoType;
}

export const ExperienceData: IExperienceProps[] = [
  {
    text: ['Xwork', 'Duration: 06.2023 – till now'],
    image: XworkImage,
    info: {
      description:
        'A platform which makes it easy to attract digital content creators for collaboration. It connects professionals online to create NFTs, sounds, games and gaming items that will bring revenue even after the initial sale. Relations between creators are regulated by smart contracts based on the principle of revenue sharing - Revenue Share Contracts (RSC).',
      responsibilities: [
        'Development of new features and components',
        'Troubleshooting, involving software debugging / upgrading process',
        'Performing code reviews',
        'Providing integration with API',
        'Planning and estimating tasks',
        'Covering code with unit tests',
        'Reporting status and progress according to the project demands',
      ],
      technologies: 'TypeScript, React, React Query, React Hook Form, Radix UI, NextJS, Jest, Styled Components, Git',
    },
  },
  {
    text: ['Banking application', 'Duration: 09.2022 – 06.2023'],
    image: BankingImage,
    info: {
      description:
        'Web application for remote banking customer service. The system allows clients to receive information about banking products (loans, deposits, cards), make payments, for example, pay for Internet communications, digital television services, and utilities. On the platform, users can replenish e-wallet accounts, make payments using arbitrary details, transfer money between deposits and bank cards, as well as exchange currency and issue new products.',
      responsibilities: [
        'Developed new features and components',
        'Identified and addressed performance bottlenecks',
        'Utilized good design practices, code reuse and wrote efficient source code',
        'Covered code with unit tests',
        'Participated in the project estimation and planning',
        'Created technical documentation for reference and reporting',
        'Worked in an Agile environment',
      ],
      technologies: 'JavaScript, TypeScript, React, Redux Toolkit, React Hook Form, Zod, i18next, Styled Components',
    },
  },
  {
    text: ['VEDA', 'Duration: 04.2022 – 08.2022'],
    image: CRMImage,
    info: {
      description:
        'A company that offers high-performance software products and services in the field of human resource management. The project is the development of a CRM system for HR managers. It allows specialists to communicate with each other, exchange experience, optimize tasks, collaborate with the staff, etc.',
      responsibilities: [
        'Developed new components from scratch',
        'Worked in a Scrum environment',
        'Wrote unit tests',
        'Performed stabilization',
        'Evaluated and improved the program effectiveness',
      ],
      technologies: 'JavaScript, TypeScript, React, React Hook Form, Jest',
    },
  },
];
