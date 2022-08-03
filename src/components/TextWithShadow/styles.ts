import styled, { css } from 'styled-components/native';
import { fontPixel } from '../../helpers/sizeCalculator';

interface TextProps {
  reduceFont: boolean;
  sizeNumber: number | undefined;
}

export const Container = styled.Text<TextProps>`
  ${(props) => css`
    color: ${`${props.theme.colors.white}`};
  `}
  ${(props) =>
    !props.reduceFont
      ? css`
          font-size: ${`${fontPixel(46)}px`};
        `
      : css`
          font-size: ${`${fontPixel(29)}px`};
        `}
  ${({ sizeNumber }) =>
    sizeNumber &&
    css`
      font-size: ${`${fontPixel(sizeNumber)}px`};
    `}
  font-family: ${({ theme }) => theme.fonts.lobster};
  text-align: center;
  letter-spacing: 1.5px;
`;
