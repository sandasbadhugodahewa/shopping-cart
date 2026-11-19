import { Text, TouchableOpacity } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
    variant?: "primary" | "outline";
}

export default function Button({ title, onPress, variant = "primary" }: Props) {
    let boxClass = "items-center rounded-xl bg-primary py-4";
    let textClass = "text-base font-semibold text-white";

    if (variant === "outline") {
        boxClass = "items-center rounded-xl border border-gray-200 bg-white py-4";
        textClass = "text-base font-semibold text-gray-900";
    }

    return (
        <TouchableOpacity className={boxClass} onPress={onPress} activeOpacity={0.8}>
            <Text className={textClass}>{title}</Text>
        </TouchableOpacity>
    );
}