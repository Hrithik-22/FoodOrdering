import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "@/assets/data/products";
import { DefaultPizzaImage } from "@/src/components/ProductListItem";
import Button from "@/src/components/Button";
import { useCart } from "@/src/providers/CartProvider";
import { PizzaSize } from "@/src/types";
const sizes:PizzaSize[] = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const [selectedSize, setSelectedSize] = useState<PizzaSize>("M");
  const { id } = useLocalSearchParams();
  const {addItem}=useCart();
  const product = products.find((p) => p.id.toString() === id);
  const addToCart = () => {
    // console.warn("Adding product  with size:", selectedSize);
    if(!product){
      return;
    }
    addItem(product,selectedSize);
  };
  // if product is not found(undefined)
  if (!product) {
    return <Text>Product not Found</Text>;
  }
  return (
    <View className="bg-white flex-1 p-3">
      <Stack.Screen options={{ title: `${product.name}` }} />
      <Image
        className="aspect-square  max-w-full"
        resizeMode="contain"
        source={{ uri: product.image || DefaultPizzaImage }}
      />
      <Text>Select Size</Text>
      <View className="flex-row justify-around my-2">
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            key={size}
            className={`${
              selectedSize === size ? "bg-slate-200" : "bg-white"
            }  w-12 aspect-square rounded-3xl justify-center items-center `}
          >
            <Text
              className={`${
                selectedSize === size ? "text-black" : "text-slate-400"
              } text-xl font-semibold`}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text className="text-xl font-bold mt-auto">${product.price}</Text>
      <Button text="Add to Cart" onPress={addToCart} />
    </View>
  );
};

export default ProductDetailsScreen;
