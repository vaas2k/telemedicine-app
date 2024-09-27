import { View, Text, Image } from 'react-native';
import React from 'react';
import { StyledText, StyledView } from '@/constants/nativeComps';
import { useRouter } from 'expo-router';
import { useAuth } from '@/store/useAuth';
import Ionicons from '@expo/vector-icons/Ionicons';

const Index = () => {

  const router = useRouter();
  const data = useAuth((state: any) => { return state.userData });

  const notice = [
    {
      name : 'Jane Doe',
      time : '10hrs ago',
      image : 'https://plus.unsplash.com/premium_photo-1690587673708-d6ba8a1579a5?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name : 'Shane Stofer',
      time : '5hrs ago',
      image : 'https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
  return (
    <StyledView className='flex-1 mx-4'>
      <View className='items-center justify-center bg-rose-500 h-[150px]  mt-2 rounded-xl'>
        <Text className='text-white text-start text-4xl font-signika w-[75%]'>Good Morning Mr. {data.username}</Text>
        <Text className='font-signika w-[75%] text-white '>Have a nice day at work</Text>
      </View>

      <Text className='text-lg text-rose-600 font-signika my-4 '>Daily Tracker</Text>


      <View className='flex-row items-center justify-center gap-x-4'>

        <View className='items-center bg-zinc-100 w-[28%] h-[130px] rounded-xl gap-y-[10px]'>
          <Ionicons name='person' color={'red'} size={30} />
          <Text className='font-signika'>Total Patients</Text>
          <View className='w-[85%] h-[35px] items-center justify-center bg-rose-500 rounded-xl'>
            <Text className='text-white text-xl font-signika'>20</Text>
          </View>
        </View>

        <View className='items-center bg-zinc-100 w-[28%] h-[130px] rounded-xl gap-y-[10px]'>
          <Ionicons name='call' color={'red'} size={30} />
          <Text className='font-signika'>Phone Calls</Text>
          <View className='w-[85%] h-[35px] items-center justify-center bg-rose-500 rounded-xl'>
            <Text className='text-white text-xl font-signika'>09</Text>
          </View>
        </View>

        <View className='items-center bg-zinc-100 w-[28%] h-[130px] rounded-xl gap-y-[10px]'>
          <Ionicons name='calendar-clear' color={'red'} size={30} />
          <Text className='font-signika'>Appointments</Text>
          <View className='w-[85%] h-[35px] items-center justify-center bg-rose-500 rounded-xl'>
            <Text className='text-white text-xl font-signika'>04</Text>
          </View>
        </View>

      </View>


      <View className=' flex-row items-center justify-between'>
        <Text className='text-lg text-rose-600 font-signika my-4 '>Notifications</Text>
        <Text className='text-lg text-rose-600 font-signika my-4 '>view all</Text>
      </View>

      <View className='gap-y-4'>


        {notice.map((item, index) => {
          return(
            <View key={index} className='bg-zinc-100 rounded-xl h-[100px] w-full flex-row items-center justify-between px-3 shadow-xl'>
          <Image source={{ uri: item.image }}
            className='w-[80px] h-[80px] rounded-full'
          />

          <View className='items-center'>
            <Text>Booking Request From </Text>
            <Text className='font-signika_bold text-lg'>"{item.name}"</Text>
          </View>

          <Text>{item.time}</Text>
        </View>
          )
        })}
        
      
        

      </View>

    </StyledView>


  );
}


export default Index;
