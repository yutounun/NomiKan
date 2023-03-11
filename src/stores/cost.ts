import { create } from "zustand";
// eslint-disable-next-line import/no-extraneous-dependencies
import { mountStoreDevtool } from "simple-zustand-devtools";
import { persist, createJSONStorage } from "zustand/middleware";

interface State {
  cost: number | string;
}

interface Action {
  setCost: (newCost: number | string) => void;
}

export const useCostStore = create<State & Action>()(
  // Store cost data in session storage
  persist(
    (set) => ({
      cost: 0,
      setCost: (newCost: number | string) => set(() => ({ cost: newCost })),
    }),
    {
      name: "cost-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// Tool to display the zustand store data in the devtools
mountStoreDevtool("Store", useCostStore);
export default useCostStore;
