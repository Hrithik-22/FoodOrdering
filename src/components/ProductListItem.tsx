import { Text, View, Image } from "react-native";
import { Product } from "../types";

export const DefaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View className=" bg-white p-4 rounded-2xl flex-1 max-w-[50%]">
      {/* aspect-ratio :1/1 */}
      <Image
        resizeMode="contain"
        source={{ uri: product.image || DefaultPizzaImage }}
        className="aspect-square  max-w-full"
      />
      <Text className="font-semibold text-xl my-10 ">{product.name}</Text>
      <Text className="text-tintColorLight font-bold">${product.price}</Text>
    </View>
  );
};

export default ProductListItem;
