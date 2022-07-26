import styled, { css } from 'styled-components/native';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
  fontPixel,
} from '../../helpers/sizeCalculator';

interface Props {
  marginBottom: number;
}
interface TextProps {
  color: string;
}

export const Container = styled.TouchableOpacity<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${`${pixelSizeVertical(20)}px`};
  padding-bottom: ${`${pixelSizeVertical(20)}px`};
  padding-left: ${`${pixelSizeHorizontal(40)}px`};
  padding-right: ${`${pixelSizeHorizontal(40)}px`};
  min-width: ${`${widthPixel(236)}px`};
  max-height: ${`${heightPixel(80)}px`};
  border-width: 1px;
  border-radius: 4px;
  ${(props) => css`
    margin-bottom: ${`${pixelSizeVertical(props.marginBottom) || 0}px`};
    background-color: ${`${props.theme.colors.white}`};
    border-color: ${`${props.theme.colors.primary}`};
  `}
`;
export const TextButton = styled.Text<TextProps>`
  font-size: ${`${fontPixel(28)}px`};
  font-family: ${({ theme }) => theme.fonts.lobster};
  ${({ theme, color }) => css`
    color: ${color || `${theme.colors.primary}`};
  `}
`;
