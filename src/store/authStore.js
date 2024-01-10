import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user-info")) || null,
  loginUser: (user) => set({ user }),
}));

export default useAuthStore;
