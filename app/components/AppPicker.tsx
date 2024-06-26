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
} from "react-native";
import React, { useCallback, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import colors from "../configs/colors";
import AppSafeView from "./AppSafeView";

export interface AppPickerData {
  backgroundColor: string;
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  label: string;
  value: number;
}

type Item = AppPickerData;

export type PickerItemComponentProps = {
  label?: string;
  backgroundColor?: string;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  onPress: () => void;
};

export type AppPickerProps = {
  placeholder?: string;
  showIconRight?: string;
  data?: AppPickerData[];
  PickerItemComponent: React.ComponentType<PickerItemComponentProps>;
  numColumns?: number;
  onSelect?: (item: AppPickerData) => void;
} & TextProps &
  Pick<PressableProps, "onPress" | "onBlur"> &
  ModalProps &
  Pick<FlatListProps<Item>, "data" | "keyExtractor">;

const AppPicker = ({
  placeholder,
  animationType,
  data,
  keyExtractor,
  style,
  showIconRight,
  onSelect,
  numColumns = 1,
  PickerItemComponent,
  ...restProps
}: AppPickerProps) => {
  const [showList, setShowList] = useState(false);

  const handleComponentClick = useCallback(() => {
    setShowList(true);
  }, [setShowList]);

  const [selectedItem, setSelectedItem] = useState<Item>();

  const handItemSelection = (item: Item) => {
    setSelectedItem(item);
    setShowList(false);
    onSelect!(item);
  };

  return (
    <>
      <Pressable
        style={[styles.container, style]}
        {...restProps}
        onPress={handleComponentClick}
      >
        {showIconRight && (
          <MaterialCommunityIcons name="apps" size={20} color={colors.gray} />
        )}
        <AppText
          style={
            (styles.selectedItem,
            {
              color:
                placeholder && !selectedItem ? colors.lightGray : colors.black,
            })
          }
        >
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
        <AppSafeView style={styles.listModalSafeArea}>
          <Pressable
            style={{
              alignSelf: "center",
              marginBottom: 20,
            }}
            onPress={() => setShowList(false)}
          >
            <AppText
              style={{
                color: colors.secondary,
                fontSize: 20,
              }}
            >
              Close
            </AppText>
          </Pressable>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PickerItemComponent
                label={item.label}
                icon={item.icon}
                backgroundColor={item.backgroundColor}
                onPress={() => handItemSelection(item)}
              />
            )}
            keyExtractor={keyExtractor}
            numColumns={numColumns}
            columnWrapperStyle={
              numColumns > 1 && styles.listItemModalFlatlistStyle
            }
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
    // padding: 20,
  },
  selectedItem: {
    paddingHorizontal: 5,
  },
  listModalSafeArea: {
    flex: 1,
  },
  listItemModalItemView: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  listItemModalFlatlistStyle: {
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
});
