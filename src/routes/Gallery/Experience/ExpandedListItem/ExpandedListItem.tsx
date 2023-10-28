import { Flipped } from "react-flip-toolkit";
import { IExpandedListItemProps } from "./type";
import * as S from "./ExpandedListItem.styles";

export const ExpandedListItem = ({ index, onClick, image, text, info }: IExpandedListItemProps) => {
    const createCardFlipId = (index: any) => `listItem-${index}`;
    
    return (
        <Flipped
            flipId={createCardFlipId(index)}
            stagger="card"
            onStart={el => {
                setTimeout(() => {
                el.classList.add("animated-in");
                }, 400);
            }}
        >
            <S.ExpandedListItemWrapper onClick={() => onClick(index)}>
                <Flipped inverseFlipId={createCardFlipId(index)}>
                    <S.ExpandedListItemContent>
                        <Flipped
                            flipId={`avatar-${index}`}
                            stagger="card-content"
                            delayUntil={createCardFlipId(index)}
                        >
                            <S.AvatarExpanded image={image} />
                        </Flipped>
                        <S.Description>
                            {text.map((item, i) => (
                                <Flipped
                                    key={i}
                                    flipId={`description-${index}-${i}`}
                                    stagger="card-content"
                                    delayUntil={createCardFlipId(index)}
                                >
                                    <S.DescriptionItem>{item}</S.DescriptionItem>
                                </Flipped>
                            ))}
                        </S.Description>
                        <S.AdditionalContent>
                            {Object.entries(info).map(([key, value]) => (
                                <S.AdditionalContentItem key={key}>
                                    <S.AdditionalContentTitle>{key.toUpperCase()}</S.AdditionalContentTitle>
                                    {Array.isArray(value) ? (
                                        <S.UL>
                                            {value.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </S.UL>
                                    ): (
                                        <S.AdditionalContentText>{value}</S.AdditionalContentText>
                                    )}
                                </S.AdditionalContentItem>
                            ))}
                        </S.AdditionalContent>
                    </S.ExpandedListItemContent>
                </Flipped>
            </S.ExpandedListItemWrapper>
        </Flipped>
    );
};
