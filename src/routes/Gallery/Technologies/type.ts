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
  text: string;
}

export const TechnologiesInformation: ITechnologyProps[] = [
  {
    icon: JSIcon,
    text: 'JavaScript',
  },
  {
    icon: ReactIcon,
    text: 'React',
  },
  {
    icon: HTMLIcon,
    text: 'HTML',
  },
  {
    icon: CSSIcon,
    text: 'CSS',
  },
  {
    icon: TSIcon,
    text: 'TypeScript',
  },
  {
    icon: NextJSIcon,
    text: 'Next.js',
  },
  {
    icon: JestIcon,
    text: 'Jest',
  },
  {
    icon: GitIcon,
    text: 'Git',
  },
  {
    icon: JiraIcon,
    text: 'Jira',
  },
];
