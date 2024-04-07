import {
  FlatList,
  FlatListProps,
  Modal,
  ModalProps,
  Pressable,
  PressableProps,
  StyleSheet,
  TextProps,
  TouchableHighlight,
  View,
  ViewProps,
} from "react-native";
import React, { ReactNode, useCallback, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../configs/colors";
import AppSafeView from "./AppSafeView";

interface AppPickerData {
  id: string;
  label: string;
  description: string;
}

type Items = string | AppPickerData;

type AppPickerProps = {
  placeholder?: string;
} & TextProps &
  Pick<PressableProps, "onPress"> &
  ModalProps &
  Pick<FlatListProps<Items>, "data" | "keyExtractor">;

const AppPicker = ({
  placeholder,
  animationType,
  data,
  keyExtractor,
  ...restProps
}: AppPickerProps) => {
  const [showList, setShowList] = useState(false);

  const handleComponentClick = useCallback(() => {
    setShowList(true);
  }, [setShowList]);

  const [selectedItem, setSelectedItem] = useState<Items>("");

  const handItemSelection = (item: Items) => {
    setSelectedItem(item);
    setShowList(false);
  };
  return (
    <>
      <Pressable
        style={styles.container}
        {...restProps}
        onPress={handleComponentClick}
      >
        <MaterialCommunityIcons name="apps" size={20} color={colors.gray} />
        <AppText style={styles.selectedItem}>
          {!!selectedItem
            ? typeof selectedItem === "string"
              ? selectedItem
              : selectedItem.label
            : placeholder}
        </AppText>
        <MaterialCommunityIcons
          name="chevron-down"
          size={20}
          color={colors.gray}
          style={styles.cheveron}
        />
      </Pressable>
      <Modal animationType={animationType} visible={showList}>
        <AppSafeView>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableHighlight
                onPress={() => handItemSelection(item)}
                underlayColor={colors.light}
              >
                <AppText style={styles.listItemStyle}>
                  {typeof item === "string" ? item : item.label}
                </AppText>
              </TouchableHighlight>
            )}
            keyExtractor={keyExtractor}
          />
        </AppSafeView>
      </Modal>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    width: "100%",
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
  },

  cheveron: {
    marginLeft: "auto",
  },

  listItemStyle: {
    padding: 20,
  },
  selectedItem: {
    paddingHorizontal: 5,
  },
});
