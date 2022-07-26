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
  colors?: string[] | string;
  textColor?: string;
}

const MainButton: React.FC<IProps> = ({
  text,
  marginBottom = 0,
  colors = [],
  textColor = '',
  ...rest
}) => (
  <LinearGradient
    colors={
      colors.length <= 0 ? ['#D2ECB6', '#C2E59C'] : [colors[0], colors[1]]
    }
    start={{ x: 0.5, y: 0 }}
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

        elevation: 2,
      },
    ]}
  >
    <TouchableOpacity style={styles.innerContainer} {...rest}>
      <TextButton color={textColor}>{text}</TextButton>
    </TouchableOpacity>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 55,
    minWidth: widthPixel(236),
    maxHeight: heightPixel(80),
    borderRadius: 5,
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: pixelSizeVertical(20),
    paddingBottom: pixelSizeVertical(20),
    paddingLeft: pixelSizeHorizontal(40),
    paddingRight: pixelSizeHorizontal(40),
    borderRadius: 5,
  },
});

export default MainButton;
