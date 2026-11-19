import { Text, View } from "react-native";

type Props = {
    text: string;
    color: "green" | "blue" | "red";
}

export default function Badge({ text, color }: Props) {
    let boxClass = "bg-green-100";
    let textClass = "text-green-700";

    if (color === "blue") {
        boxClass = "bg-blue-100";
        textClass = "text-blue-700";
    }
    
    if (color === "red") {
        boxClass = "bg-red-100";
        textClass = "text-red-700";
    }
    
    return (
        <View className={"px-3 py-1 rounded-full "+boxClass}>
            <Text className={"text-xs font-semibold "+textClass}>{text}</Text>
        </View>
    );
}