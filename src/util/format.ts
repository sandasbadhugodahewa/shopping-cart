import { CartItem } from "@/types";

export function formatPrice(value: number): string {
    return "LKR " + value.toFixed(2);
}

export function getItemCount(items: CartItem[]): number {
    let count = 0;
    for (const item of items) {
        count = count + item.quantity;
    }

    return count;
}