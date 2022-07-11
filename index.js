import { registerRootComponent } from 'expo';
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Unhandled promise rejection: Error: You cannot check for updates in development mode. To test manual updates, publish your project using `expo publish` and open the published version in this development client."])

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);