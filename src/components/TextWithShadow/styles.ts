import styled, { css } from 'styled-components/native';
import { fontPixel } from '../../helpers/sizeCalculator';

interface TextProps {
  reduceFont: boolean;
}

export const Container = styled.Text<TextProps>`
  ${(props) => css`
    color: ${`${props.theme.colors.white}`};
  `}
  ${(props) =>
    !props.reduceFont
      ? css`
          font-size: ${`${props.theme.fontSize.mainText} `};
        `
      : css`
          font-size: ${`${fontPixel(16)}px`};
        `}
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;
