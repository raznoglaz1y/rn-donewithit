import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import AppText from "./AppText";
import { COLORS } from "../constants/theme";

function ListItem({ title, subTitle, image, onPress }) {
  return (
    <TouchableHighlight 
    underlayColor={COLORS.light}
    onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  subTitle: {
    color: COLORS.gray,
  },
  title: {
    fontWeight: "bold",
  },
});

export default ListItem;
