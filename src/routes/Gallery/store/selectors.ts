import { IRoutesStore } from "./types";

export const getActivePage = (store: IRoutesStore) => store.activePage;
export const getSetActivePage = (store: IRoutesStore) => store.setActivePage;