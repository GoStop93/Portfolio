export interface IExpandedListItemProps {
  index: any;
  onClick: any;
  image: any;
  text: string[];
  info: {
    description: string;
    achievements: string[];
    technologies: string;
  };
}
