/* eslint-disable implicit-arrow-linebreak */
import { create } from "zustand";
// eslint-disable-next-line import/no-extraneous-dependencies
import { mountStoreDevtool } from "simple-zustand-devtools";
import { persist, createJSONStorage } from "zustand/middleware";

interface State {
  cost: number | string | undefined;
  members: Array<string>;
}

interface Action {
  setCost: (newCost: number | string | undefined) => void;
  setMembers: (newMembers: Array<string>) => void;
}

export const useNomikanStore = create<State & Action>()(
  // Store cost data in session storage
  persist(
    (set) => ({
      cost: "",
      members: [],

      setCost: (newCost: number | string | undefined) =>
        set(() => ({ cost: newCost })),
      setMembers: (newMembers: Array<string>) =>
        set(() => ({ members: newMembers })),
    }),
    {
      name: "nomikan-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// Tool to display the zustand store data in the devtools
mountStoreDevtool("Store", useNomikanStore);
export default useNomikanStore;
