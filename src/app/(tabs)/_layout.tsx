import { useAuthStore } from "@/store/authStore";
import { useCartStore } from "@/store/useCartStore";
import { getItemCount } from "@/utils/format";
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { ColorValue } from "react-native";

type IconName = keyof typeof Ionicons.glyphMap;

function TabIcon({ name, color, focused, size }:
  { name: IconName; color: ColorValue; focused: boolean; size: number }) {

  return <Ionicons name={name} size={size} color={color?.toString()} />

}


export default function TabLayout() {

  const user = useAuthStore((state) => state.user);
  const items = useCartStore((state) => state.items);
  const cartCount = getItemCount(items);

  let cartBadge: number | undefined = undefined;
  if (cartCount > 0) {
    cartBadge = cartCount;
  }

  if (user == null) {
    return <Redirect href="/login" />
  }


  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4F46E5",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarStyle: { backgroundColor: "#FFFFFF" },
        sceneStyle: { backgroundColor: "#FFFFFF" }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) =>
            <TabIcon name="home-outline" focused={focused} color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size, focused }) =>
            <TabIcon name="heart-outline" focused={focused} color={color} size={size} />
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarBadge: cartBadge,
          tabBarBadgeStyle: {backgroundColor: "#4F46E5"},
          tabBarIcon: ({ color, size, focused }) =>
            <TabIcon name="cart-outline" focused={focused} color={color} size={size} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) =>
            <TabIcon name="person-outline" focused={focused} color={color} size={size} />
        }}
      />
    </Tabs>
  );
}
