import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Slot, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font'
import { NativeBaseProvider, Spinner } from 'native-base';
import { StyledView } from '@/constants/nativeComps';

export default function RootLayout() {
  const [fontsload] = useFonts({
    'Signika': require('../assets/fonts/Signika/static/Signika-Regular.ttf'),
    'Signika-Bold': require('../assets/fonts/Signika/static/Signika-Bold.ttf'),
    'Signika-SemiBold': require('../assets/fonts/Signika/static/Signika-SemiBold.ttf'),
  });

  if (!fontsload) {
    return <ActivityIndicator />
  }

  return (

    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>
        <StyledView className='flex-1 flex-col bg-white '>
          <Slot screenOptions={{ headerShown: false }} />
        </StyledView>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
