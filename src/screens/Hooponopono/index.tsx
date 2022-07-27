import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { useRoute } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { Container, styles, ContainerHooponopono } from './styles';
import bg from '../../assets/images/bg-hoop.png';
import HeaderScreen from '../../components/HeaderScreen';
import themeGlobal from '../../global/styles';
import TextWithShadow from '../../components/TextWithShadow';

interface ItensProps {
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

  useEffect(() => {
    Object.keys(routeParams.hooponopono).forEach((prop) => {
      if (routeParams.hooponopono[prop].length > 27) setReduceFontSize(true);
    });
  }, [routeParams.hooponopono]);

  const handleCount = useCallback(() => {
    if (count < 108) {
      setCount((state) => state + 1);
    }
  }, [count]);
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
