import * as S from './Resume.styles';

import ResumeImage from '../../../assets/images/resume/resume1.png';
import icon from '../../../assets/icons/download.png';

const Resume = () => {

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Litvinov Mikhail Frontend Developer.pdf';
    link.click();
  };
  return (
    <>
      <S.ResumeWrapper onClick={handleDownloadClick}/>
      <S.ResumeImage src={ResumeImage} />
      <S.DownloadIcon src={icon} />
      <S.DownloadText>
        <span>D</span>
        <span>o</span>
        <span>w</span>
        <span>n</span>
        <span>l</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        &nbsp;
        <span>R</span>
        <span>e</span>
        <span>s</span>
        <span>u</span>
        <span>m</span>
        <span>e</span>
        </S.DownloadText>
    </>
  );
};

export default Resume;
