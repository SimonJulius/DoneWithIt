import {
  StyleSheet,
  View,
  Image,
  FlatList,
  ViewProps,
  Pressable,
  FlatListComponent,
} from "react-native";
import React, { RefObject, useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import AppImageInput from "./AppImageInput";
import colors from "../../configs/colors";

export interface ImagesType {
  uri: string;
  id: string;
}

interface ImageInputListProps extends ViewProps {
  onAddImage?: () => void;
  onRemoveImage?: (imageId: string) => void;
  imageUris: ImagesType[];
}

const ImageInputList = ({
  imageUris,
  onAddImage,
  onRemoveImage,
}: ImageInputListProps) => {
  const [pressed, setPressed] = useState(false);

  const handlePressedIn = () => {
    setPressed(true);
  };
  const handlePressedOut = () => {
    setPressed(false);
  };

  const imageListFlatList = useRef<FlatList<ImagesType>>(null);

  const handleAddImage = () => {
    return imageListFlatList.current?.scrollToEnd();
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageList}>
        {imageUris && imageUris[0] && (
          <FlatList
            data={imageUris}
            ref={imageListFlatList}
            keyExtractor={(item) => item.id}
            onViewableItemsChanged={handleAddImage}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => onRemoveImage!(item.id)}
                  onPressIn={handlePressedIn}
                  onPressOut={handlePressedOut}
                >
                  <Image source={{ uri: item.uri }} style={styles.image} />
                  <View
                    style={StyleSheet.compose(styles.imageOverlay, {
                      height: pressed ? 70 : 0,
                    })}
                  />
                </Pressable>
              );
            }}
            horizontal
          />
        )}
      </View>
      <AppImageInput onChangeImage={onAddImage} imageUri={""} />
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 5,
  },
  imageList: {
    flexDirection: "row",
    height: 70,
    maxWidth: "75%",
    marginRight: 5,
  },
  imageOverlay: {
    // width: 70,
    // backgroundColor: colors.light,
    // position: "absolute",
    // opacity: 0.5,
  },
});
