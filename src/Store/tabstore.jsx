import { create } from 'zustand';

const useTabStore = create((set) => ({
  activeTab: 0,
  setActiveTab: (tabIndex) => set({ activeTab: tabIndex }),
}));

export default useTabStore;
