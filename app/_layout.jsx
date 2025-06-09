import { View, Text, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import '../global.css'
import { Slot } from 'expo-router'
import * as Notifications from 'expo-notifications';


export default function _layout() {
  Notifications.setNotificationHandler({
    handleNotification:async()=>({
      shouldShowBanner:true,
      shouldPlaySound:true,
      shouldSetBadge:false,
    })
  })

  useEffect(()=>{
    const requestPermissions = async()=>{
      const {status} = await Notifications.requestPermissionsAsync();
      if(status!=='granted'){
        alert('Permission for notifications not granted');
      }
    }
    requestPermissions();
  }, [])

  return (
    <View className="flex-1 bg-amber-800">
      <StatusBar style="light"/>
      <Slot screenOptions={{headerShown:false}}/>
    </View>
  )
}