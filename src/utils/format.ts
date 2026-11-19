import { CartItem } from "@/types";

export const FREE_DELIVERY_OVER = 1200;
export const DELIVERY_FEE = 400;


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

export function getSubTotal(items: CartItem[]): number{
    let total = 0;
    for(const item of items){
        total = total + item.product.price * item.quantity;
    }
    return total;
}

export function getDeliveryFee(subtotal: number): number{
    if(subtotal === 0){
        return 0;
    }

    if(subtotal >= FREE_DELIVERY_OVER){
        return 0;
    }

    return DELIVERY_FEE;
}

