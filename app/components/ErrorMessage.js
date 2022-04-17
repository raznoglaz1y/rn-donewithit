import React from "react";
import AppText from "./AppText";
import { StyleSheet } from "react-native";

import { COLORS } from "../constants/theme";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: COLORS.red,
    fontSize: 16,
  },
});

export default ErrorMessage;
