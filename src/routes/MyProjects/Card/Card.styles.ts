import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled.div`
  border-radius: 8px;
  transform-style: preserve-3d;
  transform: perspective(921px);
  width: 630px;
  height: 300px;
  cursor: pointer;
`;

export const Content = styled(motion.div)<{ imageHeight: number; imageWidth: number }>`
  position: relative;
  width: ${(props) => `${props.imageWidth}px`};
  height: ${(props) => `${props.imageHeight}px`};
  border-radius: 8px;
  transform-style: preserve-3d;
  perspective: 800px;
  backface-visibility: hidden;
`;

export const Shadow = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 90%;
  border-radius: 1rem;
  height: 90%;
  transition: all 0.2s ease-out 0s;
  box-shadow: rgba(0, 0, 0, 06) 0px 50px 100px -30px;
`;

export const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 800px;
  backface-visibility: hidden;
`;

export const Image = styled.div<{ imageUrl: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateZ(0);
  bottom: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1rem;
  background-image: url(${(props) => props.imageUrl});
`;

export const Gradient = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.5s ease;
  border-radius: 20px;
`;
