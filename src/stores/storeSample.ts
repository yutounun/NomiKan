import { create } from 'zustand'
interface State {
  bears: number
}

interface Action {
  increasePopulation: (bears: State['bears']) => void
  removeAllBears: () => void
}

export const useStore = create<State & Action>((set) => ({
  bears: 1,
  increasePopulation: () => { set((state) => ({ bears: state.bears + 1 })) },
  removeAllBears: () => { set({ bears: 0 }) }
}))
