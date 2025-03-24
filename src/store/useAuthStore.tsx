import { create } from "zustand";
import { User } from "@supabase/supabase-js";

interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
}

interface AuthActions {
    login: (user: User | null) => void;
    logout: () => void;
}   

const useAuthStore = create<AuthState & AuthActions>((set) => ({
    isLoggedIn: false,
    user: null,
    login: (user) => set({ isLoggedIn: true, user }),
    logout: () => set({ isLoggedIn: false, user: null }),
}))

export default useAuthStore;



