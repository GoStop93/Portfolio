export enum ACTIVE_PAGE_NAME {
  Gallery = 'gallery',
  Contacts = 'contacts',
  Projects = 'projects',
}

export interface IRoutesStore {
  activePage: ACTIVE_PAGE_NAME;
  setActivePage: (value: ACTIVE_PAGE_NAME) => void;

  isPageLoaded: boolean;
  setIsPageLoaded: (value: boolean) => void;
}
