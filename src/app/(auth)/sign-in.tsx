import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import Button from "@/src/components/Button";
const SigIN = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className=" flex-1 justify-center p-5 bg-slate-200">
      <Stack.Screen options={{ title: "Sign in" }} />

      <Text className="text-slate-400 text-xl">Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="john@gmail.com"
        className="bg-white rounded-md p-2 mt-1 mb-5"
      />
      <Text className="text-slate-400 text-xl">Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="******"
        className="bg-white rounded-md p-2 mt-1 mb-5"
      />
      <Button text="Sign in" />
      <Link
        href="/signup"
        className="text-center text-tintColorLight font-medium text-xl"
      >
        Create an account
      </Link>
    </View>
  );
};

export default SigIN;
