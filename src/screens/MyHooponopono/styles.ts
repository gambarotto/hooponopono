import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
  fontPixel,
} from '../../helpers/sizeCalculator';

interface TitleItemProps {
  colorChakra: '0' | '1' | '2' | '3' | '4' | '5' | '6';
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: pixelSizeVertical(20),
    paddingBottom: pixelSizeVertical(20),
    paddingLeft: pixelSizeHorizontal(20),
    paddingRight: pixelSizeHorizontal(20),
    alignItems: 'center',
  },
});
export const Container = styled.ImageBackground``;
export const TextInformation = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.primary}`};
    font-size: ${`${props.theme.fontSize.mainText}`};
  `}
  font-family: ${({ theme }) => theme.fonts.comfortaa};
  margin-top: ${`${pixelSizeVertical(40)}px`};
  margin-bottom: ${`${pixelSizeVertical(36)}px`};
  text-align: center;
`;
export const ContainerButton = styled.View`
  width: 100%;
  height: 55px;
  padding-left: ${`${pixelSizeHorizontal(20)}px`};
  padding-right: ${`${pixelSizeHorizontal(20)}px`};
`;
export const ContainerItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: ${`${heightPixel(70)}px`};
  width: 100%;
  padding-left: ${`${pixelSizeHorizontal(10)}px`};
  padding-right: ${`${pixelSizeHorizontal(10)}px`};
  margin-bottom: ${`${pixelSizeVertical(2)}px`};
  ${(props) => css`
    background-color: ${`${props.theme.colors.white}`};
  `};
  border-radius: 5px;
`;
export const ContainerTitleItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;
export const TitleItem = styled.Text<TitleItemProps>`
  ${({ theme, colorChakra }) => css`
    color: ${`${theme.colors.chakras[colorChakra]}`};
    font-size: ${`${fontPixel(24)}px`};
  `}
  font-family: ${({ theme }) => theme.fonts.lobster};
  letter-spacing: 1px;
`;
export const ContainerIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${`${widthPixel(90)}px`};
`;
export const ContainerIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const Icon = styled(MaterialIcons)`
  ${(props) => css`
    color: ${`${props.theme.colors.gray5}`};
  `}
  font-size: ${fontPixel(28)}px;
`;
