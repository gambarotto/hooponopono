import React from 'react';
import { TextProps } from 'react-native';

import { Container } from './styles';

import themeGlobal from '../../global/styles';

interface ITextProps extends TextProps {
  reduceFont: boolean;
  text: string;
}

const TextWithShadow: React.FC<ITextProps> = ({
  reduceFont,
  text,
  ...rest
}) => (
  <Container
    reduceFont={reduceFont}
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
