import { create } from "zustand";
import { User } from "../types";

const mockUsers: User[] = [
    { name: "Sandas", email: "lakshan@app.com", password: "1234" }
];

type AuthState = {
    user: User | null;
    login: (email: string, password: string) => string;
    register: (name: string, email: string, password: string) => string;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    login: (email, password) => {
        const cleanEmail = email.trim().toLowerCase();
        const found = mockUsers.find(
            (user) => user.email === cleanEmail && user.password === password
        );

        if (found === undefined) {
            return "Invalid email or password";
        }

        set({ user: found });
        return "";
    },

    register: (name, email, password) => {
        const cleanEmail = email.trim().toLowerCase();
        const exists = mockUsers.find((user) => user.email === cleanEmail);
        if (exists !== undefined) {
            return "This email has already registered";
        }

        const newUser: User = { name: name, email: cleanEmail, password: password };
        mockUsers.push(newUser);
        set({ user: newUser });
        return "";
    },
    logout: () => {
        set({ user: null });
    },

}));