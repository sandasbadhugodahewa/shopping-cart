import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Button from "./Button";

type Props = {
    icon: keyof typeof Ionicons.glyphMap;
    title: string;
    message: string;
    buttonTitle?: string;
    onButtonPress?: () => void;
}


export default function EmptyState({ icon, title, message, buttonTitle, onButtonPress }: Props) {
    return (
        <View className="flex-1 items-center justify-center px-10">
            <View className="h-24 w-24 items-center justify-center rounded-full bg-primary-light">
                <Ionicons name={icon} size={40} color="#4F46E5"/>
            </View>
            <Text className="mt-6 text-xl font-bold text-gray-900">{title}</Text>
            <Text className="mb-6 mt-2 text-center text-base text-gray-500">{message}</Text>
            {
                buttonTitle !== undefined && onButtonPress !== undefined && (
                    <View className="self-stretch">
                        <Button title={buttonTitle} onPress={onButtonPress}/>
                    </View>
                )
            }
        </View>
    );
} 