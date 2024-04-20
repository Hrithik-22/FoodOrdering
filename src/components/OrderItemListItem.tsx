import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import { OrderItem } from '../types';
import { DefaultPizzaImage } from './ProductListItem';

type OrderItemListItemProps = {
    item: OrderItem;
  };
const OrderItemListItem = ({item}:OrderItemListItemProps) => {
  return (
    <View className='bg-white rounded-xl p-2 flex-1 flex-row items-center'>
      <Image
        source={{ uri: item.products.image || DefaultPizzaImage }}
        className='w-28 aspect-square self-center mr-3'
        resizeMode="contain"
      />
      <View className='flex-1'>
        <Text className='font-medium text-base mb-2'>{item.products.name}</Text>
        <View className='flex-row gap-2'>
          <Text className='font-bold text-tintColorLight'>${item.products.price.toFixed(2)}</Text>
          <Text >Size: {item.size}</Text>
        </View>
      </View>
      <View className='flex-row gap-2 items-center my-4'>
        <Text className='font-semibold text-lg'>{item.quantity}</Text>
      </View>
    </View>
  )
}


export default OrderItemListItem