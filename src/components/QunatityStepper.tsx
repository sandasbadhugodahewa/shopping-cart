import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}


export default function QuntityStepper({ quantity, onIncrease, onDecrease }: Props) {
    return (
        <View className="flex-row items-center rounded-full border border-gray-200">
            <TouchableOpacity className="h-9 w-9 items-center justify-center" onPress={onDecrease}>
                <Ionicons name="remove" size={18} color="#111827" />
            </TouchableOpacity>
            <Text className="w-8 text-center text-base font-semibold justify-center">{quantity}</Text>
            <TouchableOpacity className="h-9 w-9 items-center justify-center" onPress={onIncrease}>
                <Ionicons name="add" size={18} color="#111827" />
            </TouchableOpacity>
        </View>
    );
}