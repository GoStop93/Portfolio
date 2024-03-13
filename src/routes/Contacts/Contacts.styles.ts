import styled from 'styled-components';

export const Contacts = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: black;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 15vh;
`;

export const BackButton = styled.button`
  display: flex;
  position: absolute;
  align-items: center;
  gap: 5px;
  margin-top: 2vh;
  margin-left: 1vw;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const BackButtonText = styled.div`
display: flex;
  font-size: 1vw;
  margin-top: 3px;
  color: #fafafa;
`;

export const BackButtonImage = styled.img`
  width: 1vw;
  margin-left: 1vh;
  transition: all 0.5s;
  transform: rotate(-90deg);
  ${BackButton}:hover & {
    transform: rotate(-90deg) translateY(-1vh);
  }
`;
