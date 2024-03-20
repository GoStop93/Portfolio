import * as S from './Resume.styles';

import ResumeImage from '../../../assets/images/resume/resume.png';
import downloadIcon from '../../../assets/icons/download.png';
import openIcon from '../../../assets/icons/open.png';

const Resume = () => {
  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = '/Litvinov_Mikhail_Frontend_Developer/resume.pdf';
    link.download = 'Litvinov Mikhail Frontend Developer.pdf';
    link.click();
  };

  const handleOpenClick = () => {
    const link = document.createElement('a');
    link.href = '/Litvinov_Mikhail_Frontend_Developer/resume.pdf';
    link.target = '_blank'; 
    link.click();
  };
  return (
    <>
      <S.ResumeTopWrapper onClick={handleOpenClick} />
      <S.ResumeBottomWrapper onClick={handleDownloadClick} />
      <S.ResumeImage src={ResumeImage} />
      <S.DownloadIcon src={downloadIcon} />
      <S.OpenIcon src={openIcon} />
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
      <S.OpenText>
        <span>O</span>
        <span>p</span>
        <span>e</span>
        <span>n</span>
        &nbsp;
        <span>R</span>
        <span>e</span>
        <span>s</span>
        <span>u</span>
        <span>m</span>
        <span>e</span>
      </S.OpenText>
    </>
  );
};

export default Resume;
