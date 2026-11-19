import { CartItem, Product } from "@/types";
import { create } from "zustand";

type CartState = {
    items: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],

    addToCart(product, quantity) {
        const items = get().items;
        const found = items.find((item) => item.product.id === product.id);

        if (found === undefined) {
            set({ items: [...items, { product: product, quantity: quantity }] });
            return;
        }

        const updated = items.map((item) => {
            if (item.product.id === product.id) {
                return { product: item.product, quantity: item.quantity + quantity };
            }
            return item;
        });
        set({ items: updated });
    },
}));