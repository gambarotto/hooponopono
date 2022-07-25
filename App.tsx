/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Platform, ToastAndroid } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import AppLoading from 'expo-app-loading';
import * as Updates from 'expo-updates';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { GloriaHallelujah_400Regular } from '@expo-google-fonts/gloria-hallelujah';
import { IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';
import { Comfortaa_400Regular } from '@expo-google-fonts/comfortaa';
import { LobsterTwo_400Regular } from '@expo-google-fonts/lobster-two';

import themeGlobal from './src/global/styles';
import AppRoutes from './src/routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    roboto: Roboto_400Regular,
    gloriaH: GloriaHallelujah_400Regular,
    indieF: IndieFlower_400Regular,
    comfortaa: Comfortaa_400Regular,
    lobster: LobsterTwo_400Regular,
  });
  const [expoPushToken, setExpoPushToken] = useState('');

  useEffect(() => {
    const registerForPushNotificationsAsync = async (): Promise<void> => {
      try {
        if (Device.isDevice) {
          const { status: existingStatus } =
            await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            ToastAndroid.show(
              'Failed to get push token for push notification!',
              ToastAndroid.BOTTOM,
            );
            return;
          }
          const token = (await Notifications.getExpoPushTokenAsync()).data;
          console.log(token);
          setExpoPushToken(token);
        } else {
          ToastAndroid.show(
            'Must use physical device for Push Notifications',
            ToastAndroid.BOTTOM,
          );
        }
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    registerForPushNotificationsAsync();
  }, []);
  useEffect(() => {
    async function updateApp(): Promise<void> {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync(); // depende da sua estratégia
      }
    }
    // updateApp();
  }, []);
  return fontsLoaded ? (
    <ThemeProvider theme={themeGlobal}>
      <StatusBar style="dark" />
      <AppRoutes />
    </ThemeProvider>
  ) : (
    <AppLoading />
  );
};

export default App;
