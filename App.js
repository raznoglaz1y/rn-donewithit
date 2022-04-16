import React from "react";
import { View } from "react-native";

import { Screen, Icon, ListItem } from "./app/components/index";

import {
  WelcomeScreen,
  ViewImageScreen,
  ListingDetailsScreen,
  MessagesScreen,
} from "./app/screens/index.js";

const App = () => {
  return (
    <Screen>
      <ListItem title="Title" subTitle="subTitle" ImageComponent={<Icon 
        name="email"
        />} />
    </Screen>
  );
};

export default App;
