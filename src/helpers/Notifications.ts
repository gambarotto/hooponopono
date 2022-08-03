/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { useNavigation } from '@react-navigation/native';

interface NotificationSchedule {
  title: string;
  body: string;
  type?: string;
  time: Date;
  day: string;
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const Notification: React.FC = () => {
  const { navigate } = useNavigation();

  const [, setExpoPushToken] = useState('');
  const [, setNotification] = useState<Notifications.Notification>();
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
        navigate('MyHooponopono');
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current!,
      );
      Notifications.removeNotificationSubscription(responseListener.current!);
    };
  }, [navigate]);

  return null;
};

const scheduleNotification = async ({
  title,
  body,
  type,
  time,
  day,
}: NotificationSchedule): Promise<string> => {
  time = time && new Date(time.getTime() - 5 * 60000);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const weekday = days.indexOf(day) + 1;
  const hours = time.getHours();
  const minutes = time.getMinutes();

  const id = await Notifications.scheduleNotificationAsync({
    content: {
      title: `${title} ${type}`,
      body,
      // sound: 'default',
    },
    trigger: {
      weekday,
      hour: hours,
      minute: minutes,
      repeats: true,
    },
  });
  console.log('notif id on scheduling', id);
  return id;
};

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
const cancelNotification = async (notifId: string): Promise<void> => {
  await Notifications.cancelScheduledNotificationAsync(notifId);
};
export default Notification;
export { scheduleNotification, cancelNotification };
