import { View, Text } from 'react-native'
import React, { useState } from 'react'
import '../../global.css'
import Tasks from '../../components/tasks'

export default function Home() {

  return (
    <View className="pt-10 flex flex-col">
      <Tasks/>
    </View>
  )
}