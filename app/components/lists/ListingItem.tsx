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
    <Swipeable
      renderRightActions={renderRightActions}
      friction={2}
      enableTrackpadTwoFingerGesture
      leftThreshold={30}
      rightThreshold={40}
      onSwipeableOpen={(direction) => {
        console.log(`Opening swipeable from the ${direction}`);
      }}
      onSwipeableClose={(direction) => {
        console.log(`Closing swipeable to the ${direction}`);
      }}
    >
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={StyleSheet.compose(style, styles.listingItemContainer)}>
          <View style={styles.ListingItemImageText}>
            <Image
              style={styles.listingItemImage}
              resizeMode="cover"
              source={image}
            />
            <View>
              <AppText numberOfLines={1} style={styles.listinItemTitle}>
                {title}
              </AppText>
              <AppText numberOfLines={2} style={styles.listingItemSubtitle}>
                {subtitle}
              </AppText>
            </View>
          </View>
          {hasRightIcon && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              color={colors.gray}
            />
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
