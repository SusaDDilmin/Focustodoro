import { View, Text , ActivityIndicator } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';


export default function LoadingPage() {
  return (
    <View className="flex-1 bg-white justify-center items-center" >
        <LottieView style={{ width: 300, height: 300 }} source={require('../assets/images/LoadingDots.json')} autoPlay loop speed={0.5} />
    </View>
  )
}