import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';

export default function Priority({priority, setPriority}) {
  return (
    <View>
      <Text className=" text-white font-semibold text-2xl">Priority</Text>
          <View className="mt-3 p-4 border-4 border-black bg-white h-24 flex-row rounded-xl justify-between px-10">
            <View className=" items-center gap-1 flex-col justify-center">
              <Text className="font-bold text-xl">High</Text>
              <TouchableOpacity onPress={()=>setPriority('High')} >
                <Fontisto name={priority==='High'?"radio-btn-active":'radio-btn-passive'} size={25} color="black" className="h-10" />
              </TouchableOpacity>
            </View>
            <View className="items-center gap-1 flex-col justify-center">
              <Text className="font-bold text-xl text-center">Medium</Text>
              <TouchableOpacity onPress={()=>setPriority('Medium')}>
                <Fontisto name={priority==='Medium'?"radio-btn-active":'radio-btn-passive'} size={25} color="black" className="h-10"/>
              </TouchableOpacity>
            </View>
            <View className="items-center gap-1 flex-col justify-center">
              <Text className="font-bold text-xl text-center">Low</Text>
              <TouchableOpacity onPress={()=>setPriority('Low')}>
                <Fontisto name={priority==='Low'?"radio-btn-active":'radio-btn-passive'} size={25} color="black" className="h-10"/>
              </TouchableOpacity>
            </View>
            
          </View>
    </View>
  )
}