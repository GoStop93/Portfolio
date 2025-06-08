import { Flipper } from 'react-flip-toolkit';
import { useEffect, useState } from 'react';
import { ListItem } from './ListItem/ListItem';
import { ExpandedListItem } from './ExpandedListItem/ExpandedListItem';
import { ExperienceData } from './type';
import * as S from './Experience.styles';
import { IExperienceProps } from './type';

export const Experience = ({ isExperienceVisible }: IExperienceProps) => {
  const [focused, setFocused] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleOpen = (index: number) => {
    setFocused((prev: number | null) => (prev === index ? null : index));
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isExperienceVisible) {
      setFocused(null);
    }
  }, [isExperienceVisible]);

  const listData1 = ExperienceData.filter((item) => item.id % 2 !== 0);
  const listData2 = ExperienceData.filter((item) => item.id % 2 === 0);

  return (
    <S.Experience>
      <Flipper
        flipKey={focused}
        className="staggered-list-content"
        spring="gentle"
        staggerConfig={{
          card: {
            reverse: focused !== null,
          },
        }}
        decisionData={focused}
      >
        <S.ListWrapper>
          {isMobile ? (
            <S.List>
              {ExperienceData.map((item, index) => (
                <S.Item key={item.id}>
                  {item.id === focused ? (
                    <ExpandedListItem index={focused} onClick={handleOpen} image={item.image} text={item.text} info={item.info} />
                  ) : (
                    <ListItem index={item.id} onClick={handleOpen} image={item.image} text={item.text} />
                  )}
                </S.Item>
              ))}
            </S.List>
          ) : (
            <>
              <S.List>
                {listData1.map((item, index) => (
                  <S.Item key={item.id}>
                    {item.id === focused ? (
                      <ExpandedListItem index={focused} onClick={handleOpen} image={item.image} text={item.text} info={item.info} />
                    ) : (
                      <ListItem index={item.id} onClick={handleOpen} image={item.image} text={item.text} />
                    )}
                  </S.Item>
                ))}
              </S.List>
              <S.List>
                {listData2.map((item, index) => (
                  <S.Item key={item.id}>
                    {item.id === focused ? (
                      <ExpandedListItem index={focused} onClick={handleOpen} image={item.image} text={item.text} info={item.info} />
                    ) : (
                      <ListItem index={item.id} onClick={handleOpen} image={item.image} text={item.text} />
                    )}
                  </S.Item>
                ))}
              </S.List>
            </>
          )}
        </S.ListWrapper>
      </Flipper>
    </S.Experience>
  );
};
