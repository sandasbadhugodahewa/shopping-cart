import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="px-5 pt-5">
        <Text className="text-3xl font-bold text-gray-900">My Cart</Text>
        <Text className="mt-1 text-base text-gray-500">Your cart is empty</Text>
      </View>
    </SafeAreaView>
  );
}