import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard, TextInput, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNavigation, useRoute } from '@react-navigation/native';
import bg from '../../assets/images/bg-menu.png';
import HeaderScreen from '../../components/HeaderScreen';
import MainButton from '../../components/MainButton';
import {
  BackgroundImage,
  BoxInputs,
  Container,
  ContainerButton,
  ContainerTextInput,
  ContainerTitleHooponopono,
  TextInformation,
  TextInputApp,
} from './styles';
import themeGlobal from '../../global/styles';
import ModalNotification from '../../components/ModalNotification';
import handleErrors from '../../helpers/errors';

interface Hooponopono {
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
}
interface HooponoponoProps {
  title: string;
  hooponopono: Hooponopono;
}
interface ItensProps {
  id: string;
  title: string;
  hooponopono: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
  };
}
interface IRouteParams {
  item: ItensProps;
  index: number;
}

const NewHooponopono: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams =
    route.params !== undefined ? (route.params as IRouteParams) : undefined;

  const refTextInputApp1 = useRef<TextInput>(null);
  const refTextInputApp2 = useRef<TextInput>(null);
  const refTextInputApp3 = useRef<TextInput>(null);
  const refTextInputApp4 = useRef<TextInput>(null);
  const refTextInputApp5 = useRef<TextInput>(null);
  const [hooponopono, setHooponopono] = useState<HooponoponoProps>({
    title: routeParams !== undefined ? routeParams.item.title : '',
    hooponopono:
      routeParams !== undefined
        ? routeParams.item.hooponopono
        : {
            line1: '',
            line2: '',
            line3: '',
            line4: '',
            line5: '',
          },
  });
  const [openedModal, setOpenedModal] = useState(false);
  const [modalInfos, setModalInfos] = useState({ title: '', text: '' });
  const [keybordShow, setKeyboardShow] = useState(false);

  useEffect(() => {
    const keyboardListenerDidShow = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    const keyboardListenerDidHide = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );
    return () => {
      keyboardListenerDidShow.remove();
      keyboardListenerDidHide.remove();
    };
  }, []);

  const keyboardDidShow = (): void => setKeyboardShow(true);
  const keyboardDidHide = (): void => setKeyboardShow(false);

  const handleInput = (text: string, field: string): void => {
    if (field === 'title') {
      setHooponopono((state) => ({
        ...state,
        title: text,
      }));
    } else {
      setHooponopono((state) => ({
        ...state,
        hooponopono: {
          ...state.hooponopono,
          [field]: text,
        },
      }));
    }
  };

  const handleSave = useCallback(async () => {
    if (hooponopono.title.length <= 0) {
      ToastAndroid.showWithGravity(
        'Digite um título',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      return;
    }
    if (routeParams !== undefined) {
      try {
        const hooponoponosDB = await AsyncStorage.getItem('@hooponoponos');
        if (hooponoponosDB) {
          const hooponoponoConv = JSON.parse(hooponoponosDB) as ItensProps[];
          hooponoponoConv[routeParams.index] = {
            id: routeParams.item.id,
            ...hooponopono,
          };
          await AsyncStorage.setItem(
            '@hooponoponos',
            JSON.stringify(hooponoponoConv),
          );
          setModalInfos({
            title: 'Atualização',
            text: `Ho'oponopono Atualizado!`,
          });
          setOpenedModal(true);
        }
      } catch (error) {
        handleErrors(
          'Ops...algo deu errado ao atualizar, tente novamente',
          error,
        );
      }
    } else {
      try {
        const hooponoponosBD = await AsyncStorage.getItem('@hooponoponos');
        if (hooponoponosBD) {
          const hooponoponoConv = JSON.parse(
            hooponoponosBD,
          ) as HooponoponoProps[];
          const data = {
            id: String(new Date().getTime()),
            ...hooponopono,
          };
          hooponoponoConv.push(data);
          await AsyncStorage.setItem(
            '@hooponoponos',
            JSON.stringify(hooponoponoConv),
          );
          setModalInfos({
            title: `Ho'oponopono`,
            text: `Ho'oponopono Salvo com Sucesso!`,
          });
          setHooponopono({
            title: '',
            hooponopono: {
              line1: '',
              line2: '',
              line3: '',
              line4: '',
              line5: '',
            },
          });
          setOpenedModal(true);
        } else {
          const data = {
            id: String(new Date().getTime()),
            ...hooponopono,
          };
          const stringfyValue = JSON.stringify([data]);
          await AsyncStorage.setItem('@hooponoponos', stringfyValue);
          setModalInfos({
            title: `Ho'oponopono`,
            text: `Ho'oponopono Salvo com Sucesso!`,
          });
          setHooponopono({
            title: '',
            hooponopono: {
              line1: '',
              line2: '',
              line3: '',
              line4: '',
              line5: '',
            },
          });
          setOpenedModal(true);
        }
      } catch (error) {
        handleErrors('Ops... algo deu errado, tente novamente', error);
      }
    }
  }, [hooponopono, routeParams]);

  const handleModalOk = useCallback(() => {
    if (routeParams) {
      setOpenedModal(false);
      navigation.goBack();
    } else {
      setOpenedModal(false);
    }
  }, [navigation, routeParams]);
  return (
    <Container>
      <BackgroundImage source={bg}>
        <HeaderScreen text="Novo Ho'oponopono" statusBarDiscount />
        <ContainerTitleHooponopono>
          <TextInputApp
            maxLength={30}
            defaultValue={hooponopono.title}
            placeholder={`Título do Ho'oponopono`}
            placeholderTextColor={themeGlobal.colors.gray4}
            onChangeText={(text) => handleInput(text, 'title')}
            autoCapitalize="words"
            returnKeyType="next"
            onSubmitEditing={() => {
              refTextInputApp1.current?.focus();
            }}
          />
        </ContainerTitleHooponopono>
        <TextInformation>{`Escreva aqui seu ho'oponopono`}</TextInformation>
        <BoxInputs>
          <ContainerTextInput>
            <TextInputApp
              ref={refTextInputApp1}
              defaultValue={hooponopono.hooponopono.line1}
              placeholder={`Ex: "Maria" Abençoada`}
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line1')}
              autoCapitalize="words"
              returnKeyType="next"
              onSubmitEditing={() => {
                refTextInputApp2.current?.focus();
              }}
            />
          </ContainerTextInput>
          <ContainerTextInput>
            <TextInputApp
              ref={refTextInputApp2}
              defaultValue={hooponopono.hooponopono.line2}
              placeholder="Sinto Muito"
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line2')}
              autoCapitalize="words"
              returnKeyType="next"
              onSubmitEditing={() => {
                refTextInputApp3.current?.focus();
              }}
            />
          </ContainerTextInput>
          <ContainerTextInput>
            <TextInputApp
              ref={refTextInputApp3}
              defaultValue={hooponopono.hooponopono.line3}
              placeholder="Me Perdoe"
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line3')}
              autoCapitalize="words"
              returnKeyType="next"
              onSubmitEditing={() => {
                refTextInputApp4.current?.focus();
              }}
            />
          </ContainerTextInput>
          <ContainerTextInput>
            <TextInputApp
              ref={refTextInputApp4}
              defaultValue={hooponopono.hooponopono.line4}
              placeholder="Eu Te Amo"
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line4')}
              autoCapitalize="words"
              returnKeyType="next"
              onSubmitEditing={() => {
                refTextInputApp5.current?.focus();
              }}
            />
          </ContainerTextInput>
          <ContainerTextInput>
            <TextInputApp
              ref={refTextInputApp5}
              defaultValue={hooponopono.hooponopono.line5}
              placeholder="Sou Grato"
              placeholderTextColor={themeGlobal.colors.gray4}
              onChangeText={(text) => handleInput(text, 'line5')}
              autoCapitalize="words"
              returnKeyType="done"
              onSubmitEditing={() => {
                handleSave();
              }}
            />
          </ContainerTextInput>
        </BoxInputs>
        {!keybordShow && (
          <ContainerButton>
            <MainButton text="Salvar" onPress={handleSave} />
          </ContainerButton>
        )}
      </BackgroundImage>
      <ModalNotification
        title={modalInfos.title}
        text={modalInfos.text}
        oneButton
        confirmFunction={handleModalOk}
        isVisible={openedModal}
        cancelButtonFunction={() => setOpenedModal(false)}
      />
    </Container>
  );
};

export default NewHooponopono;
