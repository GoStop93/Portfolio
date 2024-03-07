import * as S from './Technology.styles';
import { ITechnologyProps } from '../type';

export const Technology = ({ icon, label, description }: ITechnologyProps) => {
  return (
    <S.Technology>
      <S.Header>
        <S.Icon src={icon} />
        <S.Label>{label}</S.Label>
      </S.Header>
      <S.Text>{description}</S.Text>
    </S.Technology>
  );
};
