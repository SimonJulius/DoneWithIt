import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListingCard from "../components/cards/ListingCard";
import AppSafeView from "../components/AppSafeView";
import colors from "../configs/colors";
import AppListSeparator from "../components/AppListSeparator";

const itemsToBeSold = [
  {
    id: 1,
    image: require("../assets/images/jacket.jpg"),
    title: "Red Jacket for sale!",
    subtitle: "$100",
  },
  {
    id: 2,
    image: require("../assets/images/jacket.jpg"),
    title: "Red Jacket for sale!",
    subtitle: "$100",
  },
];

const ListingScreen = () => {
  return (
    <AppSafeView style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={itemsToBeSold}
        renderItem={({ item }) => (
          <ListingCard
            image={item.image}
            title={item.title}
            subTitle={item.subtitle}
          />
        )}
        ItemSeparatorComponent={() => <AppListSeparator seperatorHeight={20} />}
      />
    </AppSafeView>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingHorizontal: 20,
    borderWidth: 4,
  },
});
