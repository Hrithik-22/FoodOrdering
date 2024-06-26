import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import products from "@/assets/data/products";
import { DefaultPizzaImage } from "@/src/components/ProductListItem";
import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/src/constants/Colors";
const sizes: PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { addItem } = useCart();
  const product = products.find((p) => p.id.toString() === id);
  const addToCart = () => {
    if (!product) {
      return <Text>Product not Found</Text>;
    }
    // console.warn("Adding product  with size:", selectedSize);
    addItem(product, selectedSize);
    router.push("/cart");
  };
  // if product is not found(undefined)
  if (!product) {
    return <Text>Product not Found</Text>;
  }
  return (
    <View className="bg-white flex-1 p-3">
      <Stack.Screen
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href={`/(admin)/menu/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="pencil"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen options={{ title: `${product.name}` }} />
      <Image
        className="aspect-square  max-w-full"
        resizeMode="contain"
        source={{ uri: product.image || DefaultPizzaImage }}
      />

      <Text className="text-2xl font-bold ">${product.name}</Text>

      <Text className="text-xl  font-medium ">${product.price}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
