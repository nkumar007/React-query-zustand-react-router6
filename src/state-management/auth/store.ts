import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import useCounterStore from "../counter/store";

interface AuthStore {
  user: string;
  logout: () => void;
  login: (username: string) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  logout: () => set(() => ({ user: "" })),
  login: (username) => set(() => ({ user: username })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("CounterStore", useCounterStore);
}

export default useAuthStore;
