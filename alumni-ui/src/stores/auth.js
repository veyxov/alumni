import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: null,
  saveToken: () => set((state) => ({ token: state.token })),
}));
