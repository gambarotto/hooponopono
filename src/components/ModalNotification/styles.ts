import styled, { css } from 'styled-components/native';
import Modal from 'react-native-modal';
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from '../../helpers/sizeCalculator';

interface ButtonProps {
  oneButton: boolean;
}

export const Container = styled(Modal)`
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View`
  width: 90%;
  height: ${`${heightPixel(250)}px`};
  ${(props) => css`
    background-color: ${`${props.theme.colors.white}`};
  `};
  border-radius: 5px;
`;
export const Title = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.chakras[0]}`};
    font-size: ${`${props.theme.fontSize.mainText}`};
  `}
  font-family: ${({ theme }) => theme.fonts.lobster};
  margin-top: 12px;
  text-align: center;
  letter-spacing: 1.5px;
`;
export const TextInformation = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.primary}`};
    font-size: ${`${props.theme.fontSize.mainText}`};
  `}
  font-family: ${({ theme }) => theme.fonts.lobster};
  margin-top: ${`${pixelSizeVertical(30)}px`};
  text-align: center;
  padding-top: ${`${pixelSizeVertical(0)}px`};
  padding-bottom: ${`${pixelSizeVertical(0)}px`};
  padding-left: ${`${pixelSizeHorizontal(16)}px`};
  padding-right: ${`${pixelSizeHorizontal(16)}px`};
  letter-spacing: 1.5px;
`;
export const ContainerButtons = styled.View`
  flex: 1;
  padding-top: ${`${pixelSizeVertical(0)}px`};
  padding-bottom: ${`${pixelSizeVertical(0)}px`};
  padding-left: ${`${pixelSizeHorizontal(8)}px`};
  padding-right: ${`${pixelSizeHorizontal(8)}px`};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${`${pixelSizeVertical(8)}px`};
`;
export const ModalContainerCancelButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${`${pixelSizeVertical(20)}px`};
  padding-bottom: ${`${pixelSizeVertical(20)}px`};
  padding-left: ${`${pixelSizeHorizontal(40)}px`};
  padding-right: ${`${pixelSizeHorizontal(40)}px`};
  max-height: ${`${heightPixel(70)}px`};
  border-radius: 4px;
  margin-right: ${`${pixelSizeHorizontal(4)}px`};
`;
export const ModalTextCancelButton = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.chakras[0]}`};
    font-size: ${`${props.theme.fontSize.mainText}`};
  `}
  font-family: ${({ theme }) => theme.fonts.lobster};
  text-align: center;
  letter-spacing: 1.5px;
`;
export const ModalContainerOkButton = styled.TouchableOpacity<ButtonProps>`
  flex: 1;
  justify-content: center;
  ${(props) =>
    props.oneButton
      ? css`
          align-items: flex-end;
          background-color: ${`${props.theme.colors.white}`};
        `
      : css`
          align-items: center;
          background-color: ${`${props.theme.colors.chakras[0]}`};
        `}
  padding-top: ${`${pixelSizeVertical(20)}px`};
  padding-bottom: ${`${pixelSizeVertical(20)}px`};
  padding-left: ${`${pixelSizeHorizontal(40)}px`};
  padding-right: ${`${pixelSizeHorizontal(40)}px`};
  max-height: ${`${heightPixel(70)}px`};
  border-radius: 4px;
  margin-right: ${`${pixelSizeHorizontal(4)}px`};
`;
export const ModalTextOkButton = styled.Text<ButtonProps>`
  ${(props) => css`
    color: ${`${
      props.oneButton ? props.theme.colors.chakras[0] : props.theme.colors.white
    }`};
    font-size: ${`${props.theme.fontSize.mainText}`};
  `}
  font-family: ${({ theme }) => theme.fonts.lobster};
  text-align: center;
`;
