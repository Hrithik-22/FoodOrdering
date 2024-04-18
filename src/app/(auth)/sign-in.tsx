import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const SigIN = () => {
  return (
    <View className=" flex-1 justify-center">
      <Stack.Screen options={{ title: "Sign in" }} />

      <Text>sign-in</Text>
    </View>
  );
};

export default SigIN;
