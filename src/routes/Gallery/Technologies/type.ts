import JSIcon from '../../../assets/icons/js.png';
import ReactIcon from '../../../assets/icons/react.png';
import HTMLIcon from '../../../assets/icons/html.png';
import CSSIcon from '../../../assets/icons/css.png';
import TSIcon from '../../../assets/icons/typescript.png';
import NextJSIcon from '../../../assets/icons/nextjs.png';
import JestIcon from '../../../assets/icons/jest.png';
import GitIcon from '../../../assets/icons/git.png';
import JiraIcon from '../../../assets/icons/jira.png';

export interface ITechnologyProps {
  icon: string;
  label: string;
  description: string;
}

export const TechnologiesInformation: ITechnologyProps[] = [
  {
    icon: JSIcon,
    label: 'JavaScript',
    description:
      'I have hands-on experience in utilizing JavaScript to imbue web pages with interactivity and functionality, thus crafting dynamic user interfaces that enhance the overall user experience.',
  },
  {
    icon: ReactIcon,
    label: 'React',
    description:
      'I have extensive experience with React, including its core principles. I can create reusable components and effectively manage application state using hooks and context.',
  },
  {
    icon: HTMLIcon,
    label: 'HTML',
    description: 'I have experience using HTML to craft web page structures and develop semantic content that ensures accessibility for all users',
  },
  {
    icon: CSSIcon,
    label: 'CSS',
    description: 'I am skilled in using CSS to style web pages and create visually appealing designs that enhance user experience.',
  },
  {
    icon: TSIcon,
    label: 'TypeScript',
    description:
      'I confidently work with TypeScript, leveraging it to enhance the reliability and scalability of JavaScript applications through static typing.',
  },
  {
    icon: NextJSIcon,
    label: 'Next.js',
    description:
      'I have practical experience in leveraging Next.js to build performant and SEO-friendly web applications, thanks to its streamlined development process and server-side rendering capabilities.',
  },
  {
    icon: JestIcon,
    label: 'Jest',
    description:
      'I am proficient in using Jest for writing and executing comprehensive unit tests, ensuring the reliability and stability of codebases across various projects.',
  },
  {
    icon: GitIcon,
    label: 'Git',
    description:
      'I am highly proficient in Git, efficiently managing code changes throughout development, collaborating seamlessly with teammates, and effectively resolving conflicts.',
  },
  {
    icon: JiraIcon,
    label: 'Jira',
    description:
      'I have experience utilizing Jira as a project management tool to facilitate collaboration, track progress, and prioritize tasks effectively within development teams.',
  },
];
