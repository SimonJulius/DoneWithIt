import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import React from "react";
import colors from "../configs/colors";
import AppText from "../components/AppText";
import { NativeRouteProp } from "../navigation/types";

type ListingScreenProps = {
  route?: NativeRouteProp;
};

const ListingDetailScreen = ({ route }: ListingScreenProps) => {
  const item = route!.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image resizeMode="cover" source={item?.image} style={styles.image} />
        <View style={styles.imageDetailView}>
          <AppText style={styles.detailsTitle}>{item?.title}</AppText>
          <AppText style={styles.detailsSubTitle}>{item?.subtitle}</AppText>
        </View>
      </View>
    </View>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsTitle: {
    lineHeight: 25,
    fontSize: 20,
  },
  detailsSubTitle: {
    color: colors.secondary,
    fontSize: 20,
    marginTop: 10,
  },
  imageView: {
    height: 400,
    width: "100%",
  },
  image: {
    flex: 1,
    width: "100%",
  },
  imageDetailView: {
    justifyContent: "center",
    padding: 20,
  },
  listingView: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
});
