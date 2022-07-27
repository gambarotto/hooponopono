import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import Animated from 'react-native-reanimated';
import { heightPixel } from '../../helpers/sizeCalculator';

const { statusBarHeight } = Constants;

interface PropsContainer {
  statusBarDiscount: boolean;
}
interface TitleProps {
  color: string;
}
export const Container = styled.View<PropsContainer>`
  position: relative;
  width: 100%;
  max-height: ${`${heightPixel(70)}px`};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props) => css`
    margin-top: ${`${props.statusBarDiscount ? 0 : statusBarHeight}px`};
  `};
`;
export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  padding: 5px;
`;
export const IconBack = styled(MaterialIcons)``;
export const TitleScreen = styled(Animated.Text)<TitleProps>`
  font-family: ${({ theme }) => theme.fonts.lobster};
  ${({ theme, color }) => css`
    font-size: ${`${theme.fontSize.titleText}`};
    color: ${color};
  `}
`;
