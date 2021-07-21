import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import logo from "./assets/SIERRA_LOGO_2_WHITETEXT.png";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View>
        <View style={styles.container}>
          <Image source={logo} style={{ width: 450, height: 450 }} />

          <Text
            style={{
              color: "#888",
              fontSize: 18,
              marginHorizontal: 30,
              marginBottom: 10,
            }}
          >
            To share a photo from your phone with a friend, just press the
            button below!
          </Text>
          <TouchableOpacity
            onPress={() => alert("Register")}
            style={{
              backgroundColor: "black",
              width: 150,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
            }}
          >
            <Text style={{ fontSize: 14, color: "white" }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    backgroundColor: "red",
    height: 50,
    width: 50,
  },
});
