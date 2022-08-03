/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { Button, Platform, ToastAndroid, View } from 'react-native';
import { Subscription } from 'expo-modules-core';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
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

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    roboto: Roboto_400Regular,
    gloriaH: GloriaHallelujah_400Regular,
    indieF: IndieFlower_400Regular,
    comfortaa: Comfortaa_400Regular,
    lobster: LobsterTwo_400Regular,
  });
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] =
    useState<Notifications.Notification>();
  const notificationListener = useRef<Subscription>();
  const responseListener = useRef<Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token),
    );
    // Este ouvinte é acionado sempre que uma notificação é recebida enquanto o aplicativo está em primeiro plano
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notif) => {
        setNotification(notif);
      });
    // Este ouvinte é acionado sempre que um usuário toca ou interage com uma notificação
    // (funciona quando o aplicativo está em primeiro plano, em segundo plano ou morto)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current!,
      );
      Notifications.removeNotificationSubscription(responseListener.current!);
    };
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

async function schedulePushNotification(): Promise<void> {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}

async function registerForPushNotificationsAsync(): Promise<string> {
  let token = '';
  // Verifica se é um dispositivo fisico
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      throw new Error('Failed to get push token for push notification!');
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    throw new Error('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  return token;
}
export default App;
