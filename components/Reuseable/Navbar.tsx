import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const Navbar = () => {

    const [nav, setNav] = React.useState<string>('home');
    const toggleNav = (title: string) => {
        setNav(title);
    }
    return (
        <View className='absolute bottom-4 left-0 right-0 items-center px-3'>
            <View className='flex-row items-center justify-around w-full h-[55px] bg-rose-500 rounded-xl mb-[10px]'>
                <View className={`${nav == 'home' && 'bg-pink-700 w-auto'} rounded-full p-2 `}>
                    <Ionicons onPress={() => {toggleNav('home'); router.push('/patient')}} name="home" size={24} color="white" />
                </View>
                <View className={`${nav == 'appointments' && 'bg-pink-700'} rounded-full p-2`}>
                    <Ionicons onPress={() => {toggleNav('appointments');router.push('/patient/appointments')}} name="calendar" size={24} color="white" />
                </View>
                <View className={`${nav == 'people' && 'bg-pink-700'} rounded-full p-2`}>
                    <Ionicons onPress={() => toggleNav('people')} name='people' size={24} color="white" />
                </View>
                <View className={`${nav == 'person' && 'bg-pink-700'} rounded-full p-2 duration-500`}>
                    <Ionicons onPress={() => toggleNav('person')} name="person" size={24} color="white" />
                </View>
            </View>
        </View>
    );
}

export default Navbar;
