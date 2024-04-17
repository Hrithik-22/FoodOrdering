import { FlatList, View } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
// const product = products[0];

export default function MenuScreen() {
  return (
    // <View>
    //   <ProductListItem product={products[0]} />
    // </View>
    <View>
      <FlatList
        data={products}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        renderItem={({ item }) => <ProductListItem product={item} />}
      />
    </View>
  );
}
