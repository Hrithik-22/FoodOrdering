import { Stack, Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/src/constants/Colors";
import { Pressable } from "react-native";
export default function MenuLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Orders" }} />
    </Stack>
  );
}
