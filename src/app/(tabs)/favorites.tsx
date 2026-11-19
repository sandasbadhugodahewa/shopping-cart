import ProductCard from "@/components/ProductCard";
import Screen from "@/components/Screen";
import { products } from "@/data/products";
import { useFavoritesStore } from "@/store/favoritesStore";
import { ScrollView, Text, View } from "react-native";

export default function FavoriteScreen() {

    const favoriteIds = useFavoritesStore((state) => state.ids);
    const favoriteProducts = products.filter((product) => favoriteIds.includes(product.id));

    return (
        <Screen>
            <View className="px-5 pt-5">
                <Text className="text-3xl font-bold text-gray-900">My Favorites</Text>
                <Text className="mt-1 text-base text-gray-500">{favoriteProducts.length} saved items</Text>
            </View>

            {favoriteProducts.length > 0 && (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="flex-row flex-wrap px-3 pb-6 pt-2">
                        {
                            favoriteProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                    </View>
                </ScrollView>
            )}


        </Screen>
    );
}