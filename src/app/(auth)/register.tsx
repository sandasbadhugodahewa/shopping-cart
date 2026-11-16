import { useAuthStore } from "@/store/authStore";
import { Link } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RegisterScreen() {

    const register = useAuthStore((state) => state.register);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");


    function handleRegister(){
        if(name.trim() === ""){
            setError("Please enter your name");
            return;
        }

        if(email.includes("@") === false){
            setError("Please enter a valid email");
        }

        if(password.length < 4){
            setError("Password must be at least 4 characters");
            return;
        }

        if(password !== confirmPassword){
            setError("Password do not match");
            return;
        }

        const message = register(name,email,password);
        setError(message);

    }

    return (
        <ScrollView 
        className="bg-white"
        contentContainerStyle={{flexGrow: 1, justifyContent: "center", padding: 20}}
        >
            <Text className="text-4xl font-bold text-gray-900">Create account</Text>
            <Text className="mb-8 mt-2 text-base text-gray-500">Register to start shopping</Text>

            <Text className="mb-2 font-medium text-gray-800">Full Name</Text>
            <TextInput
                className="mb-4 rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900"
                placeholder="Your name"
                placeholderTextColor="#6b7280"
                value={name}
                onChangeText={setName}
            />

            <Text className="mb-2 font-medium text-gray-800">Email</Text>
            <TextInput
                className="mb-4 rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900"
                placeholder="your@example.com"
                placeholderTextColor="#6b7280"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <Text className="mb-2 font-medium text-gray-800">Password</Text>
            <TextInput
                className="mb-4 rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900"
                placeholder="Your password"
                placeholderTextColor="#6b7280"
                secureTextEntry={true}
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
            />

            <Text className="mb-2 font-medium text-gray-800">Confirm Password</Text>
            <TextInput
                className="mb-4 rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-gray-900"
                placeholder="Retype your password"
                placeholderTextColor="#6b7280"
                secureTextEntry={true}
                autoCapitalize="none"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />

            {error !== "" && <Text className="mt-4 text-sm text-red-500">{error}</Text>}

            <TouchableOpacity className="items-center rounded-xl bg-primary py-4" onPress={handleRegister}>
                <Text className="text-base font-semibold text-white">Register</Text>
            </TouchableOpacity>

            <View className="mt-4 flex-row justify-center">
                <Text className="text-gray-500">Already have an account? </Text>
                <Link href="/login" className="font-semibold text-primary">Login</Link>
            </View>

        </ScrollView>
    );
}