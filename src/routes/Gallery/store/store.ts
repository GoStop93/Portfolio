import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { IRoutesStore, ACTIVE_PAGE_NAME } from './types';

export const usePages = create<IRoutesStore>()(
  immer((set) => ({
    activePage: ACTIVE_PAGE_NAME.Gallery,
    setActivePage: (value: ACTIVE_PAGE_NAME) => {
      set(() => ({ activePage: value }));
    },

    isPageLoaded: false,
    setIsPageLoaded: (value: boolean) => {
      set(() => ({ isPageLoaded: value }));
    },
  }))
);
