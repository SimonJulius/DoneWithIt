import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { LocationObject } from "expo-location";

export default () => {
  const [location, setLocation] = useState({ longitude: 0, latitude: 0 });

  const getUserLocation = async () => {
    try {
      let { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        return;
      }

      const {
        coords: { latitude, longitude },
      } = (await Location.getLastKnownPositionAsync()) as LocationObject;

      setLocation({ longitude, latitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return location;
};
