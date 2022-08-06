import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Logo, styles } from './styles';
import splash from '../../assets/images/splash.png';
import logo from '../../assets/images/logo.png';

const Splash: React.FC = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    const wait = setTimeout(() => navigate('Home'), 2000);
    return () => clearTimeout(wait);
  }, [navigate]);
  return (
    <ImageBackground
      source={splash}
      style={styles.container}
      resizeMode="contain"
    >
      <Logo source={logo} />
    </ImageBackground>
  );
};

export default Splash;
