import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Frame } from './Frame/Frame';
import { Technologies } from './Technologies/Technologies';
import 'react-awesome-button/dist/styles.css';
import * as S from './Gallery.styles';
import MyPhoto from '../../assets/images/my_photo.png';
import FrontEnd from '../../assets/images/frontend.gif';
import projectsIcon from '../../assets/icons/projects.png';
import contactsIcon from '../../assets/icons/contacts.png';
import { Experience } from './Experience/Experience';

const Gallery = () => {
  const [experienceYears, setExperienceYears] = useState(0);
  const [experienceMonths, setExperienceMonths] = useState(0);
  const [isExperienceVisible, setExperienceVisible] = useState(false);

  let navigate = useNavigate();

  const handleProjectsOpen = () => {
    navigate('/projects');
  };

  const handleContactsOpen = () => {
    navigate('/contacts');
  };

  useEffect(() => {
    const startDate = new Date('2022-04-01');
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    setExperienceYears(years);
    setExperienceMonths(months);
  }, []);

  useEffect(() => {
    let zSpacing = -1000,
      lastPos = zSpacing / 5,
      $frames = document.getElementsByClassName('frame'),
      frames = Array.from($frames),
      zVals: any[] = [];

    function handleScroll() {
      let top = document.documentElement.scrollTop,
        delta = lastPos - top;

      lastPos = top;

      frames.forEach(function (n, i) {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * -5.5;
        let frame = frames[i],
          transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        if (frame instanceof HTMLElement) {
          frame.style.cssText = `transform: ${transform}; opacity: ${opacity};`;

          if (opacity === 0) {
            frame.style.pointerEvents = 'none';
          } else {
            frame.style.pointerEvents = 'auto';
          }

          if (frame.classList.contains('experience') && opacity === 1 && zVals[i] > 0) {
            setExperienceVisible(true);
          }
          if (!frame.classList.contains('experience') && opacity === 1 && zVals[i] > 0) {
            setExperienceVisible(false);
          }
        }
      });
    }

    window.addEventListener('scroll', handleScroll);

    window.scrollTo(0, 1);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Litvinov Mikhail</title>
        <link rel="icon" href="ML.ico" />
      </Helmet>
      <S.Wrapper>
        <S.Container>
          <S.Gallery>
            <Frame>
              <S.H2>
                Hello! <br /> I am <br />
                Mikhail <br />
                Litvinov
              </S.H2>
            </Frame>
            <Frame>
              <S.ImageLeft src={MyPhoto} />
            </Frame>
            <Frame>
              <S.ImageRight src={FrontEnd} />
            </Frame>
            <Frame>
              <S.TextRight>
                <S.H3>Professional summary</S.H3>
                <S.P>
                  I am a Front-end developer with <S.Square>{experienceYears}</S.Square> {experienceYears > 1 ? 'years' : 'year'} and{' '}
                  <S.Square>{experienceMonths}</S.Square> {experienceMonths > 1 || experienceMonths === 0 ? 'months' : 'month'} of software
                  development experience, utilizing JavaScript as the main programming language and the React library. Eager to create high-quality
                  and efficient software solutions and deliver value to clients. A quick learner with attention to details and a result-oriented
                  mindset. Diligent, determined, highly reliable individual with exceptional creativity, problem solving and interpersonal skills
                </S.P>
              </S.TextRight>
            </Frame>
            <Frame>
              <Technologies />
            </Frame>
            <Frame>
              <S.TextLeft>
                <S.H3>Frontend Development Experience</S.H3>
                <S.P>
                  Here are some of the key projects I have worked on as a frontend developer. Each project represents the result of my efforts in
                  creating user interfaces that are both user-friendly and functionally robust, utilizing modern technologies and best practices in
                  frontend development
                </S.P>
              </S.TextLeft>
            </Frame>
            <Frame name="experience">
              <Experience isExperienceVisible={isExperienceVisible} />
            </Frame>
            <Frame>
              <S.Text>
                <S.H3>My Projects and Contacts</S.H3>
                <S.P style={{ textAlign: 'center' }}>
                  Welcome to the section where I showcase my personal projects and contact information! Here, I present ideas I've been working on in
                  my spare time, as well as provide ways to get in touch with me. Each project is a reflection of my passion for frontend development.
                  Click the button below to go to the projects page and learn more about each of them, or head to the contacts page to get in touch
                  with me!
                </S.P>
                <S.ButtonsWrapper>
                  <S.Button onClick={handleProjectsOpen}>
                    <S.ProjectsIcon src={projectsIcon} />
                    Projects
                  </S.Button>
                  <S.Button onClick={handleContactsOpen}>
                    <S.ContactsIcon src={contactsIcon} />
                    Contacts
                  </S.Button>
                </S.ButtonsWrapper>
              </S.Text>
            </Frame>
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Gallery;
