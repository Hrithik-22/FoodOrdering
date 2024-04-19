import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import orders from "@/assets/data/orders";
import { Stack } from "expo-router";
export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();
  const order = orders.find((o) => o.id.toString() === id);

  if (!order) {
    return <Text>Order not found!</Text>;
  }
  return (
    <View>
      <Stack.Screen options={{ title: `Order #` }} />
      <Text>Order Details:{id}</Text>
    </View>
  );
}
