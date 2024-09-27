import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const Index = () => {


  const visitors = [
    {
      date: 12,
      vis: 20
    },
    {
      date: 13,
      vis: 0
    },
    {
      date: 14,
      vis: 5
    },
    {
      date: 15,
      vis: 7
    },
    {
      date: 16,
      vis: 15
    },
    {
      date: 17,
      vis: 12
    },
    {
      date: 18,
      vis: 18
    },

  ]
  return (
    <View className='flex-1 mx-4 mt-2'>
      <View className='my-4'>
        <Text className='font-signika text-[16px]'>Good Morning,</Text>
        <Text className='text-rose-500 font-signika text-4xl'>Dr. Mike</Text>
      </View>

      <View className='gap-y-2'>

        <Pressable onPress={()=> {router.push('/docter/newpatient')}} className='flex-row bg-zinc-100 p-3 rounded-xl '>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            className='w-[60px] h-[60px] rounded-xl'
          />

          <View className='ml-3 gap-y-2'>
            <Text className='font-signika font-bold'>Anita Doe</Text>
            <View className='flex-row items-center gap-x-2'>
              <Ionicons name='time-outline' size={18} color={'red'} />
              <Text className='font-signika'>Today, 10:00 - 11:00</Text>
            </View>
          </View>

        </Pressable>

        <View className='flex-row bg-zinc-100 p-3 rounded-xl '>
          <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            className='w-[60px] h-[60px] rounded-xl'
          />

          <View className='ml-3 gap-y-2'>
            <Text className='font-signika font-bold'>Jane Doe</Text>
            <View className='flex-row items-center gap-x-2'>
              <Ionicons name='time-outline' size={18} color={'red'} />
              <Text className='font-signika'>Tommorow, 11:00 - 12:00</Text>
            </View>
          </View>

        </View>

      </View>

      <Text className='text-xl font-signika mt-3 text-rose-600'>Visitors Stats</Text>
      <View className='h-[200px] bg-zinc-100 rounded-xl my-3 flex-row items-end'>
        <View className='flex-col items-start justify-evenly h-full ml-2'>
          <Text>20+</Text>
          <Text>15</Text>
          <Text>5</Text>
          <Text>0</Text>
        </View>

        {visitors.map((item, index) => {
          // Calculate percentage-based height for the bar
          const vis = item.vis;
          const per = Math.round((vis / 20) * 74);

          return (
            <View
              key={index}
              style={{ height: `${vis != 0 ? per : 10}%` }}
              className='bg-rose-300 w-[30px] mb-[26px] rounded-xl ml-[15px] items-center justify-center'>
              <Text className='font-signika text-white'>{item.date}</Text>
            </View>
          );
        })}
      </View>

      <Text className='text-xl font-signika text-rose-600'>Recent Visits</Text>
      <View className='my-2 flex-row gap-x-3'>
        <Image source={{uri : 'https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
        className='w-[60px] h-[60px] rounded-full'
        />
        <Image source={{uri : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
        className='w-[60px] h-[60px] rounded-full'
        />
        <Image source={{uri : 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
        className='w-[60px] h-[60px] rounded-full'
        />
        <Image source={{uri : 'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
        className='w-[60px] h-[60px] rounded-full'
        />
        <View
        className='w-[60px] h-[60px] rounded-full bg-zinc-100 items-center justify-center'>
          <Text className='font-signika'>+20</Text>
        </View>
      </View>

    </View>
  )
}

export default Index;