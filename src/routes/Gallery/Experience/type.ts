import CollaborationImage from '../../../assets/images/collaboration.jpg';
import BankingImage from '../../../assets/images/banking.jpg';
import CRMImage from '../../../assets/images/crm.png';
import DigitalImage from '../../../assets/images/digital.jpg';

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
}

export const ExperienceData: IExperienceEntity[] = [
  {
    text: ['Automobile Imaging and Management Platform', 'Duration: 08.2023 – till now'],
    image: DigitalImage,
    info: {
      description: `A multi-discipline imaging and production studio based primarily in Los Angeles and London, focusing on design for car manufacturers. The main project goal is to develop a web application that will allow reviewing the digital assets thoroughly and quickly, hence – delivering them to the clients in a clear and efficient way.
 
        The current business flow comes with a lot of manual operations such as making notes with circling issues in Adobe Acrobat and sending them out via messengers. Apart from that, the review processes can’t be initiated automatically, imposing redundant communication when administrators have to be intermediaries between the artists and the clients, going back and forth with each iteration of the review and updates. 

        System enhancement will be primarily focused on making it easier to leave comments and spot the mistakes by making clear comparisons of different versions of the design. Besides, system notifications will help to speed up the review process by
        eliminating the time lag in communication.`,
      achievements: [
        'Developed an innovative web interface for visualizing automobiles and using cutting-edge visualization technologies',
        'Created an interface with functionalities for working with 360-degree images and panoramas, as well as the ability to add comments. Integrated a tool for comparing images of different versions using a third-party library to detect differences.',
        'Optimized graphic resource loading: Enhanced website performance by optimizing the loading of images and other graphic elements, reduced page loading times, and improved overall interface responsiveness.',
        'Query optimization by using React Query to enhance data retrieval and management efficiency, including minimizing redundant requests and implementing data caching.',
        'Implemented Zustand state manager: Integrated a tool for managing application states, providing ease of use and efficiency in working with data. This has simplified and enhanced the structure and management of application states, thereby improving its reliability and performance.',
      ],
      technologies: 'TypeScript, React, React Query, React Hook Form, Zustand, Storybook, Axios, sass, MUI, Git',
    },
  },
  {
    text: ['Digital Content Collaboration Platform', 'Duration: 03.2023 – 07.2023'],
    image: CollaborationImage,
    info: {
      description:
        'A platform which makes it easy to attract digital content creators for collaboration. It connects professionals online to create NFTs, sounds, games and gaming items that will bring revenue even after the initial sale. Relations between creators are regulated by smart contracts based on the principle of revenue sharing - Revenue Share Contracts (RSC).',
      achievements: [
        'Developed interface for previewing NFT content: Created an intuitively understandable user interface for viewing and interacting with digital goods and NFTs, with an emphasis on visually appealing content display.',
        'Optimized user interface for various devices: adopted the interface to different devices and screens, ensuring equally comfortable platform usage on both desktop and mobile devices.',
      ],
      technologies: 'TypeScript, React, React Query, React Hook Form, Radix UI, NextJS, Jest, Styled Components, Git',
    },
  },
  {
    text: ['Banking application', 'Duration: 03.2022 – 02.2023'],
    image: BankingImage,
    info: {
      description:
        'Web application for remote banking customer service. The system allows clients to receive information about banking products (loans, deposits, cards), make payments, for example, pay for Internet communications, digital television services, and utilities. On the platform, users can replenish e-wallet accounts, make payments using arbitrary details, transfer money between deposits and bank cards, as well as exchange currency and issue new products.',
      achievements: [
        'Created intuitively understandable and convenient web forms for client interaction with banking services, with a focus on simplicity and security of use.',
        'Developed data processing and validation mechanisms on the client side: Created a system for validating input data and handling errors on the client side of the application, enhancing the reliability and security of data operations.Identifying and addressing performance bottlenecks.',
      ],
      technologies: 'JavaScript, TypeScript, React, Redux Toolkit, React Hook Form, Zod, i18next, Styled Components',
    },
  },
  {
    text: ['HR CRM System ', 'Duration: 10.2021 – 02.2022'],
    image: CRMImage,
    info: {
      description:
        'A company that offers high-performance software products and services in the field of human resource management. The project is the development of a CRM system for HR managers. It allows specialists to communicate with each other, exchange experience, optimize tasks, collaborate with the staff, etc.',
      achievements: [
        'Integrated data visualization tools: Incorporating graphical elements and charts to visualize key metrics and indicators in the human resources management system, facilitating analysis and decision-making for HR specialists.',
        'Implemented components for dynamic data display: Developed reusable user interface components for dynamically displaying data about employees, projects, and tasks, simplifying the development and maintenance of the system.',
      ],
      technologies: 'JavaScript, TypeScript, React, React Hook Form, Jest',
    },
  },
];
