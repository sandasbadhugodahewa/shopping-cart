export type User = {
    name: string;
    email: string;
    password: string;
}

export type Product = {
    id: number;
    name: string;
    category: string;
    price: number;
    oldPrice: number;
    rating: number;
    reviews: number;
    images: string[];
    color: string;
    description: string;
}

export type CartItem = {
    product: Product;
    quantity: number;
}