import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF"}}>
      <View className="px-5 pt-4">
        <Text className="text-base text-gray-500">Hello, Demo</Text>
        <Text className="mt-1 text-3x1 font-bold text-gray-900">Find your products</Text>
      </View>
    </SafeAreaView>
  );
}

