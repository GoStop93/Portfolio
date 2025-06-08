import { Technology } from '../Technology/Technology';
import { TechnologiesInformation } from '../type';

import * as S from './TechnologiesCards.styles';

const TechnologiesCards: React.FC = () => {
  return (
    <S.CardsWrapper>
      {TechnologiesInformation.map((technology, index) => (
        <Technology key={index} icon={technology.icon} label={technology.label} description={technology.description}/>
      ))}
    </S.CardsWrapper>
  );
};

export default TechnologiesCards;
