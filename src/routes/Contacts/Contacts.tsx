import * as S from './Contacts.styles';
import Particles from '../../components/Particles/Particles';

import Resume from './Resume/Resume';
import FeedbackForm from './FeedbackForm/FeedbackForm';

const Contacts: React.FC = () => {
  return (
    <S.Contacts>
      <Particles />
      <S.Content>
        <Resume />
        <FeedbackForm />
      </S.Content>
    </S.Contacts>
  );
};

export default Contacts;
