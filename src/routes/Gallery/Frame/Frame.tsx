import { IFrameProps } from "./type";
import * as S from "./Frame.styles";

export const Frame = ({ children }: IFrameProps) => {
    return (
        <S.Frame className="frame">
            <S.Content>
                {children}
            </S.Content>
        </S.Frame>
    );
};
