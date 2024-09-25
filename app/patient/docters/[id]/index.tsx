import { View, Text, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { StyledView } from '@/constants/nativeComps';
import { Button, Divider, Radio, Switch } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import useDoc from '../../../../store/useDoc';

const Index = () => {
  const { id } = useLocalSearchParams();
  const [isAvail, setAvail] = React.useState<boolean>(false);
  const [consultType, setConsultType] = React.useState<string>('Online');

  const setData = useDoc((state : any) => {return state.setData});
  


  const docters = [
    {
      name: 'Dr. Jane Doe',
      image: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1726815422~exp=1726819022~hmac=ba713241365c139b91e795b0eecbf8d7ec2a19a2c38fa109e0414c309f25f890&w=1060',
      degree: 'MBBS, PhD',
      experience: '10 Years of Experience',
      consulting: 'Online'
    },
    {
      name: 'Dr. Kennedy',
      image: 'https://img.freepik.com/free-photo/hospital-healthcare-workers-covid-19-treatment-concept-young-doctor-scrubs-making-daily-errands-clinic-listening-patient-symptoms-look-camera-professional-physician-curing-diseases_1258-57233.jpg?t=st=1726816468~exp=1726820068~hmac=b21a6b70af1214cab76a229fb042bf1ddbc260672f09fb8de183ba3961c243c6&w=1060',
      degree: 'MBBS, PhD',
      experience: '10 Years of Experience',
      consulting: 'Clinic'
    },
    {
      name: 'Dr. Usama',
      image: 'https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17827.jpg?t=st=1726816492~exp=1726820092~hmac=5395e27d275e4f80bbdfc2ccbf368f92f2cf94368114c384926a63d635c864f3&w=1060',
      degree: 'MBBS, PhD',
      experience: '10 Years of Experience',
      consulting: 'Online'
    },
    {
      name: 'Dr. Sarah',
      image: 'https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?t=st=1726816590~exp=1726820190~hmac=5294c8de3bab2ddc346061cb41a31a6f8cbb556f49ac4705d277c57f1996d9f0&w=1060',
      degree: 'MBBS, PhD',
      experience: '10 Years of Experience',
      consulting: 'Clinic'
    },

  ]


  const selectDoc = async ( data: any ) =>{
    await setData(data);
    router.push('/patient/docprofile');
  }

  return (
    <StyledView className='flex-1'>

      <StyledView className='px-[20px] flex-row items-center justify-between mt-5'>
        <Text className='bg-rose-500 p-3 text-xl text-white font-signika rounded-2xl'>{id}</Text>
        <StyledView className='flex-col justify-center gap-[-10px] mt-5'>
          <Text >Currently Available</Text>
          <Switch value={isAvail} onValueChange={setAvail} colorScheme="secondary" />
        </StyledView>
      </StyledView>

    <ScrollView>
      {/**ConsultType Component */}
      <StyledView className='flex-row items-center justify-center gap-[80px] px-[20px] py-5'>

        <Pressable onPress={() => setConsultType('Online')} className={`items-center justify-center ${consultType == 'Online' && 'bg-zinc-100'} p-3 rounded-xl`}>
          <Image source={{ uri: 'https://img.freepik.com/free-vector/video-call-concept-illustration_114360-1635.jpg?t=st=1726813850~exp=1726817450~hmac=ad666fdbd255106ce33d0ed3f9d6f09e82735c71fe105be59c99fe4b8a6be5ff&w=740' }}
            className='w-[50px] h-[50px] object-contain rounded-xl'
          />
          <Text className='text-md font-signika text-white-950'>Video Consultaion</Text>
        </Pressable>

        <Pressable onPress={() => setConsultType('Clinic')} className={`items-center justify-center ${consultType == 'Clinic' && 'bg-zinc-100'} p-3 rounded-xl`}>
          <Image source={{ uri: 'https://img.freepik.com/free-vector/hospital-reception-with-flat-design_23-2147979923.jpg?t=st=1726814213~exp=1726817813~hmac=d6ab2ba9a4e27c9e4f660bba5aec95f576a290722a93ca2f84aec4eb35bf2cf3&w=740' }}
            className='w-[50px] h-[50px] object-contain rounded-xl'
          />
          <Text className='text-md text-center font-signika text-zinc-950'>Clinic Consultaion</Text>
        </Pressable>

      </StyledView>

      <Divider />



        <StyledView className='flex-1 px-5 mb-5'>


          {docters.map((item, index) => {
            return (
              <Pressable onPress={() => selectDoc(item)} key={index} className='my-[20px]'>
                <StyledView className='flex-row items-center bg-zinc-200 h-[150px] rounded-2xl mb-2'>

                  <Image source={{ uri: item.image }}
                    className='w-[120px] h-[120px] object-contain rounded-2xl ml-[10px]'
                  />

                  <StyledView className='gap-y-3'>
                    <Text className='ml-5 font-signika text-xl'>{item.name}</Text>
                    <Text className='ml-5 font-signika text-[15px] text-zinc-500'>{item.degree}</Text>
                    <Text className='ml-5 font-signika text-[15px] text-rose-500'>{item.experience}</Text>
                  </StyledView>

                </StyledView>

                <StyledView className='flex-row items-center justify-center gap-x-[20px]'>
                  <Button isDisabled={item.consulting == 'Clinic'} leftIcon={<Ionicons name='videocam-outline' size={18} color="green" />} className='w-[165px] rounded-xl' variant={'outline'} colorScheme={'primary'}>Consult Online</Button>
                  <Button isDisabled={item.consulting == 'Online'} leftIcon={<Ionicons name='help-buoy-sharp' size={18} color="red" />} className='w-[165px] rounded-xl' variant={'outline'} colorScheme={'secondary'}>Consult Clinic</Button>
                </StyledView>
              </Pressable>
            )
          })}


        </StyledView>
      </ScrollView>


    </StyledView>
  )
}

export default Index;