/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
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
import Notification from './src/helpers/Notifications';
import AppRoutes from './src/routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    roboto: Roboto_400Regular,
    gloriaH: GloriaHallelujah_400Regular,
    indieF: IndieFlower_400Regular,
    comfortaa: Comfortaa_400Regular,
    lobster: LobsterTwo_400Regular,
  });

  useEffect(() => {
    async function updateApp(): Promise<void> {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync(); // depende da sua estratégia
      }
    }
    updateApp();
  }, []);
  return fontsLoaded ? (
    <ThemeProvider theme={themeGlobal}>
      <StatusBar style="dark" />
      <AppRoutes>
        <Notification />
      </AppRoutes>
    </ThemeProvider>
  ) : (
    <AppLoading />
  );
};

export default App;
