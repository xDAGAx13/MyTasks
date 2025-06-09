import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import '../global.css'
import { Slot } from 'expo-router'


export default function _layout() {
  return (
    <View className="flex-1 bg-amber-800">
      <StatusBar style="light"/>
      <Slot screenOptions={{headerShown:false}}/>
    </View>
  )
}