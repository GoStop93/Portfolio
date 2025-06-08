import Marquee from 'react-fast-marquee';
import { IMarqueeCardsProps } from './types';

const MarqueeCards: React.FC<IMarqueeCardsProps> = (props) => {
  const { direction, children, speed } = props;
  return (
    <Marquee direction={direction} gradient={false} speed={speed} pauseOnHover={true} pauseOnClick={true}>
      {children}
    </Marquee>
  );
};

export default MarqueeCards;
