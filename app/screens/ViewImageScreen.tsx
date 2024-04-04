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
import colors from "../configs/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cta}>
        <View style={styles.addNewImage}></View>
        <View style={styles.deleteImage}></View>
      </View>
      <View style={styles.imageView}>
        <Image
          resizeMode="contain"
          source={require("../assets/images/chair.jpg")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  cta: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "space-between",
    paddingEnd: 20,
    paddingStart: 20,
  },
  deleteImage: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
  },
  addNewImage: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
  },
  imageView: {},
  image: {
    width: "100%",
    height: "100%",
  },
});
