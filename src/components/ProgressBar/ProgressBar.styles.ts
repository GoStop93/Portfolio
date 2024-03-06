import styled from 'styled-components';

export const BarWrapper = styled.div`
  background-color: rgba(89, 50, 166, 0.2);
  height: 22vh;
  border-radius: 100%;
  animation: fadeIn 0.5s ease-in-out forwards;
`;

export const Circle = styled.svg`
  --size: 22vh;
  --half-size: calc(var(--size) / 2);
  --stroke-width: 7px;
  --radius: calc((var(--size) - var(--stroke-width)) / 2);
  --circumference: calc(var(--radius) * pi * 2);
  --dash: calc((var(--progress) * var(--circumference)) / 100);
  animation: progress-animation 1.5s linear 0s 1 forwards;
  circle {
    cx: var(--half-size);
    cy: var(--half-size);
    r: var(--radius);
    stroke-width: var(--stroke-width);
    fill: transparent;;
    stroke-linecap: round;
  }
`;

export const CircleBg = styled.circle`
  stroke: rgb(80, 20, 110);
`;

export const CircleFg = styled.circle`
  transform: rotate(-90deg);
  transform-origin: var(--half-size) var(--half-size);
  stroke-dasharray: var(--dash) calc(var(--circumference) - var(--dash));
  transition: stroke-dasharray 0.3s linear 0s;
  stroke: #834df8;
`;

export const Image = styled.img`
  position: absolute;
  z-index: 10;
  height: 19vh;
  top: -10vh;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  animation: slideIn 0.5s ease-in-out forwards;
`;
