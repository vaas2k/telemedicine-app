import { View, Text, KeyboardAvoidingView, Pressable, ScrollView, } from 'react-native'
import React from 'react'
import { StyledView, StyledText } from '@/constants/nativeComps';
import axios from 'axios';
import { User, EyeOff, Eye, Mail } from 'lucide-react-native';
import { Input, Icon, Stack, Button, Image } from 'native-base';
import { z } from 'zod';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';


interface UserForm {
    email: string,
    password: string

}


const Login = ({ toggleComp, patient, docter }: { toggleComp: () => void, patient: boolean, docter: boolean }) => {


    const router = useRouter();
    const [show, setShow] = React.useState(false);
    const [userForm, setUserForm] = React.useState<UserForm>({
        email: '',
        password: ''
    });

    const loginSchema = z.object({
        email: z.string().email({ message: 'Invalid email address' }),
        password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    });


    const onSubmit = async () => {
        const result = loginSchema.safeParse(userForm);
        if (!result.success) {
            alert(result.error.issues[0].message);
        } else {
            const res = await axios.post('http://localhost:8081/api/log', userForm);
            if (res.status == 200) {
                await SecureStore.setItemAsync('token', res.data)
                    .then(() => { router.push('/'); });
            }
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior='padding'
        >

            <ScrollView>

                <StyledView className='flex-1 items-center  '>

                    <Image source={require("../../assets/images/bg/login.png")} alt="Alternate Text" className='w-[200px] h-[200px] mt-[50px]' />

                    <StyledText className='text-xl text-rose-500 font-signika my-2'>Sign in to your account</StyledText>

                    <StyledView className='mb-4 gap-[30px]'>

                        <StyledView className="flex-col items-center justify-center">

                            <Input marginY={4} rounded={'xl'} w={{
                                base: "100%",
                                md: "25%"
                            }} InputLeftElement={<Icon as={<Mail />} size={5} ml="2" color="muted.400" />} placeholder="Email" onChangeText={(e) => setUserForm({ ...userForm, email: e })} />

                            <Input rounded={'xl'} w={{
                                base: "100%",
                                md: "25%"
                            }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                <Icon as={show ? <EyeOff /> : <Eye />} size={5} mr="2" color="muted.400" />
                            </Pressable>} placeholder="Password" onChangeText={(e) => setUserForm({ ...userForm, password: e })} />

                        </StyledView>

                        <Button onPress={() => { onSubmit() }} className=' rounded-2xl shadow-2xl' colorScheme={'danger'}>Log in</Button>
                        <Text className='text-center'>or</Text>
                        <StyledView className='items-center justify-center flex-row gap-x-[10px] mb-2 '>
                            <Button className=' rounded-2xl flex-row w-[150px]' colorScheme={'blueGray'} rightIcon={<Ionicons name={'logo-google'} size={20} color={'white'} />} >Google</Button>
                            <Button className=' rounded-2xl flex-row w-[150px]' colorScheme={'blue'} rightIcon={<Ionicons name={'logo-facebook'} size={20} color={'white'} />} >Facebook</Button>
                        </StyledView>
                        <StyledText className='text-center'>Not registered yet ? <StyledText className='text-rose-500' onPress={() => toggleComp()}>Sign up</StyledText></StyledText>

                    </StyledView>


                </StyledView>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default Login