import React from "react";
import { View } from "react-native";

import { Screen, Icon, ListItem } from "./app/components/index";
import AppTextInput from "./app/components/AppTextInput";

import {
  AccountScreen,
  WelcomeScreen,
  ViewImageScreen,
  ListingDetailsScreen,
  ListingsScreen,
  MessagesScreen,
} from "./app/screens/index.js";

const App = () => {
  return (
    <Screen>
      <AppTextInput placeholder="Hello" icon="email" />
    </Screen>
  );
};

export default App;
