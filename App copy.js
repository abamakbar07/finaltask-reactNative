import "react-native-gesture-handler";
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

import logo from "./assets/img/logo.png"

export default function App() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 240, height: 125 }} />
      <Text style={styles.textDefault}>Silahkan Login terlebih dahulu</Text>
      <Text style={styles.textDefault}>Email :</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Text style={styles.textDefault}>Password :</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />

      <StatusBar style={styles.br} />

      <View style={styles.container}>
        <Text style={styles.textHeader}>
          With us, you can shop online & help save your high street at the same
          time
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    paddingTop: 720,
    fontSize: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "./assets/img/bgDashboard.png",
    alignItems: "center",
    justifyContent: "center",
  },
  textDefault: {
    fontSize: 24,
  },
});
