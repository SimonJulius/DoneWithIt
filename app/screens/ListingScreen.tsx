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

type ListingScreenProps = {
  navigation: NavigationProp;
};

const ListingScreen = ({ navigation }: ListingScreenProps) => {
  const [listings, setListings] = useState<ListingsTypes[]>([]);
  const [hasError, setHasError] = useState(false);
  const getApiListing = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) return setHasError(true);

    setHasError(false);
    setListings(response.data as ListingsTypes[]);
  };

  useEffect(() => {
    getApiListing();
  }, []);
  return (
    <AppSafeView style={styles.container}>
      {!hasError ? (
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
            onPress={getApiListing}
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
