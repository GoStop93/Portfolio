import * as S from "./Technologies.styles";
import { Technology } from "./Technology/Technology";
import { TechnologiesInformation } from "./type";

export const Technologies = () => {
    return (
        <S.Technologies>
            <S.H3>Technologies and tools</S.H3>
            <S.Content>
                {TechnologiesInformation.map((technology) => (
                    <Technology 
                        icon={technology.icon}
                        text={technology.text}
                    />
                ))}
            </S.Content>
        </S.Technologies>
    );
};
