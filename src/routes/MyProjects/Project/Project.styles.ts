import styled from 'styled-components';
export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectDescription = styled.p<{ type: 'vertical' | 'horizontal'}>`
  font-size: 1vw;
  margin-top: 5vh;
  color: #bdbdbd;
  width: ${(props) => props.type === 'horizontal' ? '750px': '650px'};
  text-align: center;
`;
