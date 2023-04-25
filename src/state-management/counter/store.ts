import { create } from "zustand";

interface CounterStore {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  decrement: () => set({ counter: 0 }),
}));

export default useCounterStore;
