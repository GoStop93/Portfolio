import { Card } from '../Card/Card';
import * as S from './Project.styles';
import { IProjectProps } from './types';

export const Project = ({ project, className }: IProjectProps) => {
  const { description } = project;
  return (
    <S.Project className={className}>
      <Card project={project} />
      <S.ProjectDescription type={project.type}>{description}</S.ProjectDescription>
    </S.Project>
  );
};
