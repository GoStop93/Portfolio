import * as S from './Contacts.styles';
import Particles from '../../components/Particles/Particles';

import Resume from './Resume/Resume';

const Contacts: React.FC = () => {
  return (
    <S.Contacts>
      <Particles />
      <S.Content>
        <Resume />
      </S.Content>
      {/* <div style={{ position: 'absolute', top: '0', right: '0' }}>
        <a href="/resume.pdf" download="resume.pdf">
          Download Resume
        </a>
      </div> */}
    </S.Contacts>
  );
};

export default Contacts;
