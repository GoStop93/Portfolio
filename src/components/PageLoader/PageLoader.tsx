import * as S from './PageLoader.styles';
import { IPageLoaderProps } from './types';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useEffect } from 'react';

const PageLoader: React.FC<IPageLoaderProps> = (props) => {
  const { isPageLoaded } = props;

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <S.LoaderContainer isPageLoaded={isPageLoaded}>
      <ProgressBar />
    </S.LoaderContainer>
  );
};

export default PageLoader;
