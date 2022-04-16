import React from "react";
import { Text, StyleSheet, Platform, TouchableOpacity } from "react-native";

import { COLORS } from "../constants/theme";

function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity style={([styles.button, {backgroundColor: COLORS[color]}])} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10
  },
  text: {
    color: COLORS.white,
    fontSize: Platform.OS === "android" ? 18 : 20,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
