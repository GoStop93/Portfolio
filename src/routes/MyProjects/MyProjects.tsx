import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

import { Helmet } from 'react-helmet';
import transition from '../../transition';

import * as S from './MyProjects.styles';
import heros from '../../assets/images/heros.jpg';
import { Project } from './Project/Project';
import { RightSideProjects, LeftSideProjects } from './types';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import BackIcon from '../../assets/icons/arrowBack.png';

import { usePages } from '../Gallery/store/store';
import { getIsPageLoaded, getSetActivePage } from '../Gallery/store/selectors';
import { ACTIVE_PAGE_NAME } from '../Gallery/store/types';

const MyProjects = () => {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  const changeActivePage = usePages(getSetActivePage);
  const isPageLoaded = usePages(getIsPageLoaded);

  const handleBackClick = () => {
    navigate('/');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    changeActivePage(ACTIVE_PAGE_NAME.Projects);
  }, []);

  useLenis(({ scroll }) => {
    setOffset(scroll);
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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
            end: '+=700vh',

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
            end: '+=700',

            scrub: true,
          },
        }
      )
    );
  }, []);

  return (
    <ReactLenis root>
      <Helmet>
        <title>Projects</title>
        <link rel="icon" href="ML.ico" />
      </Helmet>
      <S.ProjectsPage isPageLoaded={isPageLoaded}>
        <S.ProjectsHeader className="hero">
          <S.BackButton onClick={handleBackClick}>
            <S.BackButtonImage src={BackIcon} />
            <S.BackButtonText>Go back</S.BackButtonText>
          </S.BackButton>
          <S.HeroImage
            src={heros}
            offset={offset}
            isPageLoaded={isPageLoaded}
            width={isMobile ? '110vw' : '120vh'}
            top={isMobile ? '20vh' : '5vh'}
            right={isMobile ? '-12vw' : '5vw'}
          />
          <S.MainTitle>
            {' '}
            <span>Gallery of</span> <span>my</span> <br /> <span>best</span> <span>pet</span> <span>projects</span>
          </S.MainTitle>
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
    </ReactLenis>
  );
};

export default transition(MyProjects);
