import React from "react";
import { Text } from "react-native";

import defaultStyles from "../constants/styles";

function AppText({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
}

export default AppText;
