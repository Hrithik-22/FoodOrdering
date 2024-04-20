import { useLocalSearchParams } from "expo-router";
import { Text, View,FlatList,Pressable } from "react-native";
import orders from "@/assets/data/orders";
import Colors from "@/src/constants/Colors";
import { Stack } from "expo-router";
import OrderListItem from "@/src/components/OrderListItem";
import { OrderStatusList } from "@/src/types";
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
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        contentContainerStyle={{ gap: 10 }}
        ListHeaderComponent={()=><OrderListItem order={order}/>}
        ListFooterComponent={()=>(<>
          <Text style={{ fontWeight: 'bold' }}>Status</Text>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            {OrderStatusList.map((status) => (
              <Pressable
                key={status}
                onPress={() => console.warn('Update status')}
                style={{
                  borderColor: Colors.light.tint,
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 5,
                  marginVertical: 10,
                  backgroundColor:
                    order.status === status
                      ? Colors.light.tint
                      : 'transparent',
                }}
              >
                <Text
                  style={{
                    color:
                      order.status === status ? 'white' : Colors.light.tint,
                  }}
                >
                  {status}
                </Text>
              </Pressable>
            ))}
          </View>
        </>
        )}
      />
    </View>
  );
}
