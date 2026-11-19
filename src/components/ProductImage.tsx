import { View } from "react-native";
import SafeImage from "./SafeImage";


type Props ={
    uri: string;
    color: string;
    height: number;
}

export default function ProductImage({uri, color, height}: Props){
    return (
        <View className="overflow-hidden rounded-2xl">
            <SafeImage uri={uri} color={color} width="100%" height={height}/>
        </View>
    );
}