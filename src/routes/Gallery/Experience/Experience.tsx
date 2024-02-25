import { Flipper } from 'react-flip-toolkit';
import { useEffect, useState } from 'react';
import { ListItem } from './ListItem/ListItem';
import { ExpandedListItem } from './ExpandedListItem/ExpandedListItem';
import { ExperienceData } from './type';
import * as S from './Experience.styles';
import { IExperienceProps } from './type';

export const Experience = ({ isExperienceVisible }: IExperienceProps) => {
  const [focused, setFocused] = useState(null);

  const onClick = (index: any) => {
    setFocused((prev: any) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (isExperienceVisible) {
      setFocused(null);
    }
  }, [isExperienceVisible]);

  const listData = ExperienceData;

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
        <S.List>
          {listData.map((item, index) => (
            <S.Item key={index}>
              {index === focused ? (
                <ExpandedListItem index={focused} onClick={onClick} image={item.image} text={item.text} info={item.info} />
              ) : (
                <ListItem index={index} onClick={onClick} image={item.image} text={item.text} />
              )}
            </S.Item>
          ))}
        </S.List>
      </Flipper>
    </S.Experience>
  );
};
