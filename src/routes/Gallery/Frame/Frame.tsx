import { IFrameProps } from './type';
import * as S from './Frame.styles';

export const Frame = ({ children, name }: IFrameProps) => {
  const combinedClassName = name ? `${name} frame`: "frame";
  return <S.Frame className={combinedClassName}>{children}</S.Frame>;
};
