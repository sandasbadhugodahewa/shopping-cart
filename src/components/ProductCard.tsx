import { useFavoritesStore } from "@/store/favoritesStore";
import { useCartStore } from "@/store/useCartStore";
import { Product } from "@/types";
import { formatPrice } from "@/util/format";
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import ProductImage from "./ProductImage";


type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {

    const addToCart = useCartStore((state) => state.addToCart);
    const favoriteIds = useFavoritesStore((state) => state.ids);
    const toggleFavorite = useFavoritesStore((state) => state.toggle);

    const isFavorite = favoriteIds.includes(product.id);
    let heartName: "heart" | "heart-outline" = "heart-outline";
    let heartColor = "#b6b7bf";
    if (isFavorite) {
        heartName = "heart";
        heartColor = "#af2a40";
    }

    return (
        <View className="w-1/2 p-2">

            <TouchableOpacity
                className="rounded-2xl border border-gray-100 bg-white p-2"
                style={{
                    shadowColor: "#000",
                    shadowOpacity: 0.06,
                    shadowRadius: 8,
                    shadowOffset: { width: 0, height: 2 },
                    elevation: 2
                }}

                activeOpacity={0.9}
            >


                <View>
                    <ProductImage uri={product.images[0]} color={product.color} height={100} />
                    <TouchableOpacity
                        className="absolute right-2 top-2 h-8 w-8 items-center justify-center rounded-full bg-white"
                        onPress={() => toggleFavorite(product.id)}
                    >
                        <Ionicons name={heartName} size={18} color={heartColor} />
                    </TouchableOpacity>


                    {product.oldPrice > 0 && (
                        <View className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-0.5">
                            <Text className="text-xs font-bold text-white">SALE</Text>
                        </View>
                    )}
                </View>

                <View className="px-1 pb-1 pt-3">
                    <Text className="text-xs text-gray-500">{product.category}</Text>
                    <Text className="mt-0.5 text-sm font-semibold text-gray-900">{product.name}</Text>

                    <View className="mt-1 flex-row items-center">
                        <Ionicons name="star" size={12} />
                        <Text className="ml-1 text-xs text-gray-500">{product.rating}</Text>
                    </View>

                    <View className="mt-2 flex-row items-center justify-between">
                        <View>
                            <Text className="text-base font-bold text-gray-900">{formatPrice(product.price)}</Text>
                            {product.oldPrice > 0 && (
                                <Text className="text-xs text-gray-400 line-through">{formatPrice(product.oldPrice)}</Text>
                            )}
                        </View>

                        <TouchableOpacity
                            className="h-9 w-9 items-center justify-center rounded-full bg-primary"
                            onPress={() => addToCart(product, 1)}
                        >
                            <Ionicons name="add" size={20} color="#FFFFFF" />
                        </TouchableOpacity>

                    </View>




                </View>

            </TouchableOpacity>
        </View>
    );
}