import { Stack } from "expo-router";
import "../global.css";
import { useAuthStore } from "../store/authStore";

export default function RootLayout() {

  const user = useAuthStore((state) => state.user);
  const isLoginIn = user !== null;
  //const isLoginIn = true;

  return <Stack
    screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#FFFFFF" } }}>

    <Stack.Protected guard={isLoginIn}>
      <Stack.Screen name="(tabs)" />
    </Stack.Protected>

    <Stack.Protected guard={!isLoginIn}>
      <Stack.Screen name="(auth)" />
    </Stack.Protected>


  </Stack>;
}
