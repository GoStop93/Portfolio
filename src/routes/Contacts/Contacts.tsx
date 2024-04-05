import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Contacts.styles';
import Particles from '../../components/Particles/Particles';
import { Helmet } from 'react-helmet';

import BackIcon from '../../assets/icons/arrowBack.png';

import Resume from './Resume/Resume';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import SocialLinks from './SocialLinks/SocialLinks';

import { usePages } from '../Gallery/store/store';
import { getSetActivePage } from '../Gallery/store/selectors';
import { ACTIVE_PAGE_NAME } from '../Gallery/store/types';

const Contacts: React.FC = () => {
  const navigate = useNavigate();

  const changeActivePage = usePages(getSetActivePage);

  const handleBackClick = () => {
    navigate('/');
  };

  useEffect(() => {
    changeActivePage(ACTIVE_PAGE_NAME.Projects)
  }, []);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
        <link rel="icon" href="ML.ico" />
      </Helmet>
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
    </>
  );
};

export default Contacts;
