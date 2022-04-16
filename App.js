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
  LoginScreen,
  MessagesScreen,
} from "./app/screens/index.js";

const App = () => {
  return <LoginScreen />;
};

export default App;
