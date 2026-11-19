import { Product } from "@/types";


function getImages(folder: string, count:number){
    const urls: string[] = [];
    for(let number = 1; number <= count; number++){
        urls.push("https://cdn.dummyjson.com/product-images/"+folder+"/"+number+".webp");
    }

    return urls;
}


export const products: Product[] = [
    {
    id: 1,
    name: "Annibale Colombo Bed",
    category: "Furniture",
    price: 1899.99,
    oldPrice: 2078.08,
    rating: 4.8,
    reviews: 88,
    images: getImages("furniture/annibale-colombo-bed", 3),
    color: "#EEF2FF",
    description:
      "A luxurious and elegant bed frame, crafted with high-quality materials for a comfortable and stylish bedroom.",
  },
  {
    id: 2,
    name: "Annibale Colombo Sofa",
    category: "Furniture",
    price: 2499.99,
    oldPrice: 2920.55,
    rating: 3.9,
    reviews: 60,
    images: getImages("furniture/annibale-colombo-sofa", 3),
    color: "#FEF3C7",
    description:
      "A sophisticated and comfortable seating option, featuring exquisite design and premium upholstery for your living room.",
  },
  {
    id: 3,
    name: "Bedside Table African Cherry",
    category: "Furniture",
    price: 299.99,
    oldPrice: 370.77,
    rating: 4.0,
    reviews: 64,
    images: getImages("furniture/bedside-table-african-cherry", 3),
    color: "#FFEDD5",
    description:
      "A stylish and functional addition to your bedroom, providing convenient storage space and a touch of elegance.",
  },
  {
    id: 4,
    name: "Executive Conference Chair",
    category: "Furniture",
    price: 499.99,
    oldPrice: 0,
    rating: 4.9,
    reviews: 26,
    images: getImages("furniture/knoll-saarinen-executive-conference-chair", 3),
    color: "#F1F5F9",
    description:
      "A modern and ergonomic chair, perfect for your office or conference room with its timeless design.",
  },
  {
    id: 5,
    name: "Wooden Bathroom Sink With Mirror",
    category: "Furniture",
    price: 799.99,
    oldPrice: 877.18,
    rating: 3.6,
    reviews: 7,
    images: getImages("furniture/wooden-bathroom-sink-with-mirror", 3),
    color: "#E0F2FE",
    description:
      "A unique and stylish addition to your bathroom, featuring a wooden sink countertop and a matching mirror.",
  },
  {
    id: 6,
    name: "Fresh Apple",
    category: "Groceries",
    price: 1.99,
    oldPrice: 2.28,
    rating: 4.2,
    reviews: 41,
    images: getImages("groceries/apple", 1),
    color: "#FEE2E2",
    description:
      "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
  },
  {
    id: 7,
    name: "Beef Steak",
    category: "Groceries",
    price: 12.99,
    oldPrice: 14.37,
    rating: 4.5,
    reviews: 86,
    images: getImages("groceries/beef-steak", 1),
    color: "#FCE7F3",
    description:
      "High-quality beef steak, great for grilling or cooking to your preferred level of doneness.",
  },
  {
    id: 8,
    name: "Cat Food",
    category: "Groceries",
    price: 8.99,
    oldPrice: 9.94,
    rating: 3.1,
    reviews: 46,
    images: getImages("groceries/cat-food", 1),
    color: "#FEF9C3",
    description:
      "Nutritious cat food formulated to meet the dietary needs of your feline friend.",
  },
  {
    id: 9,
    name: "Chicken Meat",
    category: "Groceries",
    price: 9.99,
    oldPrice: 11.58,
    rating: 3.2,
    reviews: 97,
    images: getImages("groceries/chicken-meat", 2),
    color: "#FFEDD5",
    description:
      "Fresh and tender chicken meat, suitable for various culinary preparations.",
  },
  {
    id: 10,
    name: "Cooking Oil",
    category: "Groceries",
    price: 4.99,
    oldPrice: 5.5,
    rating: 4.8,
    reviews: 10,
    images: getImages("groceries/cooking-oil", 1),
    color: "#DCFCE7",
    description:
      "Versatile cooking oil suitable for frying, sautéing, and various culinary applications.",
  },
];

export const categories = ["All", "Furniture", "Groceries"];

export function findProduct(id: number): Product | undefined{
    return products.find((product) => product.id === id);
}