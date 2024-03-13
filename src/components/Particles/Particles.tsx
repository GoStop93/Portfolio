import ParticlesComponent from './ParticlesComponent/ParticlesComponent';
import { options } from './particlesOptions';
import { options404 } from './Particles404Options';

import { IParticlesProps } from './types';

const Particles = ({ is404 }: IParticlesProps) => {
  return <ParticlesComponent id="particles" particlesOptions={ is404 ? options404: options} />;
};

export default Particles;
