import { IToastProviderProps } from './types';

import * as S from './ToastProvider.styles';

import 'react-toastify/dist/ReactToastify.css';

const ToastProvider: React.FC<IToastProviderProps> = ({ children }) => {
  return (
    <>
      {children}
      <S.Toast position="top-right" autoClose={3000} hideProgressBar={true} newestOnTop={false} theme="colored" closeOnClick pauseOnHover limit={4} />
    </>
  );
};

export default ToastProvider;
