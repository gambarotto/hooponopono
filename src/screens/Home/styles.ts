import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import {
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../helpers/sizeCalculator";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: pixelSizeVertical(20),
    paddingBottom: pixelSizeVertical(20),
    paddingLeft: pixelSizeHorizontal(20),
    paddingRight: pixelSizeHorizontal(20),
    alignItems: "center",
    justifyContent: "center",
  },
});
export const Brand = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.titleText};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;

  margin-bottom: ${`${pixelSizeVertical(60)}px`};
`;
export const Logo = styled.Image`
  width: ${`${widthPixel(150)}px`};
  height: ${`${heightPixel(190)}px`};
  margin-bottom: ${`${pixelSizeVertical(24)}px`};
`;
