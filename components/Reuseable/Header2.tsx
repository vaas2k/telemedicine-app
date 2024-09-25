import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyledView } from '@/constants/nativeComps'
import { Icon, IconButton } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons'
import { FileStack } from 'lucide-react-native'

const Header2 = () => {
  return (
    <StyledView className='bg-transparent' style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, paddingLeft: 8 }}>
      <IconButton icon={<Ionicons name={'menu-outline'} size={24} color={'black'} />}  />
      <Image source={{uri:'https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} 
      alt="Alternate Text" 
      className='w-[40px] h-[40px] rounded-full mr-4' />
    </StyledView>
  )
}

export default Header2