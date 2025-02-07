import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';


export default function TaskPage() {
  return (
    <View>
      <Text>TaskPage</Text>
      <LottieView source={require('../../assets/images/TomatoLoading.json')} />
    </View>
  )
}