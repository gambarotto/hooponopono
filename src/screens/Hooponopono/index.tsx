import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import { useRoute } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { Container, styles, ContainerHooponopono } from './styles';
import bg from '../../assets/images/bg-hoop.png';
import HeaderScreen from '../../components/HeaderScreen';
import themeGlobal from '../../global/styles';
import TextWithShadow from '../../components/TextWithShadow';
import { cancelNotification } from '../../helpers/Notifications';

interface ItensProps {
  id: string;
  title: string;
  hooponopono: {
    [line1: string]: string;
  };
}

const Hooponopono: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as ItensProps;
  const [reduceFontSize, setReduceFontSize] = useState(false);
  const [count, setCount] = useState(0);

  const getAllNotifications = useCallback(async (): Promise<
    Notifications.NotificationRequest[]
  > => {
    const notifications =
      await Notifications.getAllScheduledNotificationsAsync();
    return notifications;
  }, []);
  const createNewNotification = useCallback(async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Vamos fazer um ho'oponopono?`,
        body: ` Você já fez seu ho'oponopono ${routeParams.title} hoje?`,
        data: { idHooponopono: routeParams.id, date: new Date(Date.now()) },
        badge: 1,
      },
      trigger: {
        // seconds: 60 * (60 * 24),
        seconds: 3,
        repeats: false,
      },
    });
  }, [routeParams.id, routeParams.title]);
  const scheduleNotification = useCallback(async () => {
    const allNotifications = await getAllNotifications();

    if (allNotifications.length > 0) {
      const scheduleNotificationData = allNotifications.find(
        (notif) => notif.content.data.idHooponopono === routeParams.id,
      );

      if (scheduleNotificationData) {
        await cancelNotification(scheduleNotificationData.identifier);
      }
    }

    await createNewNotification();
  }, [createNewNotification, getAllNotifications, routeParams.id]);
  const handleCount = useCallback(() => {
    if (count < 108) {
      setCount((state) => state + 1);
    }
  }, [count]);
  useEffect(() => {
    Object.keys(routeParams.hooponopono).forEach((prop) => {
      if (routeParams.hooponopono[prop].length > 27) setReduceFontSize(true);
    });
    return () => {
      scheduleNotification();
    };
  }, [
    createNewNotification,
    routeParams.hooponopono,
    routeParams.title,
    scheduleNotification,
  ]);

  return (
    <>
      <Container activeOpacity={0.9} onPress={handleCount}>
        <StatusBar style="light" />
        <ImageBackground style={styles.container} source={bg}>
          <HeaderScreen iconColor={themeGlobal.colors.white} />
          <ContainerHooponopono>
            <TextWithShadow text={String(count)} sizeNumber={86} />
            <TextWithShadow
              reduceFont={reduceFontSize}
              text={routeParams.hooponopono.line1}
            />
            <TextWithShadow
              reduceFont={reduceFontSize}
              text={routeParams.hooponopono.line2}
            />
            <TextWithShadow
              reduceFont={reduceFontSize}
              text={routeParams.hooponopono.line3}
            />
            <TextWithShadow
              reduceFont={reduceFontSize}
              text={routeParams.hooponopono.line4}
            />
            <TextWithShadow
              reduceFont={reduceFontSize}
              text={routeParams.hooponopono.line5}
            />
          </ContainerHooponopono>
        </ImageBackground>
      </Container>
    </>
  );
};

export default Hooponopono;
