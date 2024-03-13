import * as S from './Contacts.styles';
import Particles from '../../components/Particles/Particles';

import Resume from './Resume/Resume';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import SocialLinks from './SocialLinks/SocialLinks';

const Contacts: React.FC = () => {
  return (
    <S.Contacts>
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
