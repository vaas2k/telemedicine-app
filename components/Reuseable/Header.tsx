import { View, Text } from 'react-native'
import React from 'react'
import { StyledView, StyledText } from '@/constants/nativeComps'
import { router } from 'expo-router'
import { Icon, Button, IconButton } from 'native-base'
import { ChevronLeft } from 'lucide-react-native';
import { useAuth, AuthType } from '@/store/useAuth';
import * as SecureStore from 'expo-secure-store'
import Ionicons from '@expo/vector-icons/Ionicons'
const Header = ({title} : {title : string}) => {
    const icon = <ChevronLeft />
    const logout = useAuth((state : AuthType) => state.logout);
  return (
    <StyledView style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, paddingLeft: 8 }}>
      <Icon as={icon} name="cloud-upload-outline" size="sm" color={'black'} onPress={() => router.back()} />
      <StyledText className='text-[18px]  font-signika'>{title}</StyledText>
      <IconButton icon={<Ionicons name={'log-out-outline'} size={24} color={'black'} />} onPress={async ()=> {await SecureStore.deleteItemAsync('token').then(() => {logout();router.push('/')})}} />
    </StyledView>
  )
}

export default Header