import CustomButton from '@/components/CustomButton'
import Custominput from '@/components/Custominput'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'


const signIn = () => {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const submit = async () => {
    if (!form.email || !form.password) return Alert.alert('Error', 'Please enter valid email and password')

    setIsSubmitting(true)
    try {
      Alert.alert('Success', 'You have successfully signed in');
      router.replace('/');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong, please try again later')
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>
      <Custominput
        placeholder='Enter your email'
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label='Email'
        keyboardType='email-address'
      />
      <Custominput
        placeholder='Enter your password'
        value={form.password}
        onChangeText={(text) => setForm((prev) => ({ ...prev, password: text }))}
        label='Password'
        secureTextEntry={true}
      />
      <CustomButton
        title='Sign In'
        isLoading={isSubmitting}
        onPress={submit}
      />
      <View className='flex justify-center mt-5 flex-row gap-2'>
        <Text className='base-regular text-gray-100'>Don't have an account?</Text>
        <Link href='/singUp' className='text-primary base-bold'>
          Sign Up
        </Link>
      </View>
    </View>
  )
}

export default signIn