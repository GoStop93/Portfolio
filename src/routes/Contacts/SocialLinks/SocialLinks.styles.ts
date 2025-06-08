import styled from 'styled-components';
import { AwesomeButtonSocial } from 'react-awesome-button';

export const SocialLinks = styled.div`
  position: absolute;
  align-items: center;
  gap: 2vw;
  bottom: 5vh;
  right: 9.5vw;
  display: flex;
  padding: 2vh 4vh;
  background-color: rgba(17, 11, 49, 0.7);
  border-radius: 5vh;
  border: 1px solid #2c106f;
  @media (max-width: 768px) {
    position: static;
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  color: #7f4efb;
  font-size: 4vh;
`;

export const Links = styled.div`
  display: flex;
  gap: 0.5vw;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const AwesomeButton = styled(AwesomeButtonSocial)`
  .aws-btn__wrapper:before {
    background: #191b1f !important;
  }
`;
