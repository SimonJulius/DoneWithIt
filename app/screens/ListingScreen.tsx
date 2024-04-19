import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import ListingCard from "../components/cards/ListingCard";
import AppSafeView from "../components/AppSafeView";
import colors from "../configs/colors";
import AppListSeparator from "../components/lists/ListItemSeparator";
import { NavigationProp } from "../navigation/types";
import Routes from "../routes/route-constants";
import listingsApi from "../api/listings";
import { ListingsTypes } from "../models/listins";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

type ListingScreenProps = {
  navigation: NavigationProp;
};

const ListingScreen = ({ navigation }: ListingScreenProps) => {
  const {
    data: listings,
    loading,
    error,
    request: getListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    getListings();
    console.log("listings: ", listings);
  }, []);
  return (
    <AppSafeView style={styles.container}>
      <ActivityIndicator visible={loading} />
      {!error ? (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={listings}
          renderItem={({ item }) => (
            <ListingCard
              imgUrl={item.images[0].url}
              title={item.title}
              price={item.price}
              onPress={() => navigation.navigate(Routes.LISTING_DETAILS, item)}
            />
          )}
          ItemSeparatorComponent={() => (
            <AppListSeparator seperatorHeight={20} />
          )}
        />
      ) : (
        <>
          <AppText>Couldn't retrieved button</AppText>
          <AppButton
            title="Retry"
            onPress={getListings}
            size="md"
            color="primary"
            style={{
              marginTop: 10,
            }}
          />
        </>
      )}
    </AppSafeView>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
