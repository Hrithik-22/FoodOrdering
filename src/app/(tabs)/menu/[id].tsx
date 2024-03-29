import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="bg-yellow-400">
      <Stack.Screen options={{ title: `Details:${id}` }} />
      <Text className="text-xl bg-red-600">ProductDetailsScreen : {id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;
