import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from './src/pages/Home/index'
import Details from './src/pages/BookDetail/index'
import Post from './src/pages/Post/index'
import Landingpage from './src/pages/LandingPage/index'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Landingpage"
          component={Landingpage}
          // options={{ title: "Overview" }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          initialParams={{ initParam: "Joss" }}
        />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;