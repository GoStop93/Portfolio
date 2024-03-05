import * as S from './MyProjects.styles';
import heros from '../../assets/images/heros.jpg';
import { Project } from './Project/Project';
import { RightSideProjects, LeftSideProjects } from './types';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import BackIcon from '../../assets/icons/backArrow.png';

export const MyProjects = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffset(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      '.hero',
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: '.hero',
          start: 'center',
          end: '800',

          scrub: true,
        },
      }
    );

    let itemsLeft = gsap.utils.toArray('.leftItem') as HTMLElement[];

    itemsLeft.forEach((item) =>
      gsap.fromTo(
        item,
        { x: '-8vw', opacity: 0 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            end: '+=900vh',

            scrub: true,
          },
        }
      )
    );

    let itemsRight = gsap.utils.toArray('.rightItem') as HTMLElement[];

    itemsRight.forEach((item) =>
      gsap.fromTo(
        item,
        { x: '8vw', opacity: 0 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            end: '+=900',

            scrub: true,
          },
        }
      )
    );
  }, []);

  return (
    <S.ProjectsPage>
      <S.ProjectsHeader className="hero">
        <S.HeroImage src={heros} offset={offset}/>
        <S.MainTitle> <span>Gallery of</span> <span>my</span> <br/> <span>best</span> <span>pet</span> <span>projects</span></S.MainTitle>
      </S.ProjectsHeader>
      <S.Gallery>
        <S.GalleryLeftContent offset={offset}>
          {LeftSideProjects.map((project) => (
            <Project className="leftItem" key={project.URL} project={project} />
          ))}
        </S.GalleryLeftContent>
        <S.GalleryRightContent>
          {RightSideProjects.map((project) => (
            <Project className="rightItem" key={project.URL} project={project} />
          ))}
          <S.TextBlock className="rightItem">Coming soon...</S.TextBlock>
        </S.GalleryRightContent>
      </S.Gallery>
    </S.ProjectsPage>
  );
};
