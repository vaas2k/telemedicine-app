import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { StyledText, StyledView } from '@/constants/nativeComps';
import useDoc from '@/store/useDoc';
import { Box, Button } from 'native-base';
import { router } from 'expo-router';

const Index = () => {


    const data = useDoc((state: any) => { return state.data });
    const [selectDate, setDate] = React.useState('');
    const [selectTime, setTime] = React.useState('');
    const date = [
        {
            day: 'Mon',
            date: '12'
        },
        {
            day: 'Tue',
            date: '13'
        },
        {
            day: 'Wed',
            date: '14'
        },
        {
            day: 'Thurs',
            date: '15'
        },
        {
            day: 'Fri',
            date: '16'
        },
        {
            day: 'Sat',
            date: '17'
        },


    ]
    const time = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '20:00', '21:00', '22:00']
    return (
        <StyledView className='flex-1'>
            <View className='px-[30px] py-4'>
                <StyledText className=' text-center bg-rose-500 text-white text-xl font-signika p-4 rounded-xl'>Select your slot</StyledText>
            </View>

            <StyledText className=' text-center text-rose-800 text-[12px] font-signika p-1 rounded-xl'>Next Available : 10:00 PM Tommorow</StyledText>

            <ScrollView>

                <StyledView className='flex items-center'>
                    <Image source={{ uri: data.image }} className='w-[300px] h-[190px] object-fill rounded-xl' />

                    <StyledView className='flex-row items-center gap-x-[20px] mt-4'>

                        <Box className='bg-zinc-100 items-center justify-center w-[100px] h-[70px] rounded-xl border-r-[2px] border-b-[2px] border-rose-500'>
                            <Text className='text-rose-700 font-signika'>Degree</Text>
                            <Text>{data.degree}</Text>
                        </Box>
                        <Box className='bg-zinc-100 items-center justify-center w-[100px] h-[70px] rounded-xl border-r-[2px] border-b-[2px] border-rose-500'>
                            <Text className='text-rose-700 font-signika'>Experiance</Text>
                            <Text>10 Years</Text>
                        </Box>
                        <Box className='bg-zinc-100 items-center justify-center w-[100px] h-[70px] rounded-xl border-r-[2px] border-b-[2px] border-rose-500'>
                            <Text className='text-rose-700 font-signika'>Type</Text>
                            <Text>{data.consulting}</Text>
                        </Box>
                    </StyledView>
                </StyledView>

                <StyledView className="flex">
  <Text className="text-zinc-700 text-lg font-signika_bold ml-4 my-3">
    Select Date
  </Text>
  
                    <StyledView className="flex-row items-center justify-center gap-x-3">
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {date.map((item, index) => {
                                const isSelected = selectDate === item.date;
                                return (
                                    <Pressable
                                        onPress={() => setDate(item.date)}
                                        key={index}
                                        className={`ml-9 w-[50px] h-[80px] rounded-xl justify-center ${isSelected ? 'bg-zinc-600' : 'bg-zinc-100'}`}
                                    >
                                        <Text className={`text-center font-bold text-sm ${isSelected ? 'text-white' : 'text-rose-700'}`}>
                                            {item.day}
                                        </Text>
                                        <Text className={`text-center font-bold text-sm ${isSelected ? 'text-white' : 'text-rose-700'}`}>
                                            {item.date}
                                        </Text>
                                    </Pressable>
                                );
                            })}
                        </ScrollView>
                    </StyledView>
                </StyledView>


                <StyledView>
                    <Text className='text-zinc-700 text-lg font-signika_bold ml-4 my-3'>Select Time</Text>


                    <StyledView className='flex-row flex-wrap justify-center gap-4 mb-[10px]'>
                        {time.map((item, index) => {
                            return (<Pressable onPress={() => setTime(item)} key={index} className={`w-[90px] h-[40px] rounded-xl  justify-center ${selectTime === item ? 'bg-zinc-500' : 'bg-zinc-100'}`}>
                                <Text className={`${selectTime === item ? 'text-white' : 'text-rose-700'} text-center font-bold`}>{item}</Text>
                            </Pressable>)
                        })}
                    </StyledView>

                </StyledView>

                <StyledView className='mb-[90px] flex-row items-center justify-center'>
                    <Button onPress={() => { router.push('/patient/payment') }} className='h-[50px] w-[300px] rounded-xl' colorScheme={'red'}>Book Appointment</Button>
                </StyledView>
            </ScrollView>

        </StyledView>
    )
}

export default Index;