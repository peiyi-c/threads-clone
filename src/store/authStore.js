import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user-info")) || null,
  loginUser: (user) => set({ user }),
  logoutUser: () => set({ user: null }),
}));

export default useAuthStore;
