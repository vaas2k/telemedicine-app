import { View, Text } from 'react-native'
import React from 'react'
import { StyledView } from '@/constants/nativeComps'

const Splash = () => {
  return (
    <StyledView className="flex-1 justify-center items-center mb-10 h-full">
            <Text className="text-4xl text-rose-500 font-bold font-signika">ZocDoc</Text>
        </StyledView>
  )
}

export default Splash