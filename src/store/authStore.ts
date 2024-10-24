import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthState {
  auth_token: string | null;
  set_auth_token: (auth_token: string) => void;
  clear_auth_token: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      auth_token: null,
      set_auth_token: (auth_token: string) => set({ auth_token }),
      clear_auth_token: () => set({ auth_token: null }), // Optional clear function
    }),
    {
      name: "auth-storage", // Key in sessionStorage
      storage: createJSONStorage(() => sessionStorage), // Use sessionStorage for persistence
    }
  )
);
