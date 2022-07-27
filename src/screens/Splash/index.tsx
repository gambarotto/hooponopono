import React from 'react';
import { ImageBackground } from 'react-native';
import { FadeIn } from 'react-native-reanimated';
import { Logo, styles } from './styles';
import splash from '../../assets/images/splash.png';
import logo from '../../assets/images/logo.png';

const Splash: React.FC = () => (
  <ImageBackground
    source={splash}
    style={styles.container}
    resizeMode="contain"
  >
    <Logo entering={FadeIn.delay(500)} source={logo} />
  </ImageBackground>
);

export default Splash;
