import { Link } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuthStore } from "../../store/authStore";

export default function LoginScreen() {

    const login = useAuthStore((state) => state.login);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleLogin(){
        if(email.trim() === "" || password === ""){
            setError("Please enter your email and password");
            return;
        }

        const message = login(email, password);
        setError(message);
    }

    function fillDemoAccount(){
        setEmail("lakshan@app.com");
        setPassword("1234");
        setError("");
    }

    return (
        <View className="flex-1 justify-center bg-white px-6">
            <Text className="text-4xl font-bold text-gray-900">Welcome</Text>
            <Text className="mb-8 mt-2 text-base text-gray-500">Login to continue shopping</Text>

            <Text className="mb-2 font-medium text-gray-800">Email</Text>
            <TextInput
                className="mb-4 rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900"
                placeholder="your@example.com"
                placeholderTextColor="#6b7280"
                value={email}
                onChangeText={setEmail}
            />

            <Text className="mb-2 font-medium text-gray-800">Password</Text>
            <TextInput
                className="mb-4 rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900"
                placeholder="Your password"
                placeholderTextColor="#6b7280"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            {error !== "" && <Text className="mt-4 text-sm text-red-500">{error}</Text>}

            <TouchableOpacity className="items-center rounded-xl bg-primary py-4" onPress={handleLogin}>
                <Text className="text-base font-semibold text-white">Login</Text>
            </TouchableOpacity>

            <TouchableOpacity className="mt-4 items-center py-2" onPress={fillDemoAccount}>
                <Text className="font-medium text-primary">Use demo account</Text>
            </TouchableOpacity>


            <View className="mt-4 flex-row justify-center">
                <Text className="text-gray-500">Do not have an account? </Text>
                <Link href="/register" className="font-semibold text-primary">Register</Link>
            </View>

        </View>
    );
}