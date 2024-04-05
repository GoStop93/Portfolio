import { IRoutesStore } from './types';

export const getActivePage = (store: IRoutesStore) => store.activePage;
export const getSetActivePage = (store: IRoutesStore) => store.setActivePage;

export const getIsPageLoaded = (store: IRoutesStore) => store.isPageLoaded;
export const getSetIsPageLoaded = (store: IRoutesStore) => store.setIsPageLoaded;
