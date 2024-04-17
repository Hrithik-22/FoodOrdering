import { View, Text,TextInput,Image } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router';
import Button from '@/src/components/Button'
import { DefaultPizzaImage } from '@/src/components/ProductListItem';
import Colors from '@/src/constants/Colors';
import * as ImagePicker from 'expo-image-picker';
const createProductScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const [name,setName]=useState('');
  const [price,setPrice]=useState('');
  const [errors,setErrors]=useState('');
  const resetFields=()=>{
    setName('');
    setPrice('');
  }

  const validateInput=()=>{
    setErrors('');
    if(!name){
      setErrors('Name is required');
      return false;
    }
    if(!price){
      setErrors('Price is required');
      return false;
    }
    if(isNaN(parseFloat(price))){
      setErrors('Price is not a Number');
      return false;
    }
    return true;
  };
  const onCreate=()=>{
    if(!validateInput()){
      return;
    }
    console.warn("Creating Product");
    // save in the database
    resetFields();

  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View className='flex-1 justify-center p-3'>
      <Stack.Screen options={{title:"Create Product"}}/>
      <Image className='w-3/5 aspect-square self-center' source={{uri: image ||DefaultPizzaImage}}/>
      <Text onPress={pickImage} className='self-center font-bold my-4' style={{color:Colors.light.tint}}>Select Image</Text>
      <Text className='text-slate-400 text-xl' >Name</Text>
      <TextInput value={name} onChangeText={setName} placeholder='Margarita..' className='bg-white rounded-md p-2 mt-1 mb-5'/>
      <Text className='text-slate-400 text-xl' >Price ($)</Text>
      <TextInput value={price} onChangeText={setPrice} keyboardType='numeric' placeholder='9.99$' className='bg-white rounded-md p-2 mt-1 mb-5'/>
      <Text className='text-red-700'>{errors}</Text>
      <Button text="Create" onPress={onCreate}/>
    </View>
  )
}

export default createProductScreen