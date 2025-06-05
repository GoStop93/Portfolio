import styled from 'styled-components';

export const Avatar = styled.div`
  width: 7vh;
  height: 7vh;
  padding: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #432393;
  border-radius: 100vh;
  margin-right: 3.5vh;
  border: 2px solid white;
  transition: border 0.2s;
`;

export const Image = styled.img`
  width: 85%;
`;

export const ListItemWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  background-color: #5733a8;
  overflow: hidden;
  border: 2px solid white;
  transition: border 0.2s;
  &:hover {
    border: 2px solid rgb(80, 20, 110);
    ${Avatar} {
      border-color: rgb(80, 20, 110);
    }
  }
`;

export const ListItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.1vh;
`;

export const DescriptionItem = styled.p`
  width: 35vh;
  font-size: 1.5vh;
  line-height: 0.7vh;
  color: white;
  font-weight: 600;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
