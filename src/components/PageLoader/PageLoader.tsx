import * as S from './PageLoader.styles';
import { IPageLoaderProps } from './types';
import ProgressBar from '../ProgressBar/ProgressBar';

const PageLoader: React.FC<IPageLoaderProps> = (props) => {
  const { isPageLoaded } = props;
  return (
    <S.LoaderContainer isPageLoaded={isPageLoaded}>
      <ProgressBar />
    </S.LoaderContainer>
  );
};

export default PageLoader;
