import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText";
import { COLORS, SHADOWS } from "../constants/theme";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
        <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: COLORS.white,
    marginBottom: 20,
    overflow: "hidden",
    ...SHADOWS.dark
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
      fontWeight: 'bold',
      color: COLORS.accents
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
