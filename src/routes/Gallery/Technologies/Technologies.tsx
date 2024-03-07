import * as S from './Technologies.styles';
import TechnologiesCards from './TechnologiesCards/TechnologiesCards';
import MarqueeCards from '../../../components/MarqueeCards/MarqueeCards';

export const Technologies = () => {
  return (
    <S.Technologies>
      <S.H3>Technologies and tools</S.H3>
      <S.Content>
        <MarqueeCards direction="left" speed={50}>
          <TechnologiesCards />
        </MarqueeCards>
        <MarqueeCards direction="right" speed={50}>
          <TechnologiesCards />
        </MarqueeCards>
      </S.Content>
    </S.Technologies>
  );
};
