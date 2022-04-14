import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground source={require("../assets/background.jpg")}>
      <View style={styles.loginButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  loginButton: {
    width: "100%",
    height: 70,
  },
});

export default WelcomeScreen;
