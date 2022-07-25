import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import {
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../helpers/sizeCalculator';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: pixelSizeVertical(20),
    paddingBottom: pixelSizeVertical(20),
    paddingLeft: pixelSizeHorizontal(20),
    paddingRight: pixelSizeHorizontal(20),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export const Logo = styled.Image`
  width: ${`${widthPixel(150)}px`};
  height: ${`${heightPixel(190)}px`};
  margin-bottom: ${`${pixelSizeVertical(24)}px`};
  margin-top: ${`${pixelSizeVertical(24)}px`};
`;
export const ContainerButtons = styled.View`
  width: 100%;
  height: 150px;
  margin-bottom: 0px;
`;
