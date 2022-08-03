import React from 'react';
import { TextProps } from 'react-native';

import { Container } from './styles';
import themeGlobal from '../../global/styles';

interface ITextProps extends TextProps {
  reduceFont?: boolean;
  text: string;
  sizeNumber?: number | undefined;
}

const TextWithShadow: React.FC<ITextProps> = ({
  reduceFont = false,
  text,
  sizeNumber = undefined,
  ...rest
}) => (
  <Container
    reduceFont={reduceFont}
    sizeNumber={sizeNumber}
    style={{
      textShadowOffset: { width: 0, height: 0 },
      textShadowColor: themeGlobal.colors.black,
      textShadowRadius: 6,
    }}
    {...rest}
  >
    {text}
  </Container>
);

export default TextWithShadow;
