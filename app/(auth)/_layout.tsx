import { View, Text, KeyboardAvoidingView, Platform, ScrollView, Dimensions, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { images } from '@/constants'

export default function _layout() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <ScrollView className='bg-white h-full' keyboardShouldPersistTaps='handled'>
                <View className='w-full relative' style={{ height: Dimensions.get('screen').height / 2.25 }}>
                    <ImageBackground source={images.loginGraphic} className='size-full rounded-lg' resizeMode="stretch" />
                    <Image source={images.logo} className='self-center size-48 absolute -bottom-16 z-10' />
                </View>
                <Slot />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}