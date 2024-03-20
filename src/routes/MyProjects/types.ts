import warcraft from '../../assets/images/gallery/craft_in_warcraft.jpg';
import cdpr from '../../assets/images/gallery/cdpr.jpg';
import marvel from '../../assets/images/gallery/marvel.jpg';
export interface IProjectEntity {
  imageUrl: string;
  URL: string;
  description: string;
  type: 'vertical' | 'horizontal';
  cursor: string;
}

export const LeftSideProjects: IProjectEntity[] = [
  {
    imageUrl: warcraft,
    URL: 'https://gostop93.github.io/craftinwarcraft/',
    description:
      'Craft in Warcraft - an information portal about World of Warcraft. Here you will find all the information about the most popular MMORPG. Immerse yourself in the rich lore and vast world of Azeroth, where heroes and villains clash in epic battles. Whether you are an experienced adventurer or a newcomer to this world, our portal will help you delve deeper into this captivating universe. Join us in our quest for glory and adventure in the expansive lands of Azeroth!',
    type: 'horizontal',
    cursor: 'var(--custom-cursor-warcraft)',
  },
  {
    imageUrl: cdpr,
    URL: 'https://gostop93.github.io/cdpr/',
    description:
      'This is a web resume designed in the style of The Witcher and Cyberpunk 2077, specifically developed for CD Projekt Red. This interactive portfolio showcases my skills and projects within the atmosphere of these two iconic worlds.',
    type: 'horizontal',
    cursor: 'var(--custom-cursor-cyberpunk)',
  },
];

export const RightSideProjects: IProjectEntity[] = [
  {
    imageUrl: marvel,
    URL: 'https://gostop93.github.io/marvel/',
    description:
      "This portal is your ultimate source for all things Marvel! Delve into the world of superheroes and comics, where you can explore detailed information about your favorite characters and dive into captivating stories within the Marvel Universe. Whether you're a dedicated fan or just curious about the Marvel multiverse, this platform is your go-to destination for all the latest updates, insights, and news from the Marvel universe",
    type: 'vertical',
    cursor: 'var(--custom-cursor-marvel)',
  },
];
