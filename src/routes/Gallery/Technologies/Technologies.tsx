import { useEffect, useState } from 'react';

import TechnologiesCards from './TechnologiesCards/TechnologiesCards';
import MarqueeCards from '../../../components/MarqueeCards/MarqueeCards';

import * as S from './Technologies.styles';

export const Technologies = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <S.Technologies>
      <S.H3>Technologies and tools</S.H3>
      <S.Content>
        {isMobile ? (
          <MarqueeCards direction="right" speed={60}>
            <TechnologiesCards />
          </MarqueeCards>
        ) : (
          <>
            <MarqueeCards direction="left" speed={50}>
              <TechnologiesCards />
            </MarqueeCards>
            <MarqueeCards direction="right" speed={50}>
              <TechnologiesCards />
            </MarqueeCards>
          </>
        )}
      </S.Content>
    </S.Technologies>
  );
};
