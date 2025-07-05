import { Button } from '@react-navigation/elements'
import { router } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const signIn = () => {
  return (
    <View>
      <Text>SingIn</Text>
      <Button onPress={() => router.push("/(auth)/singUp")}>Sign Up</Button>
    </View>
  )
}

export default signIn