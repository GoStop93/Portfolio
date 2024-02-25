import { styled } from 'styled-components';

export const ProjectsPage = styled.div`
  background-color: black;
  font-family: raleway_project;
  color: #fafafa;
  padding: 0 7vh;
`;

export const ProjectsHeader = styled.div`
  height: 100vh;
`;

export const HeroImage = styled.img`
  width: 120vh;
  position: absolute;
  right: 5vw;
  top: 5vh;
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
  padding: 40vh 0 30vh 0;

  & > * {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const GalleryLeftContent = styled.div`
  gap: 30vh;
`;

export const GalleryRightContent = styled.div`
  margin-top: 25vh;
  gap: 30vh;
`;

export const Project = styled.div``;

export const HorizontalProjectImage = styled.img`
  max-width: 40vw;
  border-radius: 20px;
`;

export const VerticalProjectImage = styled.img`
  max-height: 70vh;
  border-radius: 20px;
`;

export const ProjectDescription = styled.p`
  font-size: 1.2vw;
  color: #9e9e9e;
`;

export const TextBlock = styled.div`
  position: relative;
  max-width: 40vw;
  font-size: 4vw;
`;
