import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";
import ProductImage from "@/components/ProductImage";
import QuntityStepper from "@/components/QunatityStepper";
import Screen from "@/components/Screen";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice, FREE_DELIVERY_OVER, getDeliveryFee, getItemCount, getSubTotal } from "@/utils/format";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function CartScreen() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const remove = useCartStore((state) => state.remove);


  const subtotal = getSubTotal(items);
  const delivery = getDeliveryFee(subtotal);
  const total = subtotal + delivery;
  const itemCount = getItemCount(items);

  let deliveryText = "Free";
  if(delivery > 0){
    deliveryText = formatPrice(delivery);
  }


  if (items.length === 0) {
    return (
      <Screen>
        <View className="px-5 pb-2 pt-4">
          <Text className="text-3xl font-bold text-gray-900">My Cart</Text>
        </View>
        <EmptyState
          icon="cart-outline"
          title="Your cart is empty"
          message="Add a few products and they will show up here."
          buttonTitle="Start shopping"
          onButtonPress={() => router.push("/")}
        />
      </Screen>
    );
  }


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
            <View style={{ width: 80 }}>
              <ProductImage uri={item.product.images[0]} color={item.product.color} height={80} />
            </View>

            <View className="ml-3 flex-1">
              <Text className="text-base font-semibold text-gray-900">{item.product.name}</Text>
              <Text className="mt-0.5 text-sm text-gray-500">{formatPrice(item.product.price)}</Text>
            </View>
            <View className="mt-2 flex-row items-center justify-between">
              <QuntityStepper
                quantity={item.quantity}
                onIncrease={() => increase(item.product.id)}
                onDecrease={() => decrease(item.product.id)}
              />
              <TouchableOpacity className="p-2" onPress={() => remove(item.product.id)}>
                <Ionicons name="trash-outline" size={20} color="#EF4444" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View className="mb-6 mt-5 rounded-2xl border border-gray-100 bg-white p-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-900">Subtotal</Text>
            <Text className="font-medium text-gray-900">{formatPrice(subtotal)}</Text>
          </View>
          <View className="mt-3 flex-row justify-between">
            <Text className="text-gray-900">Delivery</Text>
            <Text className="font-medium text-gray-900">{deliveryText}</Text>
          </View>

          {
            delivery > 0 && (
              <Text className="mt-2 text-xs text-primary">
                  Add {formatPrice(FREE_DELIVERY_OVER - subtotal)} more for free delivery
              </Text>
            )
          }

          <View className="my-4 h-px bg-gray-100" />
          <View className="flex-row justify-between">
            <Text className="text-lg font-bold text-gray-900">Total</Text>
            <Text className="text-lg font-bold text-gray-900">{formatPrice(total)}</Text>
          </View>
        </View>
      </ScrollView>


        <View className="border-t border-gray-100 bg-white px-5 py-5">
          <Button title="Checkout" onPress={()=>{}}/>
        </View>

    </Screen>
  );
}