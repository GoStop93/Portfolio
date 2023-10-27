import * as S from "./Technology.styles";
import { ITechnologyProps } from "../type";

export const Technology = ({ icon, text }: ITechnologyProps) => {
    return (
        <S.Technology>
            <S.Icon src={icon}/>
            <S.Text>{text}</S.Text>
        </S.Technology>
    );
};
