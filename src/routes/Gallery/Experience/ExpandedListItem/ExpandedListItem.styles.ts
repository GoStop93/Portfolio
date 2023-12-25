import styled, { keyframes } from 'styled-components';
import { Avatar } from '../ListItem/ListItem.styles';

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2vh);
  }
  100% {
    opacity: 1;
  }
`;

export const ExpandedListItemWrapper = styled.div`
  cursor: pointer;
  background-color: #5733a8;
  border: 2px solid white;
  width: 100vh;
`;

export const ExpandedListItemContent = styled.div`
  padding: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarExpanded = styled(Avatar)<{ image: any }>`
  width: 10vh;
  height: 10vh;
  margin-right: 0;
  margin-bottom: 0.5vh;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid white;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DescriptionItem = styled.div`
  font-size: 2.1vh;
  line-height: 1.4vh;
  color: white;

  & + & {
    margin-top: 1.5vh;
  }
`;

export const AdditionalContent = styled.div`
  width: 100%;
  margin-top: 2.1vh;
`;

export const AdditionalContentItem = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 1.2s ease forwards;
  opacity: 0;
  border-radius: 1vh;
  background-color: #7f4efb;
  color: white;
  border: 2px solid white;
  padding: 1vh;

  &:nth-of-type(2) {
    animation-delay: 0.15s;
  }

  &:nth-of-type(3) {
    animation-delay: 0.3s;
  }

  & + & {
    margin-top: 1rem;
  }
`;

export const AdditionalContentTitle = styled.div`
  font-size: 1.4vh;
`;

export const AdditionalContentText = styled.div`
  font-size: 1.4vh;
  line-height: 2vh;
`;

export const UL = styled.ul`
  font-size: 1.4vh;
`;
