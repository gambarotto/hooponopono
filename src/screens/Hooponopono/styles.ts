import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const HEIGHT_DEVICE = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    position: 'relative',
  },
});
export const Container = styled.TouchableOpacity`
  flex: 1;
`;
export const ImageBackground = styled.ImageBackground`
  flex: 1;
  padding: 20px;
  align-items: center;
  position: relative;
`;
export const ContainerHooponopono = styled.View`
  position: absolute;
  width: 100%;
  bottom: ${`${HEIGHT_DEVICE / 3.5}px`};
`;
