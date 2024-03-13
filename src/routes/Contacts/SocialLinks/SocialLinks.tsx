import { AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import env from 'react-dotenv';

import * as S from './SocialLinks.styles';

const SocialLinks: React.FC = () => {
  const whatsAppUrl = `https://wa.me/${env.PHONE_NUMBER}`;
  const githubUrl = 'https://github.com/GoStop93';
  const linkedinUrl = 'https://www.linkedin.com/in/mikhail-litvinov-8b6284248/';

  const openLinkNewTab = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <S.SocialLinks>
      <S.Title>Social links:</S.Title>
      <S.Links>
        <AwesomeButtonSocial size="medium" type="linkedin" onPress={() => openLinkNewTab(linkedinUrl)}>
          LINKEDIN
        </AwesomeButtonSocial>
        <S.AwesomeButton size="medium" type="github" onPress={() => openLinkNewTab(githubUrl)}>
          GITHUB
        </S.AwesomeButton>
        <AwesomeButtonSocial size="medium" type="whatsapp" onPress={() => openLinkNewTab(whatsAppUrl)}>
          WHATSAPP
        </AwesomeButtonSocial>
      </S.Links>
    </S.SocialLinks>
  );
};

export default SocialLinks;
