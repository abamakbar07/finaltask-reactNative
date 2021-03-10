import React from 'react'
import { View, Text, Button, Image } from "react-native";

import book1 from "../../../assets/img/buku1.png";

const Detail = ({ route, navigation }) => {
  const { bookTitle, bookAuthor, bookIsbn } = route.params;
  // bookTitle     diambil dari Home
  // bookAuthor   diambil dari Home
  // bookIsbn  diambil dari navigation di App.js
  
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ alignItems: "center" }}>
        <Image source={book1} style={{ width: 240, height: 320, margin: 20 }} />
        <Text style={{ fontSize: 32, paddingBottom: 20 }}>{bookTitle}</Text>
        <Text style={{ fontSize: 16 }}>Author</Text>
        <Text style={{ fontSize: 24, paddingBottom: 15 }}>{bookAuthor}</Text>
        <Text style={{ fontSize: 16 }}>ISBN</Text>
        <Text style={{ fontSize: 24, paddingBottom: 15 }}>{bookIsbn}</Text>
        <View>
          <Text style={{ fontSize: 20, marginLeft: 20 }}>ABOUT</Text>
          <Text style={{ margin: 20 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            incidunt voluptas saepe quas. Earum illo asperiores impedit harum
            suscipit porro. Vel, debitis vero blanditiis suscipit veniam
            recusandae ducimus voluptatibus perferendis.
          </Text>
        </View>
      </View>

      <View style={{ marginBottom: "20px" }}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
        {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      </View>
    </View>
  );
}

export default Detail
