import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function index() {
  const router = useRouter();
  return (
    <View className="pt-10 flex-col">
      <View className ="pt-16 shadow"> 
      <Text className="text-white text-center font-bold text-6xl ">My Tasks</Text>
      </View>
      <View className="mt-44">
        <TouchableOpacity className="bg-zinc-500 p-5 mx-10 rounded-3xl" onPress={()=>router.replace('../(app)/index.jsx')}>
          <Text className="text-center text-white text-6xl font-semibold">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}