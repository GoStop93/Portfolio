import { useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import Particles from '../../components/Particles/Particles';
import heroImage from '../../assets/images/heroFor404.png';

import * as S from './Page404.styles';


const Page404: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <S.Page>
        <Particles is404 />
        <S.HeroImage src={heroImage} />
        <S.Label>404</S.Label>
        <S.ButtonPosition>
          <S.ButtonContainer>
            <S.ButtonText>Back to main page</S.ButtonText>
            <S.Button type="submit" onClick={handleBackClick}>Back to main page</S.Button>
          </S.ButtonContainer>
        </S.ButtonPosition>
      </S.Page>
    </>
  );
};

export default Page404;
