/// <reference types="react-scripts" />

import 'styled-components';
import { ThemeType } from './styles/theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}