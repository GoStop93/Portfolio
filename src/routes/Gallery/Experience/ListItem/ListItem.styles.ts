import styled from 'styled-components';

export const Avatar = styled.div<{ image: any }>`
  width: 7vh;
  height: 7vh;
  border-radius: 100vh;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 3.5vh;
  border: 2px solid white;
  transition: border 0.2s;
`;

export const ListItemWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  background-color: #5733A8;
  overflow: hidden;
  border: 2px solid white;
  transition: border 0.2s;
  &:hover {
    border: 2px solid #FFC3E1;
    ${Avatar} {
      border-color: #FFC3E1;
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
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
