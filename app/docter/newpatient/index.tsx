import { View, Text, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Button, Divider } from 'native-base';

const Index = () => {

    const [show, setShow] = React.useState(false)
    return (
        <View className='flex-1 mx-4 mt-2'>
            <View className='flex-row items-center justify-between'>
                <Ionicons onPress={() => { router.back(); }} name='arrow-back' size={20} />
                <Text className='text-xl text-rose-600 font-signika'>Patient Profile</Text>
            </View>


            <View className='flex-row bg-zinc-100 p-3 rounded-xl  my-4'>
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

            </View>


            <View className=' h-[300px] rounded-xl'>

                <View className='bg-white shadow-black drop-shadow-sm shadow-xl border-[1px] border-zinc-200 rounded-2xl mb-2'
                style={{elevation:5}}>
                    <View className='flex-row items-center justify-between my-6 mx-4'>

                        <View className='items-center'>
                            <Text className='text-[16px] text-rose-500 font-signika'>Age</Text>
                            <Text className='font-bold text-[13px]'>19</Text>
                        </View>

                        <View className='items-center'>
                            <Text className='text-[16px] text-rose-500 font-signika'>Gender</Text>
                            <Text className='font-bold text-[13px]'>Female</Text>
                        </View>

                    </View>
                    <View className='bg-zinc-100 h-[1px] w-full' />

                    <View className='flex-row items-center justify-between my-6 mx-4'>

                        <View className='items-center'>
                            <Text className='text-[16px] text-rose-500 font-signika'>Height</Text>
                            <Text className='font-bold text-[13px]'>170 cm</Text>
                        </View>

                        <View className='items-center'>
                            <Text className='text-[16px] text-rose-500 font-signika'>Weight</Text>
                            <Text className='font-bold text-[13px]'>60 kg</Text>
                        </View>
                    </View>
                    <View className='bg-zinc-100 h-[1px] w-full' />
                </View>

                <Button className='rounded-2xl' colorScheme={'blueGray'}><Text className='font-bold text-white text-[18px]'>Patient History</Text></Button>

                {!show ? (<View className='flex-row items-center justify-center gap-x-10 my-3'>
                    <Button onPress={() => { setShow(true) }} className='rounded-2xl w-[150px]' colorScheme={'success'}><Text className='font-bold text-white text-[16px]'>Accept</Text></Button>
                    <Button className='rounded-2xl w-[150px]' colorScheme={'secondary'}><Text className='font-bold text-white text-[16px]'>Reject</Text></Button>
                </View>)
                    :
                    (<View className='flex-row items-center justify-center gap-x-10 my-3'>
                        <Button className='rounded-2xl w-[150px]' colorScheme={'success'}><Text className='font-signika text-white text-[16px]'>Start Call</Text></Button>
                        <Button onPress={() => { router.push('/docter/prescription') }} className='rounded-2xl w-[150px]' colorScheme={'secondary'}><Text className='font-signika text-white text-[16px]'>Complete Call</Text></Button>
                    </View>)}

                {show && <View className='flex-row items-center justify-center gap-x-2'>
                    <Ionicons name='time-outline' size={18} color={'red'} />
                    <Text className='font-signika'>July 16, 11:00 - 12:00</Text>
                </View>
                }
            </View>

        </View>
    )
}

export default Index