import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from "react-native";
import React from "react";
import colors from "../configs/colors";

type ListingDetailProps = {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
};

type ListingDetailScreenProps = ViewProps & ListingDetailProps;

const ListingDetailScreen = ({
  image,
  title,
  subtitle,
  children,
}: ListingDetailScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image resizeMode="cover" source={image} style={styles.image} />
        <View style={styles.imageDetailView}>
          <Text style={styles.detailsTitle}>{title}</Text>
          <Text style={styles.detailsSubTitle}>{subtitle}</Text>
        </View>
      </View>
      <ScrollView>
        <View>{children}</View>
      </ScrollView>
    </View>
  );
};

export default ListingDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  detailsTitle: {
    lineHeight: 25,
    fontSize: 20,
  },
  detailsSubTitle: {
    color: colors.secondary,
    fontSize: 20,
    marginTop: 10,
  },
});
