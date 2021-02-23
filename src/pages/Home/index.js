import React from 'react'
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details"
     // onPress={() => navigation.navigate("Details")} // untuk bernavigate ke halaman detail tanpa mengirim data
        onPress={() => {
          navigation.navigate("Details", {
            itemId: 86,
            itemName: "Produk Lapan Enam",
          });
        }}
      />
      <Button
        title="POST"
        onPress={() => navigation.navigate("Post")} // untuk bernavigate ke halaman detail tanpa mengirim data
      />
    </View>
  );
}

export default Home
