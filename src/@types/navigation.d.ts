/* eslint-disable no-unused-vars */
import { RootStackParamList } from '../routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
