import ParticlesComponent from './ParticlesComponent/ParticlesComponent';
import { options } from './particlesOptions';

const Particles = () => {
  return <ParticlesComponent id="particles" particlesOptions={options} />;
};

export default Particles;
