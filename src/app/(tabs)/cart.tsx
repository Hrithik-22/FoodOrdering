import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform,View,Text } from "react-native";
import { useCart } from "@/src/providers/CartProvider";
const CartScreen = () => {
  const {items}=useCart();
  return (
    <View>
      <Text>CartScreen length: {items.length}</Text>
      <StatusBar style={Platform.OS === "android" ? "light" : "auto"} />

    </View>
  );
};

export default CartScreen;
