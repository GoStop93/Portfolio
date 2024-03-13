import { useNavigate } from 'react-router-dom';

import * as S from './Contacts.styles';
import Particles from '../../components/Particles/Particles';

import BackIcon from '../../assets/icons/arrowBack.png';

import Resume from './Resume/Resume';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import SocialLinks from './SocialLinks/SocialLinks';

const Contacts: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/')
  }
  
  return (
    <S.Contacts>
      <S.BackButton onClick={handleBackClick}>
        <S.BackButtonImage src={BackIcon} />
        <S.BackButtonText>Go back</S.BackButtonText>
      </S.BackButton>
      <Particles />
      <S.Content>
        <Resume />
        <FeedbackForm />
        <SocialLinks />
      </S.Content>
    </S.Contacts>
  );
};

export default Contacts;
