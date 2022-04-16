import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { Card, Screen } from "../components";
import { COLORS, SHADOWS } from "../constants/theme";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Chair in great condition",
    price: 200,
    image: require("../assets/chair.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: COLORS.light,
    flex: 1,
  },
});

export default ListingsScreen;
