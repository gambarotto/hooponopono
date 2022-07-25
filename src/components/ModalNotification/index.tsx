import React from 'react';
import {
  Container,
  ContainerButtons,
  ModalContainer,
  ModalContainerCancelButton,
  ModalContainerOkButton,
  ModalTextCancelButton,
  ModalTextOkButton,
  TextInformation,
  Title,
} from './styles';

interface MyModalProps {
  title: string;
  text: string;
  textButtonOk?: string;
  textButtonCancel?: string;
  isVisible: boolean;
  oneButton?: boolean;
  confirmFunction: () => void;
  cancelButtonFunction: () => void;
}

const ModalNotification: React.FC<MyModalProps> = ({
  title,
  text,
  textButtonOk = 'Ok',
  textButtonCancel = 'Cancelar',
  isVisible,
  oneButton = false,
  confirmFunction,
  cancelButtonFunction,
}) => (
  <Container
    isVisible={isVisible}
    onBackButtonPress={cancelButtonFunction}
    animationIn="fadeIn"
  >
    <ModalContainer>
      <Title>{title}</Title>
      <TextInformation>{text}</TextInformation>
      <ContainerButtons>
        {!oneButton && (
          <ModalContainerCancelButton onPress={cancelButtonFunction}>
            <ModalTextCancelButton>{textButtonCancel}</ModalTextCancelButton>
          </ModalContainerCancelButton>
        )}
        <ModalContainerOkButton onPress={confirmFunction} oneButton={oneButton}>
          <ModalTextOkButton oneButton={oneButton}>
            {textButtonOk}
          </ModalTextOkButton>
        </ModalContainerOkButton>
      </ContainerButtons>
    </ModalContainer>
  </Container>
);

export default ModalNotification;
