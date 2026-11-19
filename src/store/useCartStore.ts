import { CartItem, Product } from "@/types";
import { create } from "zustand";

type CartState = {
    items: CartItem[];
    addToCart: (product: Product, quantity: number) => void;
    increase: (productId: number) => void;
    decrease: (productId: number) => void;
    remove: (productId: number) => void;
    clearCart: () => void;
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

    increase: (productId) => {
        const updated = get().items.map((item) => {
            if (item.product.id === productId) {
                return { product: item.product, quantity: item.quantity + 1 };
            }
            return item;
        })
        set({ items: updated });
    },

    decrease: (productId) => {
        const updated = get().items.map((item) => {
            if (item.product.id === productId && item.quantity > 1) {
                return { product: item.product, quantity: item.quantity - 1 };
            }
            return item;
        })
        set({ items: updated });
    },

    remove: (productId) => {
        const updated = get().items.filter((item) => item.product.id !== productId);
        set({ items: updated });
    },

    clearCart: () => {
        set({ items: [] });
    }

}));