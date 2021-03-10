import React from 'react'
import { View, Text, Button, Image } from "react-native";
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

import book1 from '../../../assets/img/buku1.png'
import book4 from '../../../assets/img/buku4.png'
import bg2 from '../../../assets/img/dashboardBg2.png'

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        background: `URL("${bg2}")`,
      }}
    >
      <View style={{ padding: "20px" }}>
        <Text style={{ fontSize: 24, textAlign: "center" }}>
          {" "}
          With us, you can shop online & help save your high street at the same
          time
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row", marginBottom: 0 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", {
              bookTitle: "Serangkai",
              bookAuthor: "Valerie Patkar",
              bookIsbn: "789798456"
            });
          }}
        >
          <View>
            <Image
              source={book1}
              style={{ width: 120, height: 120, margin: 20 }}
            />
            <Text style={{ textAlign: "center", fontSize: 32 }}>Serangkai</Text>
            <Text style={{ textAlign: "center" }}>"Selama beberapa..."</Text>
          </View>
        </TouchableOpacity>

        <View>
          <Image
            source={book4}
            style={{ width: 120, height: 120, margin: 20 }}
          />
          <Text style={{ textAlign: "center", fontSize: 32 }}>Tess On...</Text>
          <Text style={{ textAlign: "center" }}>"Pada suatu..."</Text>
        </View>
      </View>

      <View style={{ marginBottom: "20px" }}>
        <Button
          title="Go to details"
          // onPress={() => navigation.navigate("Details")} // untuk bernavigate ke halaman detail tanpa mengirim data
          onPress={() => {
            navigation.navigate("Details", {
              bookTitle: "Serangkai",
              bookAuthor: "Valerie Patkar",
              bookIsbn: "789798456"
            });
          }}
        />
      </View>
      {/* <Button
        title="POST"
        onPress={() => navigation.navigate("Post")} // untuk bernavigate ke halaman detail tanpa mengirim data
      /> */}
    </View>
  );
}

export default Home
