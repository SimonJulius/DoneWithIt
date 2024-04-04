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
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cta}>
        <Pressable style={styles.addNewImage}>
          <MaterialCommunityIcons name="close" size={30} color="white" />
        </Pressable>
        <Pressable style={styles.deleteImage}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={30}
            color="white"
          />
        </Pressable>
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
    marginTop: 70,
    justifyContent: "space-between",
    paddingEnd: 20,
    paddingStart: 20,
  },
  deleteImage: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  addNewImage: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    height: "60%",
    marginTop: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
