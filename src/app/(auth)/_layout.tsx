import { useAuthStore } from "@/store/authStore";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {

    const user = useAuthStore((state) => state.user);

    if(user !== null){
        return <Redirect href="/" />
    }

    return <Stack
        screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "#FFFFFF" },
            animation: "fade"
        }} />
}