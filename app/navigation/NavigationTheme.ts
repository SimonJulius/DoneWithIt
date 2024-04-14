import { DefaultTheme } from "@react-navigation/native";
import colors from "../configs/colors";

export const AppNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};
