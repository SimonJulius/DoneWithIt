import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import React from "react";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.welcomeImage}
      blurRadius={10}
      source={require("../assets/images/welcome.jpg")}
    >
      <View style={styles.header}>
        <Image
          source={require("../assets/icons/bitmaps/logo-red.png")}
          style={styles.logo}
        />
        <Text>Sell what you don't Need</Text>
      </View>

      <View style={styles.login}>
        <AppButton size="md" color="primary">
          Login
        </AppButton>
      </View>
      <View style={styles.register}>
        <AppButton size="md" color="secondary">
          Register
        </AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  welcomeImage: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 100 : 50,
    width: "100%",
    alignItems: "center",
    paddingBottom: 50,
  },
  header: {
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
  login: {
    marginTop: "auto",
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  register: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
});
