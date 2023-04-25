import { create } from "zustand";

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

export default useAuthStore;
