import {
  StyleSheet,
  Text,
  View,
  Image,
  ViewProps,
  ImageProps,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import colors from "../../configs/colors";
import AppText from "../AppText";

type ListingItemTypeProps = {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
};

type ListingItemProps = ViewProps & ImageProps & ListingItemTypeProps;

const ListingItem = ({ title, subtitle, image, style }: ListingItemProps) => {
  return (
    <View style={StyleSheet.compose(style, styles.listingItemContainer)}>
      <Image
        style={styles.listingItemImage}
        resizeMode="cover"
        source={image}
      />
      <View>
        <AppText style={styles.listinItemTitle}>{title}</AppText>
        <AppText style={styles.listingItemSubtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

export default ListingItem;

const styles = StyleSheet.create({
  listingItemContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 15,
  },
  listingItemImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 6,
  },
  listinItemTitle: {
    fontSize: 18,
    textAlign: "left",
  },
  listingItemSubtitle: {
    fontSize: 16,
    marginTop: 5,
    color: colors.gray,
  },
});
