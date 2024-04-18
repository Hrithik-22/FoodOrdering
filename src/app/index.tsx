import { View, Text } from "react-native";
import React from "react";
import Button from "../components/Button";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex-1 justify-center p-2">
      <Link href={"/(auth)/sign-in"} asChild>
        <Button text="Sign in" />
      </Link>
      <Link href={"/(admin)"} asChild>
        <Button text="Admin" />
      </Link>
      <Link href={"/(user)"} asChild>
        <Button text="User" />
      </Link>
    </View>
  );
};

export default index;
