import { useField } from 'formik';
import * as S from './Input.styles';

import { IInputProps } from './types';

const Input: React.FC<IInputProps> = (props) => {
  const { label, name, textarea, ...restProps } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <S.Label htmlFor={name}>{label}</S.Label>
      {textarea ? <S.TextArea {...restProps} {...field}/> : <S.Input {...restProps} {...field}/>}
      {meta.touched && meta.error ? <S.ErrorMessage>{meta.error}</S.ErrorMessage> : null}
    </>
  );
};

export default Input;
