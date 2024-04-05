import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Curve = styled.div`
  background-color: black;
  svg {
    fill: #171a2c;
    position: fixed;
    width: 100vw;
    height: calc(100vh + 600px);
    top: -300px;
    left: 0;
    z-index: 9000;
  }
`;

export const Background = styled.div<{
  dimensions: { width: number; height: number };
}>`
  position: fixed;
  width: ${({ dimensions }) => (dimensions.width > 0 ? 0 : '100%')};
  height: calc(100vh + 600px);
  top: -300px;
  left: 0;
  pointer-events: auto;
  z-index: 9000;
  background: #171a2c;
  opacity: ${({ dimensions }) => (dimensions.width > 0 ? 0 : 1)};
`;

export const Title = styled(motion.div)`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9990;
  font-size: 4vw;
  line-height: 1.2;
  font-family: outfit_c;
  color: hsl(0, 0%, 80%);
  text-shadow: 5px 5px 4px black;
`;
