import {
  ImageProps,
  StyleSheet,
  Text,
  View,
  ViewProps,
  Image,
  ImageSourcePropType,
  Pressable,
  PressableProps,
} from "react-native";
import React from "react";
import AppText from "../AppText";
import colors from "../../configs/colors";

type ListingImageProps = {
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
};

type ListingCardProps = PressableProps & ImageProps & ListingImageProps;

const ListingCard = ({ image, title, subTitle, onPress }: ListingCardProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.imageView}>
        <Image resizeMode="cover" source={image} style={styles.image} />
      </View>
      <View style={styles.detailsView}>
        <AppText style={styles.detailsTitle}>{title}</AppText>

        <AppText style={styles.detailsSubTitle}>{subTitle}</AppText>
      </View>
    </Pressable>
  );
};

export default ListingCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: "100%",
    height: 300,
    overflow: "hidden",
    backgroundColor: colors.white,
    elevation: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: -10,
      height: -8,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1,
  },
  imageView: {
    height: "70%",
    overflow: "hidden",
  },
  detailsView: {
    height: "30%",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  detailsTitle: {
    lineHeight: 18,
    fontSize: 14,
    // fontFamily: "Poppins-ExtraBoldItalic",
    fontWeight: "700",
  },
  detailsSubTitle: {
    color: colors.secondary,
    fontSize: 14,
    marginTop: 5,
  },
});
