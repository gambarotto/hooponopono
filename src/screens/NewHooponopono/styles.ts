import styled, { css } from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  fontPixel,
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../helpers/sizeCalculator';

const { statusBarHeight } = Constants;
const HEIGHT_DEVICE = Dimensions.get('window').height;

export const Container = styled.ScrollView`
  height: ${`${HEIGHT_DEVICE}px`};
  ${(props) => css`
    background-color: ${`${props.theme.colors.white}`};
  `}
`;
export const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',
    height: HEIGHT_DEVICE,
    marginTop: statusBarHeight,
    paddingTop: pixelSizeVertical(20),
    paddingBottom: pixelSizeVertical(20),
    paddingLeft: pixelSizeHorizontal(20),
    paddingRight: pixelSizeHorizontal(20),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export const TextInformation = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.chakras[0]}`};
    font-size: ${`${props.theme.fontSize.mainText}`};
  `}
  font-family: ${({ theme }) => theme.fonts.lobster};
  margin-top: ${`${pixelSizeVertical(44)}px`};
  letter-spacing: 1.5px;
`;
export const ContainerTitleHooponopono = styled.View`
  width: 100%;
  height: ${`${heightPixel(70)}px`};
  margin-top: ${`${pixelSizeVertical(70)}px`};
  margin-bottom: ${`${pixelSizeVertical(34)}px`};
`;
export const BoxInputs = styled.View`
  width: 100%;
  height: ${`${heightPixel(350)}px`};
  margin-top: ${`${pixelSizeVertical(12)}px`};
  padding-top: ${`${pixelSizeVertical(20)}px`};
  padding-bottom: ${`${pixelSizeVertical(20)}px`};
  padding-left: ${`${pixelSizeHorizontal(20)}px`};
  padding-right: ${`${pixelSizeHorizontal(20)}px`};
  align-items: center;
  justify-content: center;
`;
export const ContainerTextInput = styled.View`
  height: ${`${heightPixel(40)}px`};
  width: 100%;
  border-bottom-width: 1px;
  ${(props) => css`
    border-bottom-color: ${`${props.theme.colors.primary}`};
  `}
`;
export const TextInputApp = styled.TextInput`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${(props) => css`
    color: ${`${props.theme.colors.chakras[0]}`};
  `}
  font-family: ${({ theme }) => theme.fonts.lobster};
  font-size: ${`${fontPixel(24)}px`};
  letter-spacing: 1.5px;
`;
export const ContainerButton = styled.View`
  position: absolute;
  width: 100%;
  left: ${`${pixelSizeVertical(20)}px`};
  bottom: ${`${pixelSizeHorizontal(30)}px`};
`;
