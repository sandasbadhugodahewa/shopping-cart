import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { useAuthStore } from "@/store/authStore";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {

  const user = useAuthStore((state) => state.user);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const visibleProduct = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });


  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <View className="px-5 pt-4">
        <Text className="text-base text-gray-500">Hello, Demo</Text>
        <Text className="mt-1 text-3x1 font-bold text-gray-900">Find your products</Text>
      </View>

      <View className="mx-5 mt-5 flex-row items-center rounded-2xl border border-gray-200 bg-white px-4">
        <Ionicons name="search-outline" size={20} />
        <TextInput
          placeholder="Search products"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}
      >
        {
          categories.map((name) => {
            let boxClass = "mr-3 rounded-full border border-gray-200 bg-white px-5 py-2";
            let textClass = "font-medium text-gray-700";

            if (name === category) {
              boxClass = "mr-3 rounded-full border border-primary bg-primary px-5 py-2";
              textClass = "font-medium text-white";
            }

            return (
              <TouchableOpacity key={name} className={boxClass} onPress={() => setCategory(name)}>
                <Text className={textClass}>{name}</Text>
              </TouchableOpacity>
            );
          })
        }


      </ScrollView>


      <View className="flex-row flex-wrap px-3 pb-6 pt-2">
        {
          visibleProduct.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </View>

      {
        visibleProduct.length === 0 && (
          <View className="items-center px-10 pb-16">
            <Text className="mt-3 text-lg font-semibold text-gray-900">No products found</Text>
            <Text className="mt-1 text-center text-gray-500">Try a different word or category.</Text>
          </View>
        )
      }


    </ScrollView>
  );
}

