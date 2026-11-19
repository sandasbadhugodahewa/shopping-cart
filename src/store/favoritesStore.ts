import { create } from "zustand";

type FavoritesState = {
    ids: number[];
    toggle: (productId: number) => void;
};

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
    ids: [],

    toggle: (productId) => {
        const ids = get().ids;
        if (ids.includes(productId)) {
            set({ ids: ids.filter((id) => id != productId) });
        } else {
            set({ ids: [...ids, productId] });
        }
    }
}));