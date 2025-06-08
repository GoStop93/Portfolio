import { useState, useEffect } from 'react';
import { useSpring, useMotionValue, useTransform } from 'framer-motion';
import { interpolate } from '@popmotion/popcorn';

import * as S from './Card.styles';
import { ICardProps } from './types';

export const Card = ({ project }: ICardProps) => {
  const { imageUrl, type, URL, cursor } = project;

  const [hover, setHover] = useState(false);
  const [tapped, setTapped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  let height: number;
  let width: number;

  if(type === 'horizontal') {
     height = isMobile ? 170 : 300;
     width = isMobile ? 360 : 630;
  } else {
     height = isMobile ? 350 : 500;
     width = isMobile ? 280 : 395;
  }

  const centerPoint = [width / 2, height / 2];
  const xy = useMotionValue(centerPoint);

  const tx = 0.05;

  const transformX = interpolate([0, width], [width * tx, width * tx * -1]);
  const rotateY = useTransform(xy, ([x]) => transformX(x));

  const transformY = interpolate([0, height], [height * tx * -1, height * tx * 1]);
  const rotateX = useTransform(xy, ([, y]) => transformY(y));

  const config = {
    stiffness: 150,
    damping: 20,
  };

  const springX = useSpring(rotateX, config);
  const springY = useSpring(rotateY, config);

  const gradientOpacity = useTransform(xy, ([, y]) => {
    return interpolate([0, height], [0, 0.3])(y);
  });

  const gradientOpacitySpring = useSpring(gradientOpacity, config);

  const gradient = useTransform(gradientOpacitySpring, (opacity) => {
    let [x, y] = xy.get();
    if (y === centerPoint[1]) {
      y = centerPoint[1] + 1;
    }

    const angle = Math.atan2(y - centerPoint[1], x - centerPoint[0]);
    const degree = ((angle > 0 ? angle : 2 * Math.PI + angle) * 360) / (2 * Math.PI) - 90;
    return `linear-gradient(${degree}deg, rgba(255,255,255,${opacity}), rgba(255,255,255,0) 80%)`;
  });

  function onMouseOver(e: any) {
    if (tapped) return;
    const rect = e.target.getBoundingClientRect();
    xy.set([e.clientX - rect.left, e.clientY - rect.top]);
  }

  function hoverStart() {
    setHover(true);
  }

  function hoverEnd() {
    setHover(false);
  }

  const handleNavigate = () => {
    window.open(URL, '_blank');
  }

  useEffect(() => {
    if (!hover) {
      xy.set(centerPoint);
    }
  }, [hover, xy, centerPoint]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <S.Container style={{ height: `${height}px`, width: `${width}px` }} cursor={cursor}>
      <S.Content
        imageHeight={height}
        imageWidth={width}
        style={{
          scale: 1,
          rotateX: springX,
          rotateY: springY,
        }}
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        onTapCancel={(e) => {
          setTapped(false);
          onMouseOver(e);
        }}
        onTapStart={() => {
          setTapped(true);
        }}
        onTap={(e) => {
          setTapped(false);
        }}
        onHoverStart={hoverStart}
        onHoverEnd={hoverEnd}
        onMouseMove={onMouseOver}
        onClick={handleNavigate}
      >
        <S.Shadow />
        <S.RelativeContainer>
          <S.Image imageUrl={imageUrl} />
        </S.RelativeContainer>
        <S.Gradient
          style={{
            background: gradient,
          }}
        />
      </S.Content>
    </S.Container>
  );
};
