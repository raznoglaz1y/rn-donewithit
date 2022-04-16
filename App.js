import React from "react";
import { View } from "react-native";

import { Screen, Icon, ListItem } from "./app/components/index";
import { AppPicker, AppTextInput } from "./app/components";

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
      <AppPicker icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
};

export default App;
