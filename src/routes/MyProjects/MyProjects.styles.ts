import { styled } from 'styled-components';

interface OffsetProps {
  offset: number;
  isPageLoaded?: boolean;
  width?: string;
  top?: string;
  right?: string;
}

export const ProjectsPage = styled.div<{ isPageLoaded: boolean }>`
  background-color: black;
  font-family: raleway_project;
  color: #fafafa;
  padding: 0 7vh;
  overflow: hidden;
  height: ${(props) => (props.isPageLoaded ? 'auto' : '0px')};
  position: relative;
`;

export const ProjectsHeader = styled.div`
  height: 100vh;
`;

export const HeroImage = styled.img.attrs<OffsetProps>((props) => ({
  style: {
    width: props.width || '120vh',
    position: 'absolute',
    right: props.right || '5vw',
    top: props.top || '5vh',
    willChange: 'transform',
    transform: `translate3d(0, ${props.offset / 5}px, 0)`,
    WebkitMaskImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0.1)))`,
    height: props.isPageLoaded ? 'auto' : '0px',
  },
}))<OffsetProps>``;

export const MainTitle = styled.h1`
  font-size: 7vw;
  margin: 0;
  position: absolute;
  width: 60vw;
  bottom: 15vh;
  line-height: 1.2;
  left: 5vw;
  font-family: outfit_c;
  color: hsl(0, 0%, 80%);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  span {
    &:nth-child(4) {
      font-size: 0;
    }
  }
  &:hover {
    span {
      transition: all 0.5s ease-in-out;
      &:nth-child(4) {
        font-size: 7vw;
        color: #fff;
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
        margin-left: 30px;
      }
      &:nth-child(5) {
        margin-left: 30px;
      }
      &:nth-child(2),
      &:nth-child(6) {
        margin-left: 30px;
        color: #fff;
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff;
      }
    }
  }
  @media (max-width: 768px) {
    top: 50vh;
    font-size: 10vw;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    gap: 10vh;
  }
`;

export const GalleryLeftContent = styled.div.attrs<OffsetProps>((props) => ({
  style: {
    gap: '30vh',
    willChange: 'transform',
    transform: `translate3d(0, ${props.offset / 5}px, 0)`,
  },
}))<OffsetProps>``;

export const GalleryRightContent = styled.div`
  margin-top: 65vh;
  gap: 30vh;
  @media (max-width: 768px) {
    gap: 10vh;
  }
`;

export const TextBlock = styled.div`
  position: relative;
  margin-top: 20vh;
  max-width: 40vw;
  font-size: 4vw;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5vh;
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export const BackButtonText = styled.div`
  font-size: 1.2vw;
  margin-top: 3px;
  color: #fafafa;
  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

export const BackButtonImage = styled.img`
  width: 1.3vw;
  margin-left: 1vh;
  transition: all 0.5s;
  transform: rotate(-90deg);
  ${BackButton}:hover & {
    transform: rotate(-90deg) translateY(-1vh);
  }
  @media (max-width: 768px) {
    width: 5vw;
    margin-left: -10vw;
  }
`;
