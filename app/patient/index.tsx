import React from 'react'
import { StyledText, StyledView } from '@/constants/nativeComps';
import { useAuth, AuthType } from '@/store/useAuth';
import Header2 from '@/components/Reuseable/Header2';
import { Button, Icon, Input, SearchIcon, Text } from 'native-base';
import { Search } from 'lucide-react-native';
import { Image, ImageBackground, ScrollView, View } from 'react-native';
import { router } from 'expo-router';

const Index = () => {

  const userData = useAuth((state: AuthType) => state.userData);
  const authState = useAuth((state: AuthType) => state.isAuthenticated);
  console.log(authState);
  return (
    <View className='flex-1 bg-transparent'>
      <ScrollView>

        {/**add background image here and add the writing on the middle of it */}
        <ImageBackground 
          source={{uri : 'https://img.freepik.com/free-photo/stethoscope-medications-near-notebook_23-2147796485.jpg?t=st=1727246533~exp=1727250133~hmac=479939be3fb08accae3609c410a2b1eeca2c9d36dc457198cb7bf3cd0a9cdf4d&w=1380'}} 
          style={{ width: '100%', height: 200, justifyContent: 'center', alignItems: 'center' }}
          imageStyle={{ borderRadius: 15 }} // Add rounded corners if needed
        >
          <StyledText className='text-center text-white text-4xl font-signika w-[400px]'>
            
          </StyledText>
        </ImageBackground>

        <StyledView className=' items-center mt-[-20px]'>
          <Input rounded={'xl'} height={50} bg={'white'} w={{
            base: "85%",
            md: "25%"
          }} InputLeftElement={<Icon as={<Search />} size={5} ml="2" color="muted.400" />} placeholder="Search for docters " />
        </StyledView>

        <StyledView className='items-center py-7'>
          <StyledView className='w-[85%] h-[150px] rounded-2xl flex-row items-center justify-between bg-rose-500 '>

            <Image source={require('../../assets/images/bg/docter.png')} className='object-contain w-[150px] h-[170px] mt-[-20px] ml-[-20px] shadow-2xl ' />

            <StyledView className='w-[200px] flex-col items-center gap-y-4 pr-[25px]'>
              <StyledText className='font-semibold font-signika text-xl text-white text-center'>Online and Offline Consultations</StyledText>
              <Button className='w-[100px] bg-white rounded-xl'><Text className='text-black' onPress={() => router.push('/patient/departments')}>Book Now</Text></Button>
            </StyledView>

          </StyledView>
        </StyledView>

        <StyledView className='flex-row items-center justify-between px-[20px] mx-3'>
          <StyledText className='text-rose-500 text-xl font-bold'>Upcoming Appointments</StyledText>
          <StyledText className='text-rose-500 text-lg font-semibold'>view all</StyledText>
        </StyledView>

        <StyledView className='items-center py-7 mb-[60px]'>
          <StyledView className='w-[85%] h-[150px] rounded-2xl flex-row items-center justify-between bg-rose-600 '>

            <Image source={{ uri: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
              alt="Alternate Text" className='object-contain w-[130px] h-[130px] ml-[10px] rounded-xl ' />

            <StyledView className='w-[300px] flex flex-col items-start gap-6 pl-7'>
              <StyledText className='w-[80px] h-5 text-zinc-950 bg-white text-center rounded-xl'>in 24hrs</StyledText>
              <StyledText className='font-bold font-signika text-2xl text-white '>
                Dr. Kennedy
              </StyledText>
              <StyledText className='font-medium text-md text-white'>
                Heart Specialist
              </StyledText>
            </StyledView>
          </StyledView>
        </StyledView>



        
      </ScrollView>
    </View>
  )



}

export default Index;
