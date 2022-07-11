import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';
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
  flex: 1;
  position: relative;
  ${(props) => css`
    background-color: ${`${props.theme.colors.white}`};
  `}
`;
export const BackgroundImage = styled.ImageBackground`
  height: ${`${HEIGHT_DEVICE}px`};
  margin-top: ${`${statusBarHeight}px`};
  align-items: center;
  padding-top: ${`${pixelSizeVertical(20)}px`};
  padding-bottom: ${`${pixelSizeVertical(20)}px`};
  padding-left: ${`${pixelSizeHorizontal(20)}px`};
  padding-right: ${`${pixelSizeHorizontal(20)}px`};
`;
export const ContainerTitleHooponopono = styled.View`
  width: 100%;
  height: ${`${heightPixel(70)}px`};
  border-radius: 4px;
  border-width: 1px;
  ${(props) => css`
    border-color: ${`${props.theme.colors.primary}`};
  `}
  margin-top: ${`${pixelSizeVertical(30)}px`};
`;
export const TextInformation = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.secondary}`};
    font-size: ${`${props.theme.fontSize.mainText}`};
  `}
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: ${`${pixelSizeVertical(24)}px`};
`;
export const BoxInputs = styled.View`
  width: 100%;
  height: ${`${heightPixel(250)}px`};
  border-radius: 4px;
  border-width: 1px;
  ${(props) => css`
    border-color: ${`${props.theme.colors.primary}`};
    background-color: ${`${props.theme.colors.white}`};
  `}
  margin-top: ${`${pixelSizeVertical(12)}px`};
  padding-top: ${`${pixelSizeVertical(20)}px`};
  padding-bottom: ${`${pixelSizeVertical(20)}px`};
  padding-left: ${`${pixelSizeHorizontal(20)}px`};
  padding-right: ${`${pixelSizeHorizontal(20)}px`};
  align-items: center;
  justify-content: center;
  margin-bottom: ${`${pixelSizeVertical(24)}px`};
`;
export const ContainerTextInput = styled.View`
  height: ${`${heightPixel(40)}px`};
  width: 100%;
  border-bottom-width: 1px;
  ${(props) => css`
    border-bottom-color: ${`${props.theme.colors.secondary}`};
  `}
`;
export const TextInputApp = styled.TextInput`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${(props) => css`
    color: ${`${props.theme.colors.secondary}`};
  `}
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${`${fontPixel(24)}px`};
`;
export const ContainerButton = styled.View`
  position: absolute;
  width: 100%;
  left: ${`${pixelSizeVertical(20)}px`};
  bottom: ${`${pixelSizeHorizontal(20)}px`};
  padding-top: ${`${pixelSizeVertical(0)}px`};
  padding-bottom: ${`${pixelSizeVertical(0)}px`};
  padding-left: ${`${pixelSizeHorizontal(20)}px`};
  padding-right: ${`${pixelSizeHorizontal(20)}px`};
`;
