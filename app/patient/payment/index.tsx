import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import { StyledText, StyledView } from '@/constants/nativeComps'
import Ionicons from '@expo/vector-icons/Ionicons'
import useDoc from '@/store/useDoc'
import { Divider,Button } from 'native-base'
import { router } from 'expo-router'

const Index = () => {

  const data = useDoc((state: any) => { return state.data });

  return (
    <View className='flex-1'>
      <ScrollView>

        <StyledView className='flex-row items-center justify-center gap-x-3'>
          <Ionicons name='time-outline' size={18} color={'red'}>
          </Ionicons>
          <Text className='text-[14px] font-signika'>10:00</Text>
          <Ionicons name='calendar-outline' size={18} color={'red'}>
          </Ionicons>
          <Text className='text-[14px] font-signika'>Mon 12</Text>
        </StyledView>

        <Pressable className='my-[20px] mx-4'>
          <StyledView className='flex-row items-center h-[150px] rounded-2xl mb-2 bg-white'>
            <Image source={{ uri: data.image }}
              className='w-[120px] h-[120px] object-contain rounded-2xl ml-[10px]'
            />
            <StyledView className='gap-y-3'>
              <Text className='ml-5 font-signika text-xl'>{data.name}</Text>
              <Text className='ml-5 font-signika text-[15px] text-zinc-500'>{data.degree}</Text>
              <Text className='ml-5 font-signika text-[15px] text-rose-500'>{data.experience}</Text>
            </StyledView>
          </StyledView>
        </Pressable>

        <StyledView className='mx-5 gap-y-2'>
          <View className='flex-row justify-between mx-2'>
            <Text className='font-signika'>Consultation Fee</Text>
            <Text className='text-red-600 font-bold'>100 $</Text>
          </View>
          <View className='flex-row justify-between mx-2'>
            <Text className='font-signika'>Tax & Charges</Text>
            <Text className='text-red-600 font-bold'>10.00 $</Text>
          </View>
          <Divider />
          <View className='flex-row justify-between mx-2'>
            <Text className='font-signika'>Total Amount</Text>
            <Text className='text-red-600 font-bold'>110.00 $</Text>
          </View>
        </StyledView>

        <StyledView className='mx-4 my-6'>
          <Text className='font-signika text-lg text-rose-700'>Select Payment Method</Text>

          <View className='my-3'>
            <Text className='text-[14px] font-signika mb-2'>We Accept</Text>
            <Image source={require('@/assets/images/cc.png')} className='w-full h-[40px] object-cover' />
          </View>
        </StyledView>

        <StyledView className='mx-4 mb-[90px]'>
          <Text className='font-signika text-lg text-rose-700'>Options</Text>
          <View className='flex-row bg-zinc-100  w-full h-[40px] items-center justify-center my-2 rounded-xl'>
            <Text className='text-[16px] text-zinc-700 font-signika_bold'>Google pay</Text>
          </View>
          <View className='flex-row bg-zinc-100  w-full h-[40px] items-center justify-center my-2 rounded-xl'>
            <Text className='text-[16px] text-zinc-700 font-signika_bold'>Paypal</Text>
          </View>
          <View className='flex-row bg-zinc-100  w-full h-[40px] items-center justify-center my-2 rounded-xl'>
            <Text className='text-[16px] text-zinc-700 font-signika_bold'>Stripe</Text>
          </View>
          <View className='flex-row bg-zinc-100 w-full h-[40px] items-center justify-center my-2 rounded-xl'>
            <Text className='text-[16px] text-zinc-700 font-signika_bold'>Credit Card</Text>
          </View>


          <Button onPress={() => router.push('/patient/checkout')} className='my-4' colorScheme={'danger'}>Proceed Checkout</Button>
        </StyledView>

      </ScrollView>
    </View>
  )
}

export default Index