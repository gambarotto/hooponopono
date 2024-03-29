import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import MainButton from '../../components/MainButton';
import logo from '../../assets/images/logo.png';
import bg from '../../assets/images/bg-home.png';
import { Logo, styles, ContainerButtons } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground style={styles.container} source={bg}>
      <Logo source={logo} resizeMode="contain" />
      <ContainerButtons>
        <MainButton
          onPress={() => navigation.navigate('NewHooponopono')}
          text="Novo Ho'oponopono"
          marginBottom={24}
        />
        <MainButton
          onPress={() => navigation.navigate('MyHooponopono')}
          text="Meus Ho'oponoponos"
        />
      </ContainerButtons>
    </ImageBackground>
  );
};

export default Home;
