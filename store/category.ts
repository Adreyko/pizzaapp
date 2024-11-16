import { create } from 'zustand';

export interface CategoryState {
  activeId: number;
  setActiveId: (activeId: number) => void;
}

export const useCategory = create<CategoryState>()((set) => ({
  activeId: 1,
  setActiveId: (activeId) => set({ activeId }),
}));

export const getSetActiveId = (state: CategoryState) => {
  return state.setActiveId;
};

export const getActiveCategoryId = (state: CategoryState) => {
  return state.activeId;
};
