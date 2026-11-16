import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthStore } from "../../store/authStore";

export default function ProfileScreen() {

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state)=> state.logout);

  let name = "";
  let email = "";
  let initial = "";

  if(user != null){
    name = user.name;
    email = user.email;
    initial = user.name.charAt(0).toUpperCase();
  }

  function handleLogout(){
    logout();
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="px-5 pt-4">
        <Text className="text-3xl font-bold text-gray-900">Profile</Text>

        <View className="mt-6 flex-row items-center rounded-2xl border border-gray-100 bg-white p-4">
          <View className="h-16 w-16 items-center justify-center rounded-full bg-primary">
            <Text className="text-2xl font-bold text-white">{initial}</Text>
          </View>
          <View className="ml-4 flex-1">
            <Text className="text-xl font-bold text-gray-900">{name}</Text>
            <Text className="mt-1 text-gray-500">{email}</Text>
          </View>
        </View>

        <TouchableOpacity className="mt-6 items-center rounded-xl border border-gray-200 py-4" onPress={handleLogout}>
          <Text className="text-base font-semibold text-gray-900">Logout</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
