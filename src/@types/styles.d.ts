import 'styled-components/native';
import themeGlobal from '../global/styles';

declare module 'styled-components/native' {
  type ThemeType = typeof themeGlobal;
  export interface DefaultTheme extends ThemeType {}
}
