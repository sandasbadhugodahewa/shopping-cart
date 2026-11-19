import ProductImage from "@/components/ProductImage";
import Screen from "@/components/Screen";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice, getItemCount } from "@/util/format";
import { ScrollView, Text, View } from "react-native";

export default function CartScreen() {

  const items = useCartStore((state)=> state.items);


  const itemCount = getItemCount(items);

  return (
    <Screen>
      <View className="px-5 pt-5">
        <Text className="text-3xl font-bold text-gray-900">My Cart</Text>
        <Text className="mt-1 text-base text-gray-500">{itemCount} items</Text>
      </View>

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        {items.map((item) => (
          <View
            key={item.product.id}
            className="mt-3 flex-row items-center rounded-2xl border border-gray-100 bg-white p-3"
          >
            <View style={{width : 80}}>
              <ProductImage uri={item.product.images[0]} color={item.product.color} height={80}/>
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-base font-semibold text-gray-900">{item.product.name}</Text>
              <Text className="mt-0.5 text-sm text-gray-500">{formatPrice(item.product.price)}</Text>
            </View>

          </View>
        ))}
      </ScrollView>

    </Screen>
  );
}