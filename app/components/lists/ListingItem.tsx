import {
  StyleSheet,
  Text,
  View,
  Image,
  ViewProps,
  ImageProps,
  ImageSourcePropType,
  TouchableHighlight,
} from "react-native";
import React from "react";
import colors from "../../configs/colors";
import AppText, { AppTextProps } from "../AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable, {
  SwipeableProps,
} from "react-native-gesture-handler/Swipeable";

type ListingItemTypeProps = {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
  hasRightIcon?: boolean;
  renderRightAction?: () => void;
};

type ListingItemProps = ViewProps &
  ImageProps &
  SwipeableProps &
  ListingItemTypeProps &
  AppTextProps;

const ListingItem = ({
  title,
  subtitle,
  image,
  style,
  hasRightIcon,
  renderRightActions,
  onPress,
  ...rest
}: ListingItemProps) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={StyleSheet.compose(style, styles.listingItemContainer)}>
          <View style={styles.ListingItemImageText}>
            <Image
              style={styles.listingItemImage}
              resizeMode="cover"
              source={image}
            />
            <View>
              <AppText
                numberOfLines={1}
                style={styles.listinItemTitle}
                ellipsizeMode="tail"
              >
                {title}
              </AppText>
              <AppText numberOfLines={1} style={styles.listingItemSubtitle}>
                {subtitle}
              </AppText>
            </View>
          </View>
          {hasRightIcon && (
            <MaterialCommunityIcons name="chevron-right" size={20} />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListingItem;

const styles = StyleSheet.create({
  listingItemContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ListingItemImageText: {
    flexDirection: "row",
    alignItems: "center",
    flexBasis: "70%",
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
