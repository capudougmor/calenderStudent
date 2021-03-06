import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Ubuntu_400Regular, Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Ubuntu_400Regular,
    Ubuntu_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}

