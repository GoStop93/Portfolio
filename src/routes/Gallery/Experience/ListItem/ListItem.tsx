import { Flipped } from 'react-flip-toolkit';
import { IListItemProps } from './type';
import * as S from './ListItem.styles';

export const ListItem = ({ index, onClick, image, text }: IListItemProps) => {
  const createCardFlipId = (index: any) => `listItem-${index}`;

  const shouldFlip = (index: any) => (prev: any, current: any) => index === prev || index === current;

  return (
    <Flipped flipId={createCardFlipId(index)} stagger="card" shouldInvert={shouldFlip(index)}>
      <S.ListItemWrapper onClick={() => onClick(index)}>
        <Flipped inverseFlipId={createCardFlipId(index)}>
          <S.ListItemContent>
            <Flipped flipId={`avatar-${index}`} stagger="card-content" shouldFlip={shouldFlip(index)} delayUntil={createCardFlipId(index)}>
              <S.Avatar image={image} />
            </Flipped>
            <S.Description>
              {text.map((item, i) => (
                <Flipped
                  key={i}
                  flipId={`description-${index}-${i}`}
                  stagger="card-content"
                  shouldFlip={shouldFlip(index)}
                  delayUntil={createCardFlipId(index)}
                >
                  <S.DescriptionItem>{item}</S.DescriptionItem>
                </Flipped>
              ))}
            </S.Description>
          </S.ListItemContent>
        </Flipped>
      </S.ListItemWrapper>
    </Flipped>
  );
};
