import { Platform } from "react-native";
import { COLORS } from "./theme";

export default {
  COLORS,
  text: {
    fontSize: 18,
    color: COLORS.dark,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
