import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

import { IParticlesComponentProps } from './types';

import * as S from './ParticlesComponent.styles';

const ParticlesComponent = (props: IParticlesComponentProps) => {
  const { particlesOptions, id } = props;

  let isInitialized = false;

  const particlesInit = useCallback(async (engine: Engine) => {
    if (!isInitialized) {
      await loadSlim(engine);
      isInitialized = true;
    }
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await container;
  }, []);

  return <S.MyParticles id={id} init={particlesInit} loaded={particlesLoaded} options={particlesOptions} />;
};

export default ParticlesComponent;
