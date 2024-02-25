import { styled } from 'styled-components';

export const ProjectsPage = styled.div`
  background-color: black;
  font-family: raleway_project;
  color: #fafafa;
  padding: 0 7vh;
  overflow: hidden;
`;

export const ProjectsHeader = styled.div`
  height: 100vh;
`;

export const HeroImage = styled.img<{ offset: number}>`
  width: 120vh;
  position: absolute;
  right: 5vw;
  top: 5vh;
  will-change: transform;
  transform: translate3d(0, ${props => props.offset/5}px, 0);
  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0.1)));
`;

export const MainTitle = styled.h1`
  font-size: 7vw;
  margin: 0;
  position: absolute;
  width: 50vw;
  bottom: 15vh;
  line-height: 1.2;
  left: 5vw;
  font-family: outfit_c;
`;

export const Gallery = styled.main`
  display: flex;
  padding: 40vh 0 15vh 0;

  & > * {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const GalleryLeftContent = styled.div<{ offset: number}>`
  gap: 30vh;
  will-change: transform;
  transform: translate3d(0, ${props => props.offset/5}px, 0);
`;

export const GalleryRightContent = styled.div`
  margin-top: 65vh;
  gap: 30vh;
`;

export const TextBlock = styled.div`
  position: relative;
  margin-top: 20vh;
  max-width: 40vw;
  font-size: 4vw;
`;
