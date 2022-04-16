import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import {AppButton} from "../components";
import { COLORS } from "../constants/theme";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo_color.png")}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 40,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 20,
    color: COLORS.black,
  },
});

export default WelcomeScreen;
