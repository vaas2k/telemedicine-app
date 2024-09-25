import { View, Text, KeyboardAvoidingView, Pressable, ScrollView, } from 'react-native'
import React from 'react'
import { StyledView, StyledText } from '@/constants/nativeComps';
import axios, { AxiosError } from 'axios';
import { User, EyeOff, Eye, Mail } from 'lucide-react-native';
import { Input, Stack, Button, Image,Icon, Select } from 'native-base';
import { z, ZodError } from 'zod';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';

interface UserForm {
  email: string,
  password: string,
  confirm_password: string,
  username: string,
  name: string,
  role : string

}

const Signup = ({ toggleComp }: { toggleComp: () => void }) => {

  const [show, setShow] = React.useState(false);
  const [userForm, setUserForm] = React.useState<UserForm>({
    email: '',
    password: '',
    confirm_password: '',
    username: '',
    name: '',
    role : ''
  });


  console.log('form', userForm);


  async function onSubmit() {

    if (userForm.password !== userForm.confirm_password) {
      alert('Password does not match');
      return;
    }
    try {

 
      const res = await axios.post('http://localhost:8081/api/sign', userForm);
      if (res.status == 200) {
        await SecureStore.setItemAsync('token', res.data)
        .then(() => {router.push('/')})

      }

    } catch (error) {
      if (error instanceof ZodError) {
        console.log('Zod');
      }
      else if (error instanceof AxiosError) {
        console.log('Axios');
      }

    }
  }



  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='padding'
    >

      <ScrollView>

        <StyledView className='flex-1 items-center'>

          <Image source={require("../../assets/images/bg/login.png")} alt="Alternate Text" className='w-[200px] h-[200px]' />

          <StyledView className=' gap-[20px]'>

            <StyledView  className='flex-col items-center justify-center'>

              <Input marginY={2} rounded={'xl'} w={{
                base: "100%",
                md: "25%"
              }} InputLeftElement={<Icon as={<User />} size={5} ml="2" color="muted.400" />} placeholder="Name" onChangeText={(e) => setUserForm({ ...userForm, name: e })} />


              <Input marginY={2} rounded={'xl'} w={{
                base: "100%",
                md: "25%"
              }} InputLeftElement={<Icon as={<User />} size={5} ml="2" color="muted.400" />} placeholder="Userame" onChangeText={(e) => setUserForm({ ...userForm, username: e })} />

              <Input marginY={2} rounded={'xl'} w={{
                base: "100%",
                md: "25%"
              }} InputLeftElement={<Icon as={<Mail />} size={5} ml="2" color="muted.400" />} placeholder="Email" onChangeText={(e) => setUserForm({ ...userForm, email: e })} />

              <Input marginY={2} rounded={'xl'} w={{
                base: "100%",
                md: "25%"
              }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                <Icon as={show ? <EyeOff /> : <Eye />} size={5} mr="2" color="muted.400" />
              </Pressable>} placeholder="Password" onChangeText={(e) => setUserForm({ ...userForm, password: e })} />

              <Input marginY={2} rounded={'xl'} w={{
                base: "100%",
                md: "25%"
              }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                <Icon as={show ? <EyeOff /> : <Eye />} size={5} mr="2" color="muted.400" />
              </Pressable>} placeholder="Confirm Password" onChangeText={(e) => setUserForm({ ...userForm, confirm_password: e })} />

              <Select rounded={'xl'} minWidth="310" 
              accessibilityLabel="Patient" placeholder="Patient" selectedValue={userForm.role}
              onValueChange={itemValue => setUserForm((prev) => {return {...prev, role: itemValue}})}
              >
                <Select.Item label='Docter' value={'docter'} />
                <Select.Item label='Patient' value={'patient'} />
              </Select>


            </StyledView>

            <Button onPress={() => { onSubmit() }} className=' rounded-xl' colorScheme={'danger'}>Signup</Button>


            <StyledView className='items-center justify-center flex-row gap-x-[10px] mb-2 mt-[-30px]'>
            <Button onPress={() => { onSubmit() }} className=' rounded-2xl flex-row w-[150px]'  colorScheme={'blueGray'} rightIcon={<Ionicons name={'logo-google'} size={20} color={'white'}/>} >Google</Button>
            <Button onPress={() => { onSubmit() }} className=' rounded-2xl flex-row w-[150px]' colorScheme={'blue'} rightIcon={<Ionicons name={'logo-facebook'} size={20} color={'white'}/>} >Facebook</Button>
            </StyledView>

            <StyledText className='text-center mb-[30px]'>Already Register? <StyledText className='text-rose-500' onPress={() => toggleComp()}>Log in</StyledText></StyledText>

        </StyledView>
          </StyledView>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Signup;