import { useLocalSearchParams } from "expo-router";
import { Text, View,FlatList } from "react-native";
import orders from "@/assets/data/orders";
import { Stack } from "expo-router";
import OrderListItem from "@/src/components/OrderListItem";
import OrderItemListItem from "@/src/components/OrderItemListItem";
export default function OrderDetailsScreen() {
  const { id } = useLocalSearchParams();
  const order = orders.find((o) => o.id.toString() === id);

  if (!order) {
    return <Text>Order not found!</Text>;
  }
  return (
    <View className="p-2">
      <Stack.Screen options={{ title: `Order #${id}` }} />
      {/* <Text>Order Details:{id}</Text> */}
      <OrderListItem order={order}/>
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
}
