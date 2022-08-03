import React from 'react';
import { FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { Container, IconBack, IconContainer, TitleScreen } from './styles';
import themeGlobal from '../../global/styles';

interface IProps {
  text?: string;
  statusBarDiscount?: boolean;
  iconColor?: string;
}

const HeaderScreen: React.FC<IProps> = ({
  text,
  statusBarDiscount = false,
  iconColor,
}) => {
  const navigation = useNavigation();

  return (
    <Container statusBarDiscount={statusBarDiscount}>
      <IconContainer onPress={() => navigation.goBack()}>
        <IconBack
          name="arrow-back-ios"
          size={20}
          color={iconColor || themeGlobal.colors.primary}
        />
      </IconContainer>
      {text && (
        <TitleScreen
          // entering={FadeInUp}
          color={iconColor || themeGlobal.colors.primary}
        >
          {text}
        </TitleScreen>
      )}
    </Container>
  );
};

export default HeaderScreen;
