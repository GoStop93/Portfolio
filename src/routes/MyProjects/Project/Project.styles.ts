import styled from 'styled-components';
export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectDescription = styled.p<{ type: 'vertical' | 'horizontal'}>`
  font-size: 1vw;
  color: #bdbdbd;
  width: ${(props) => props.type === 'horizontal' ? '800px': '600px'};
  text-align: center;
`;
