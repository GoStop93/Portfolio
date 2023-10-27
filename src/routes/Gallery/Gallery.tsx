import { useState, useEffect } from 'react';
import { Frame } from "./Frame/Frame";
import { Technologies } from './Technologies/Technologies';
import * as S from "./Gallery.styles";
import MyPhoto from '../../assets/images/my_photo.png';
import FrontEnd from '../../assets/images/frontend.gif';

export const Gallery = () => {
    const [experienceYears, setExperienceYears] = useState(0);
    const [experienceMonths, setExperienceMonths] = useState(0);

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

        window.onscroll = function() {
            let top = document.documentElement.scrollTop,
                delta = lastPos - top

            lastPos = top

            frames.forEach(function(n, i) {
                zVals.push((i * zSpacing) + zSpacing)
                zVals[i] += delta * -5.5
                let frame = frames[i],
                    transform = `translateZ(${zVals[i]}px)`,
                    opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
                frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
            });
        };

        window.scrollTo(0, 1)
    }, []);

    return (
        <S.Container>
            <S.Gallery>
                <Frame>
                    <S.H2>Hello! <br /> I am  <br />Mikhail <br />Litvinov</S.H2>
                </Frame>
                <Frame>
                    <S.ImageLeft src={MyPhoto}/>
                </Frame>
                <Frame>
                    <S.ImageRight src={FrontEnd}/>
                </Frame>
                <Frame>
                    <S.Text>
                        <S.H3>Professional summary</S.H3>
                        <S.P>
                            I am a Front-end developer with <S.Square>{experienceYears}</S.Square> year(s) 
                            and <S.Square>{experienceMonths}</S.Square> month(s) of software development experience, 
                            utilizing JavaScript as the main programming language and the React library. Eager 
                            to create high-quality and efficient software solutions and deliver value to clients. A 
                            quick learner with attention to details and a result-oriented mindset. Diligent, 
                            determined, highly reliable individual with exceptional creativity, problem solving and 
                            interpersonal skills
                        </S.P>
                    </S.Text>
                </Frame>
                <Frame>
                    <Technologies />
                </Frame>
            </S.Gallery>
        </S.Container>
    );
};
