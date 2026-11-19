import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
    children: ReactNode;
    bottom?: boolean;
}

export default function Screen({ children, bottom }: Props) {
    let edges: ("top" | "bottom")[] = ["top"]
    if(bottom === true){
        edges = ["top", "bottom"];
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF"}} edges={edges}>
            {children}
        </SafeAreaView>
    );    

}