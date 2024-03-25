import { Text, View, Image } from "react-native";

const ProductListItem = ({ product }) => {
  return (
    <View className=" bg-white p-10 rounded-2xl">
      {/* aspect-ratio :1/1 */}
      <Image source={{ uri: product.image }} className="aspect-square w-full" />
      <Text className="font-semibold text-xl my-10 ">{product.name}</Text>
      <Text className="text-tintColorLight font-bold">${product.price}</Text>
    </View>
  );
};

export default ProductListItem;
