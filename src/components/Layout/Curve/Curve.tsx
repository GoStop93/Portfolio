import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import SVGComponent from '../../SVGComponent/SVGComponent';

import * as S from './Curve.styles';

const anim = (variants: any) => {
  return {
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
  };
};

const Curve = () => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  const location = useLocation();
  const currentPath = location.pathname;

  const routes: Record<string, string> = {
    '/': 'Gallery',
    '/contacts': 'Contacts',
    '/projects': 'Projects',
  };

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resize();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const title = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: 0,
      top: -100,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const currentRoute = routes[currentPath];

  return (
    <S.Curve>
      <>
        <S.Background dimensions={dimensions} />
        <S.Title {...anim(title)}>{currentRoute ? currentRoute : '404'}</S.Title>
        {dimensions.width > 0 && <SVGComponent {...dimensions} />}
      </>
    </S.Curve>
  );
};

export default Curve;
