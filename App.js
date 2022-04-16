import React from "react";
import { View } from "react-native";

import Card from './app/components/Card'

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

const App = () => {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
};

export default App;
