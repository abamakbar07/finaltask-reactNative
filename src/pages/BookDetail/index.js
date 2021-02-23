import React from 'react'
import { View, Text, Button } from "react-native";

const Detail = ({ route, navigation }) => {
  const { itemId, itemName, initParam } = route.params;
  // itemId     diambil dari Home
  // itemName   diambil dari Home
  // initParam  diambil dari navigation di App.js
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>itemName: {JSON.stringify(itemName)}</Text>
      <Text>initParam: {JSON.stringify(initParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Detail
