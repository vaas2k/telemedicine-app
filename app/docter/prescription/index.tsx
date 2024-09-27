import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { Button, Icon, Input, Select } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

const Index = () => {
  return (
    <View className='flex-1 m-4'>

      <View className='flex-row items-center justify-between'>
        <Ionicons onPress={() => { router.back(); }} name='arrow-back' size={20} />
        <Text className='text-xl text-rose-600 font-signika'>Prescription</Text>
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

      <ScrollView showsVerticalScrollIndicator={false} style={{
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        backgroundColor: 'white', // Required to see shadow
        padding: 10,
        elevation: 5,
        borderRadius: 15
      }}>
        <View className=' rounded-2xl h-[100%] mb-[80px] '

        >

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

          <View className='items-start my-6 mx-4 gap-y-2'>
            <Text className='text-[18px] text-rose-600 font-signika'>Appointment Complete</Text>
            <View className='flex-row items-center justify-center gap-x-2'>
              <Ionicons name='time-outline' size={18} color={'red'} />
              <Text className='font-signika'>July 16, 11:00 - 12:00</Text>
            </View>
          </View>



          <View className='my-6 mx-4 gap-y-2'>
            <Text className='text-[18px] text-rose-600 font-signika'>Note</Text>

            <View className='bg-zinc-50  w-full h-auto rounded-xl p-2'>

              <View>
                <Text className='font-bold text-[13px] my-1'>Symptoms : </Text>
                <Text className='ml-2'>Headache, Nausea, Vomiting </Text>
              </View>

              <View>
                <Text className='font-bold text-[13px] my-1'>Diagnosis : </Text>
                <Text className='ml-2'>Covid Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Obcaecati consequuntur inventore accusamus eius </Text>
              </View>

              <View>
                <Text className='font-bold text-[13px] my-1'>Medication : </Text>
                <Text className='ml-2'>Covid Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Obcaecati consequuntur inventore accusamus eius </Text>
              </View>

              <View>
                <Text className='font-bold text-[13px] my-1'>Additional Instruction : </Text>
                <Text className='ml-2'>Covid Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Obcaecati consequuntur inventore accusamus eius
                  adipisicing elit. Obcaecati consequuntur inventore accusamus eius
                </Text>
              </View>

            </View>
          </View>


          <View className='my-6 mx-4 gap-y-2 '>
            <Text className='text-[18px] my-3 text-rose-600 font-signika'>Medicines</Text>

            <Input
              width={'100%'}
              borderRadius={15}
              height={12}
              InputLeftElement={<Icon as={<Ionicons name="medkit-outline" />} size={5} ml="2" color="muted.400" />}
              placeholder="medicine" />

            <View className='flex-row items-center justify-between'>
              <Input
                width={'30%'}
                borderRadius={15}
                height={12}
                placeholder="Day" />
              <Select width={'65%'} borderRadius={15} height={12} selectedValue={''}
                minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Time">
                <Select.Item label="Before Breakfast" value='Before Breakfast' />
                <Select.Item label="After Breakfast" value='After Breakfast' />
                <Select.Item label="Before Lunch" value='Before Lunch' />
                <Select.Item label="Before Lunch" value='After Lunch' />
                <Select.Item label="Before Dinner" value='Before Dinner' />
                <Select.Item label="Before Dinner" value='After Dinner' />
              </Select>
            </View>

            <View className='flex-row items-center justify-between'>
              <Input
                width={'30%'}
                borderRadius={15}
                height={12}
                placeholder="Night" />

              <Select width={'65%'} borderRadius={15} height={12} selectedValue={''}
                minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Time">
                <Select.Item label="Before Breakfast" value='Before Breakfast' />
                <Select.Item label="After Breakfast" value='After Breakfast' />
                <Select.Item label="Before Lunch" value='Before Lunch' />
                <Select.Item label="Before Lunch" value='After Lunch' />
                <Select.Item label="Before Dinner" value='Before Dinner' />
                <Select.Item label="Before Dinner" value='After Dinner' />
              </Select>
            </View>

            <Button
              className='bg-rose-50 rounded-xl'
              colorScheme={'danger'}
              variant={'ghost'}
            >
              Add Medicine
            </Button>
          </View>

          <View className='my-4 mx-4'>
            <Button className='rounded-xl bg-rose-500 active:bg-rose-300'><Text className='text-white font-bold'>UPDATE</Text></Button>
          </View>



          

        </View>
      </ScrollView>
    </View>
  )
}

export default Index