import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { AuthType, useAuth } from '@/store/useAuth'
import { Button } from 'native-base';
import { router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as SecureStore from 'expo-secure-store'

const Index = () => {

  const logout = useAuth((state: AuthType) => state.logout);

  return (
    <View className='flex-1 mx-4 mt-3'>
      <View className='flex-row items-center justify-between'>
        <Ionicons onPress={() => {router.back();}} name='arrow-back' size={20} />
        <Text className='text-xl text-rose-600 font-signika'>Profile</Text>
        <Ionicons name='notifications-circle' size={22} />
      </View>

      <View className='flex-1 bg-slate-100 my-4 rounded-xl'>
        <ScrollView>

          <View className='items-end p-2'>
            <Text className='text-end font-signika'>Docter ID - GP2TRT</Text>
          </View>

          <View className='flex-row'>
            <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
              className='w-[120px] h-[150px] ml-3 rounded-lg object-cover'
            />

            <View className='gap-y-2 ml-3 mt-3'>
              <Text className='text-xl font-signika'>Dr. Nigga Waria</Text>
              <Text className='font-signika'>MBBS,Surgeon</Text>

              <View className='flex-row gap-x-4'>
                <View className='bg-zinc-200 w-[80px] h-[60px] rounded-xl'>
                  <Text className='text-[13px] font-signika ml-2 mt-2'>Patients</Text>

                  <View className='ml-2 mt-2 flex-row items-center'>
                    <Ionicons name='people' size={15} color={'red'} />
                    <Text className='text-[12px] font-signika ml-1'>1500+</Text>
                  </View>

                </View>

                <View className='bg-zinc-200 w-[80px] h-[60px] rounded-xl'>

                  <Text className='text-[13px] font-signika ml-2 mt-2'>Experiance</Text>

                  <View className='ml-2 mt-2 flex-row items-center'>
                    <Ionicons name='lock-closed' size={15} color={'red'} />
                    <Text className='text-[12px] font-signika ml-1'>13 Years</Text>
                  </View>
                </View>

              </View>
            </View>
          </View>

          <Text className='font-signika ml-5 mt-4 text-xl text-rose-500'>Biography</Text>
          <View className='w-[90%] h-[200px] bg-white mx-5 mt-3 rounded-xl p-4'>
            <Text className='text-[14px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..
            </Text>
          </View>

          <View className='w-[90%] h-auto bg-white mx-5 mt-2 rounded-xl p-5 shadow-2xl mb-4'>
            <View className='flex-row gap-x-5 mb-4 items-center'>
              <Ionicons name='star' size={20} />
              <Text className='font-signika text-xl'>Read Reviews</Text>
            </View>
            <View className='flex-row gap-x-5 mb-4 items-center'>
              <Ionicons name='share-social' size={20} />
              <Text className='font-signika text-xl'>Share with Friends</Text>
            </View>
            <View className='flex-row gap-x-5 mb-4 items-center'>
              <Ionicons name='lock-closed' size={20} />
              <Text className='font-signika text-xl'>Privacy Policy</Text>
            </View>
            <Pressable onPress={async () => {  await SecureStore.deleteItemAsync('token').then(() => {logout(); router.push('/') ;}); }} className='flex-row gap-x-5 mb-4 items-center'>
              <Ionicons name='log-out-outline' size={20} />
              <Text className='font-signika text-xl'>Logout</Text>
            </Pressable>
          </View>
        </ScrollView>

      </View>


    </View>

  )
}

export default Index