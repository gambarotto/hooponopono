import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { heightPixel } from '../../helpers/sizeCalculator';

const { statusBarHeight } = Constants;

interface PropsContainer {
  statusBarDiscount: boolean;
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
  `}
`;
export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`;
export const IconBack = styled(MaterialIcons)``;
export const TitleScreen = styled.Text`
  font-family: ${({ theme }) => theme.fonts.lobster};
  ${(props) => css`
    font-size: ${`${props.theme.fontSize.titleText}`};
    color: ${`${props.theme.colors.primary}`};
  `}
`;
