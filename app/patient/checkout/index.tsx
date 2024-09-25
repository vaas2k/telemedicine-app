import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import { StyledView } from '@/constants/nativeComps'
import Ionicons from '@expo/vector-icons/Ionicons'
import useDoc from '@/store/useDoc'
import { Button } from 'native-base'
import { router } from 'expo-router'

const Index = () => {

  const data = useDoc((state: any) => { return state.data })
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


        <StyledView className='flex-row mx-4 items-center justify-center gap-x-[20px]'>
          <Button className='rounded-2xl bg-rose-50' variant={'ghost'} colorScheme={'danger'} leftIcon={<Ionicons name='close' size={18} color={'red'} />}>Cancel Booking</Button>
          <Button className='rounded-2xl bg-amber-50' variant={'ghost'} colorScheme={'amber'} leftIcon={<Ionicons name='calendar' size={18} color={'gold'} />}>Change Booking</Button>
        </StyledView>

        <StyledView className='mx-8 py-5'>
          <View className='flex-row items-center justify-center bg-green-100 w-full h-[80px] rounded-2xl'>
            <Text className='text-green-800 text-xl font-signika'>Booking Confirmed</Text>
          </View>
        </StyledView>

        <StyledView className='mx-8 mb-[90px]'>
          <Text className='text-lg font-signika'>Terms & Conditions</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua
            lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
          </Text>
         <Button onPress={() => router.push('/')} className='rounded-2xl bg-rose-50 my-7' variant={'ghost'} colorScheme={'danger'} leftIcon={<Ionicons name='home' size={18} color={'red'} />}>Go Home</Button>
        </StyledView>
      </ScrollView>

    </View>
  )
}

export default Index