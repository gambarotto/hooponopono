import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import {
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
} from '../../helpers/sizeCalculator';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: pixelSizeVertical(20),
    paddingBottom: pixelSizeVertical(20),
    paddingLeft: pixelSizeHorizontal(20),
    paddingRight: pixelSizeHorizontal(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export const ContainerLogo = styled(Animated.View)`
  width: ${`${widthPixel(150)}px`};
`;
export const Logo = styled(Animated.Image)``;
