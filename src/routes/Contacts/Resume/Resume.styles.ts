import styled from 'styled-components';

export const OpenIcon = styled.img`
  position: absolute;
  bottom: 6vw;
  width: 4vw;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s;
  z-index: 2;
  opacity: 0;
  filter: drop-shadow(3px 3px 3px #110b31);
`;

export const OpenText = styled.div`
  position: absolute;
  bottom: 12vw;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: #8c63f0;
  font-weight: 600;
  font-size: 2vw;
  opacity: 0;
  transition: all 0.3s;
  text-shadow: 3px 3px 3px #110b31;
`;

export const DownloadIcon = styled.img`
  position: absolute;
  top: 6vw;
  width: 4vw;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s;
  z-index: 2;
  opacity: 0;
  filter: drop-shadow(3px 3px 3px #110b31);
`;

export const DownloadText = styled.div`
  position: absolute;
  top: 12vw;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: #8c63f0;
  font-weight: 600;
  font-size: 2vw;
  opacity: 0;
  transition: all 0.3s;
  text-shadow: 3px 3px 3px #110b31;
  white-space: nowrap;
`;

export const ResumeImage = styled.img`
  position: absolute;
  top: 50%;
  left: 9vw;
  transform: translateY(-50%);
  width: 32vw;
  height: auto;
  border-radius: 15px;
  transition: all 0.3s;
  z-index: 1;
`;

export const ResumeTopWrapper = styled.div`
  position: absolute;
  top: 5%;
  left: 9vw;
  width: 32vw;
  height: 45vh;
  border-radius: 15px 15px 0 0;
  transition: all 0.4s;
  z-index: 3;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    ~ ${ResumeImage} {
      filter: brightness(0.25);
    }
    ${DownloadIcon} {
      opacity: 1;
      transition: opacity 1s, left 1s;
    }
    ${OpenIcon} {
      opacity: 1;
      transition: opacity 1s, left 1s;
    }
    ${OpenText} {
      opacity: 1;
      span {
        opacity: 0;
        display: inline-block;
        animation: fadeInText 0.5s ease forwards;
        &:nth-of-type(1) {
          animation-delay: 0s;
        }
        &:nth-of-type(2) {
          animation-delay: 0.05s;
        }
        &:nth-of-type(3) {
          animation-delay: 0.1s;
        }
        &:nth-of-type(4) {
          animation-delay: 0.15s;
        }
        &:nth-of-type(5) {
          animation-delay: 0.2s;
        }
        &:nth-of-type(6) {
          animation-delay: 0.25s;
        }
        &:nth-of-type(7) {
          animation-delay: 0.3s;
        }
        &:nth-of-type(8) {
          animation-delay: 0.35s;
        }
        &:nth-of-type(9) {
          animation-delay: 0.4s;
        }
        &:nth-of-type(10) {
          animation-delay: 0.45s;
        }
      }
    }
  }
`;

export const ResumeBottomWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  left: 9vw;
  width: 32vw;
  height: 45vh;
  border-radius: 0 0 15px 15px;
  transition: all 0.4s;
  z-index: 3;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    ~ ${ResumeImage} {
      filter: brightness(0.25);
    }
    ${DownloadIcon} {
      opacity: 1;
      transition: opacity 1s, left 1s;
    }
    ${OpenIcon} {
      opacity: 1;
      transition: opacity 1s, left 1s;
    }
    ${DownloadText} {
      opacity: 1;
      span {
        opacity: 0;
        display: inline-block;
        animation: fadeInText 0.5s ease forwards;
        &:nth-of-type(1) {
          animation-delay: 0s;
        }
        &:nth-of-type(2) {
          animation-delay: 0.05s;
        }
        &:nth-of-type(3) {
          animation-delay: 0.1s;
        }
        &:nth-of-type(4) {
          animation-delay: 0.15s;
        }
        &:nth-of-type(5) {
          animation-delay: 0.2s;
        }
        &:nth-of-type(6) {
          animation-delay: 0.25s;
        }
        &:nth-of-type(7) {
          animation-delay: 0.3s;
        }
        &:nth-of-type(8) {
          animation-delay: 0.35s;
        }
        &:nth-of-type(9) {
          animation-delay: 0.4s;
        }
        &:nth-of-type(10) {
          animation-delay: 0.45s;
        }
        &:nth-of-type(11) {
          animation-delay: 0.5s;
        }
        &:nth-of-type(12) {
          animation-delay: 0.55s;
        }
        &:nth-of-type(13) {
          animation-delay: 0.6s;
        }
        &:nth-of-type(14) {
          animation-delay: 0.65s;
        }
      }
    }
  }
`;
