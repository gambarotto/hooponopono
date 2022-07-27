import React, { useCallback, useState } from 'react';
import { FlatList, ImageBackground } from 'react-native';
import { FadeInUp } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import HeaderScreen from '../../components/HeaderScreen';

import {
  styles,
  ContainerIcon,
  ContainerIcons,
  ContainerButton,
  ContainerItem,
  ContainerTitleItem,
  Icon,
  TextInformation,
  TitleItem,
} from './styles';
import bg from '../../assets/images/bg-all.png';
// import ModalNotification from '../../components/ModalNotification';
import handleErrors from '../../helpers/errors';
import MainButton from '../../components/MainButton';

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
type TitleItemProps = '0' | '1' | '2' | '3' | '4' | '5' | '6';

const MyHooponopono: React.FC = () => {
  const [hooponoponos, setHooponoponos] = useState<ItensProps[]>([]);
  const [noData, setNoData] = useState(false);
  // const [selectedHooponopono, setSelectedHooponopono] = useState<ItensProps>();
  //  const [openedModal, setOpenedModal] = useState(false);
  const navigation = useNavigation();

  async function loadData(): Promise<void> {
    try {
      const hooponoponosDB = await AsyncStorage.getItem('@hooponoponos');
      const formattedHooponoponos = JSON.parse(hooponoponosDB as string);
      if (formattedHooponoponos?.length > 0) {
        setHooponoponos(formattedHooponoponos);
        setNoData(false);
      } else {
        setNoData(true);
        setHooponoponos([]);
      }
    } catch (error) {
      handleErrors(
        'Ops... algo deu errado ao carregar os dados, tente novamente',
        error,
      );
    }
  }
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );
  const handleSelect = useCallback(
    (item: ItensProps) => {
      navigation.navigate('Hooponopono', item);
    },
    [navigation],
  );
  // const handleDelete = useCallback((item: ItensProps) => {
  //   setSelectedHooponopono(item);
  //   setOpenedModal(true);
  // }, []);
  const modalHandleDelete = useCallback(async (item: ItensProps) => {
    try {
      const hooponoponosDB = await AsyncStorage.getItem('@hooponoponos');
      const formattedHooponoponos = JSON.parse(hooponoponosDB as string);

      if (formattedHooponoponos.length > 0) {
        const hooponoponoConv = formattedHooponoponos as ItensProps[];
        const newData = hooponoponoConv.filter((hoop) => hoop.id !== item.id);

        await AsyncStorage.setItem('@hooponoponos', JSON.stringify(newData));
        setHooponoponos((state) => state.filter((hoop) => hoop.id !== item.id));
        // setOpenedModal(false);
        setNoData(newData.length === 0);
      }
    } catch (error) {
      handleErrors(
        'Ops... algo deu errado ao excluir o hooponopono, tente novamente',
        error,
      );
    }
  }, []);
  const handleEdit = useCallback(
    (item: ItensProps, index: number) => {
      navigation.navigate('NewHooponopono', { item, index });
    },
    [navigation],
  );
  const handleCreateHooponopono = useCallback(() => {
    navigation.navigate('NewHooponopono');
  }, [navigation]);

  return (
    <ImageBackground style={styles.container} source={bg}>
      <HeaderScreen text={`Meus Ho'oponoponos`} />
      <TextInformation entering={FadeInUp}>
        {!noData
          ? 'Estes são seus ho’oponoponos, selecione o que você deseja fazer'
          : 'Ops.......Voce ainda não criou um ho’oponopono, aperte o botão abaixo para criar o seu primeiro'}
      </TextInformation>
      {noData && (
        <ContainerButton>
          <MainButton
            text={`Criar Ho'oponopono`}
            onPress={handleCreateHooponopono}
          />
        </ContainerButton>
      )}
      {!noData && (
        <FlatList
          style={{ width: '100%' }}
          contentContainerStyle={{ padding: 4 }}
          data={hooponoponos}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ContainerItem
              entering={FadeInUp}
              style={[
                {
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 10,
                    height: 2,
                  },
                  shadowOpacity: 0,
                  shadowRadius: 1.84,

                  elevation: 2,
                },
              ]}
            >
              <ContainerTitleItem onPress={() => handleSelect(item)}>
                <TitleItem
                  colorChakra={String(index) as unknown as TitleItemProps}
                >{`${item.title} ${index}`}</TitleItem>
              </ContainerTitleItem>
              <ContainerIcons>
                <ContainerIcon onPress={() => handleEdit(item, index)}>
                  <Icon name="edit" />
                </ContainerIcon>
                <ContainerIcon onPress={() => modalHandleDelete(item)}>
                  <Icon name="delete" />
                </ContainerIcon>
              </ContainerIcons>
            </ContainerItem>
          )}
        />
      )}
      {/* <ModalNotification
        title={`Excluir Ho'oponopono`}
        text={`Deseja realmente excluir o Ho'oponopono ${selectedHooponopono?.title}`}
        confirmFunction={modalHandleDelete}
        isVisible={openedModal}
        cancelButtonFunction={() => setOpenedModal(false)}
      /> */}
    </ImageBackground>
  );
};

export default MyHooponopono;
