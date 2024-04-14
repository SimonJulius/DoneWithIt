import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
export type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type AuthNavigatorParams = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

export type HomeNavigatorParams = {
  Feed: undefined;
  ListEdit: undefined;
  Account: undefined;
};

export type FeedNavigatorParams = {
  Listing: undefined;
  ListingDetail: {
    id: number;
    image: any;
    title: string;
    subtitle: string;
  };
};

export type AccountNavigatorParams = {
  Account: undefined;
  Messages: undefined;
};

export type AllNavigatorParams = AuthNavigatorParams &
  HomeNavigatorParams &
  FeedNavigatorParams &
  AccountNavigatorParams;

export type MainNavigatorParams = HomeNavigatorParams &
  FeedNavigatorParams &
  AccountNavigatorParams;
export type NavigationProp = NativeStackNavigationProp<AllNavigatorParams>;
export type NativeRouteProp = RouteProp<AllNavigatorParams>;
