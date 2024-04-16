import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, View, FlatList } from "react-native";
import { useCart } from "@/src/providers/CartProvider";
import CartListItem from "../components/CartListItem";
const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      {/* <Text>CartScreen length: {items.length}</Text> */}
      <FlatList
        data={items}
        contentContainerStyle={{ padding: 10, gap: 10 }}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />
      <StatusBar style={Platform.OS === "android" ? "light" : "auto"} />
    </View>
  );
};

export default CartScreen;
