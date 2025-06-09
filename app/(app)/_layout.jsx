import { View, Text } from 'react-native'
import React from 'react'

export default function _layout() {
  return (
    <View>
      <Slot screenOptions={{headerShown:false}}/>
    </View>
  )
}