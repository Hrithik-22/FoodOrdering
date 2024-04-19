import { View, Text,TextInput } from 'react-native'
import { useState } from 'react';
import { Stack,Link } from 'expo-router';
import Button from '@/src/components/Button';

const SignUp = () => {
    const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
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
        secureTextEntry
        className="bg-white rounded-md p-2 mt-1 mb-5"
      />
      <Button text="Create account"  />
      <Link href="/sign-in" className="text-center text-tintColorLight font-medium text-xl" >
        Sign In
      </Link>
    </View>
  )
}

export default SignUp; 