import * as S from './MyProjects.styles';
import heros from '../../assets/images/heros.jpg';
import warcraft from '../../assets/images/gallery/craft_in_warcraft.jpg';
import cdpr from '../../assets/images/gallery/cdpr.jpg';
import marvel from '../../assets/images/gallery/marvel.jpg';
import { Card } from './Card/Card';

export const MyProjects = () => {
  return (
    <S.ProjectsPage>
      <S.ProjectsHeader>
        <S.HeroImage src={heros} />
        <S.MainTitle>Gallery of my pet projects</S.MainTitle>
      </S.ProjectsHeader>
      <S.Gallery>
        <S.GalleryLeftContent>
          <S.Project>
            <S.HorizontalProjectImage src={warcraft} />
            <S.ProjectDescription>test description</S.ProjectDescription>
            <Card />
          </S.Project>

          <S.Project>
            <S.HorizontalProjectImage src={cdpr} />
            <S.ProjectDescription>test description</S.ProjectDescription>
          </S.Project>
        </S.GalleryLeftContent>
        <S.GalleryRightContent>
          <S.Project>
            <S.VerticalProjectImage src={marvel} />
            <S.ProjectDescription>test description</S.ProjectDescription>
          </S.Project>
          <S.TextBlock>Coming soon...</S.TextBlock>
        </S.GalleryRightContent>
      </S.Gallery>
    </S.ProjectsPage>
  );
};
