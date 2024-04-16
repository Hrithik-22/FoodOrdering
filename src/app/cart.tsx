import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, View, FlatList, Text } from "react-native";
import { useCart } from "@/src/providers/CartProvider";
import CartListItem from "../components/CartListItem";
import Button from "../components/Button";
const CartScreen = () => {
  const { items, total } = useCart();
  return (
    <View className="p-10">
      {/* <Text>CartScreen length: {items.length}</Text> */}
      <FlatList
        data={items}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
      <Text className="mt-5 text-xl font-bold">Total: ${total}</Text>
      <Button text="Checkout" />
      <StatusBar style={Platform.OS === "android" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
