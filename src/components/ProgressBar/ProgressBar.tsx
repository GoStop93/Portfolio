import * as S from './ProgressBar.styles';
import Icon from '../../assets/images/me-full-size.webp';

const ProgressBar: React.FC = () => {
  return (
    <S.BarWrapper>
      <S.Circle width="22vh" height="22vh" viewBox="0 0 22vh 22vh">
        <S.CircleBg />
        <S.CircleFg />
      </S.Circle>
      <S.Image src={Icon} />
    </S.BarWrapper>
  );
};
export default ProgressBar;
