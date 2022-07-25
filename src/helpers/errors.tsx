import { ToastAndroid } from 'react-native';

const handleErrors = (message: string, error: unknown): void => {
  ToastAndroid.showWithGravity(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );
  console.log(JSON.stringify(error));
};

export default handleErrors;
