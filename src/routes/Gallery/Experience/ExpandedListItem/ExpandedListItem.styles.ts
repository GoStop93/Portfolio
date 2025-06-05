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
  box-sizing: border-box;
  background-color: #5733a8;
  border: 2px solid white;
  width: 100vh;
  max-height: 55vh;
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: rgb(80, 20, 110);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: rgb(157, 78, 251);
  }
`;

export const ExpandedListItemContent = styled.div`
  padding: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarExpanded = styled(Avatar)`
  width: 10vh;
  height: 10vh;
  padding: 1vh;
  display: flex;
  background-color: #432393;
  justify-content: center;
  align-items: center;
  margin-right: 0;
  margin: 2vh;
  border: 2px solid white;
`;

export const Image = styled.img`
  width: 85%;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DescriptionItem = styled.div`
  font-size: 3vh;
  line-height: 2vh;
  color: white;

  & + & {
    margin-top: 1.5vh;
  }
`;

export const AdditionalContent = styled.div`
  width: 100%;
  margin-top: 3.5vh;
`;

export const AdditionalContentItem = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 1.5s ease forwards;
  opacity: 0;
  border-radius: 1vh;
  background-color: #7f4efb;
  color: white;
  border: 2px solid white;
  padding: 2vh;

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
  font-size: 2vh;
  font-weight: 600;
  padding-bottom: 1vh;
`;

export const AdditionalContentText = styled.div`
  font-size: 2vh;
  line-height: normal;
  color: white;
`;

export const UL = styled.ul`
  font-size: 2vh;
  list-style-type: disc;
`;
