import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';
import { StyledText, StyledView } from '@/constants/nativeComps';
import { useNavigation, useRouter } from 'expo-router';
import { Button, IconButton } from 'native-base';
import { ChevronLeftIcon } from 'native-base';
import * as SecureStore from 'expo-secure-store'

import { Icon } from 'native-base';
import Header from '@/components/Reuseable/Header';

const Index = () => {

  const router = useRouter();
  return (
    <ImageBackground
      source={require('../../assets/images/bg/bg1.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={{
        ...StyleSheet.absoluteFillObject, // Fills the entire background
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black (50% opacity)
      }} />
      
      <Header title={'Docter'} />

      <StyledView className='flex-1 items-center justify-center'>
        <Text className='text-white text-4xl font-signika'>
          Nigga 323
        </Text>
        <Button onPress={ async ()=>{ await SecureStore.deleteItemAsync('token');router.push('/')}}>Logout</Button>
      </StyledView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Index;
