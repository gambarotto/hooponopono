import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import MainButton from "../../components/MainButton";

import logo from "../../assets/images/logo.png";
import bg from "../../assets/images/bg-menu.png";

import { Brand, Logo, styles } from "./styles";

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground style={styles.container} source={bg}>
      <Brand>{`Ho'oponopono`}</Brand>
      <Logo source={logo} resizeMode="contain" />
      <MainButton
        onPress={() => navigation.navigate("NewHooponopono")}
        text="Novo Ho'oponopono"
        marginBottom={24}
      />
      <MainButton
        onPress={() => navigation.navigate("MyHooponopono")}
        text="Meus Ho'oponoponos"
      />
    </ImageBackground>
  );
};

export default Home;
