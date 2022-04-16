import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { COLORS } from "../constants/theme";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
    <View style={styles.closeIcon}></View>
    <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
      height: 50,
      width: 50,
      backgroundColor: COLORS.accents,
      position: "absolute",
      top: 40,
      left: 30,
  },
  deleteIcon: {
      height: 50,
      width: 50,
      backgroundColor: COLORS.gray,
      position: "absolute",
      top: 40,
      right: 30,
  },
  container: {
      flex: 1,
      backgroundColor: COLORS.black,
  },
});

export default ViewImageScreen;
