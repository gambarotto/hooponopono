import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  TouchableOpacityProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../helpers/sizeCalculator';
import { TextButton } from './styles';

interface IProps extends TouchableOpacityProps {
  text: string;
  marginBottom?: number;
}

const MainButton: React.FC<IProps> = ({ text, marginBottom = 0, ...rest }) => (
  <LinearGradient
    colors={['#D2ECB6', '#C2E59C']}
    start={{ x: 0.1, y: 0 }}
    style={[
      styles.container,
      { marginBottom },
      {
        shadowColor: '#000',
        shadowOffset: {
          width: 50,
          height: 2,
        },
        shadowOpacity: 0,
        shadowRadius: 3.84,

        elevation: 5,
      },
    ]}
  >
    <TouchableOpacity
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...rest}
    >
      <TextButton>{text}</TextButton>
    </TouchableOpacity>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: pixelSizeVertical(20),
    paddingBottom: pixelSizeVertical(20),
    paddingLeft: pixelSizeHorizontal(40),
    paddingRight: pixelSizeHorizontal(40),
    minWidth: widthPixel(236),
    maxHeight: heightPixel(80),
    borderRadius: 5,
  },
});

export default MainButton;
