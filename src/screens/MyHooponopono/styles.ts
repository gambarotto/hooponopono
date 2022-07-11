import { FlatList, StyleSheet } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  heightPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
  widthPixel,
  fontPixel,
} from "../../helpers/sizeCalculator";

interface ItensProps {
  title: string;
  hooponopono: {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
  };
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: pixelSizeVertical(20),
    paddingBottom: pixelSizeVertical(20),
    paddingLeft: pixelSizeHorizontal(20),
    paddingRight: pixelSizeHorizontal(20),
    alignItems: "center",
  },
});
export const Container = styled.ImageBackground``;
export const TextInformation = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.secondary}`};
    font-size: ${`${props.theme.fontSize.mainText}`};
  `}
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: ${`${pixelSizeVertical(40)}px`};
  margin-bottom: ${`${pixelSizeVertical(36)}px`};
  text-align: center;
`;
export const HooponoponoList = styled(
  FlatList as new () => FlatList<ItensProps>
)``;
export const ContainerItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: ${`${heightPixel(70)}px`};
  width: 100%;
  border-radius: 4px;
  padding-top: ${`${pixelSizeVertical(0)}px`};
  padding-bottom: ${`${pixelSizeVertical(0)}px`};
  padding-left: ${`${pixelSizeHorizontal(10)}px`};
  padding-right: ${`${pixelSizeHorizontal(10)}px`};
  border-bottom-width: 0.5px;
  ${(props) => css`
    border-bottom-color: ${`${props.theme.colors.gray5}`};
    background-color: ${`${props.theme.colors.white}`};
  `}
`;
export const ContainerTitleItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;
export const TitleItem = styled.Text`
  ${(props) => css`
    color: ${`${props.theme.colors.primary}`};
    font-size: ${`${props.theme.fontSize.informationText}`};
  `}
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const ContainerIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${`${widthPixel(90)}px`};
`;
export const ContainerIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const Icon = styled(MaterialIcons)`
  ${(props) => css`
    color: ${`${props.theme.colors.gray5}`};
  `}
  font-size: ${fontPixel(28)}px;
`;
