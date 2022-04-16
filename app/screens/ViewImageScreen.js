import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { COLORS } from "../constants/theme";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={COLORS.white} size={30} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color={COLORS.white} size={35} />
      </View>
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
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
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
