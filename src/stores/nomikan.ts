/* eslint-disable implicit-arrow-linebreak */
import { create } from "zustand";
// eslint-disable-next-line import/no-extraneous-dependencies
import { mountStoreDevtool } from "simple-zustand-devtools";
import { persist, createJSONStorage } from "zustand/middleware";

interface IMember {
  name: string
  ratio: number
}
interface State {
  // total cost of all members
  cost: number | string | undefined;
  // list of members info
  members: IMember[]
}

interface Action {
  setCost: (newCost: number | string | undefined) => void;
  setMembers: (newMembers: Array<IMember>) => void;
}

export const useNomikanStore = create<State & Action>()(
  // Store cost data in session storage
  persist(
    (set) => ({
      cost: "",
      members: [],

      setCost: (newCost: number | string | undefined) =>
        set(() => ({ cost: newCost })),
      setMembers: (newMembers: Array<IMember>) =>
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
