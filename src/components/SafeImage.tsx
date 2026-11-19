import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { DimensionValue, Image, View } from "react-native";

type Props = {
    uri: string;
    color: string;
    width: DimensionValue;
    height: number;
}

export default function SafeImage({ uri, color, width, height }: Props) {
    const [failed, setFaild] = useState(false);

    return (
        <View style={{ width: width, height: height, backgroundColor: color }}>

            {failed === false && (

                <Image
                    source={{ uri: uri }}
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="cover"
                    onError={() => setFaild(true)} />
            )}

            {failed && (
                <View className="flex-1 items-center justify-center">
                    <Ionicons name="image-outline" />
                </View>
            )}

        </View>
    );
}