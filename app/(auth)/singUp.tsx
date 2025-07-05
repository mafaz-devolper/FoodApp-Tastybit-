import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@react-navigation/elements'
import { router } from 'expo-router'

const singUp = () => {
  return (
    <View>
      <Text>singUp</Text>
      <Button onPress={() => router.push("/(auth)/signIn")}>Sign In</Button>
    </View>
  )
}

export default singUp