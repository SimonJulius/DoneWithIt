import { Image, StyleSheet } from "react-native";
import React from "react";
import AppSafeView from "../components/AppSafeView";
import * as Yup from "yup";
import {
  AppFormField,
  SubmitButton,
  AppForm,
  AppFormPicker,
} from "../components/forms";
import { AppPickerData } from "../components/AppPicker";

const listEditSchema = Yup.object({
  title: Yup.string().required().label("Title"),
  price: Yup.number().min(1).max(10000).required().label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().required().min(5).label("Description"),
});

const CATEGORIES: AppPickerData[] = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const ListingEditScreen = () => {
  return (
    <AppSafeView>
      <AppForm
        initialValues={{ title: "", price: 0, category: null, description: "" }}
        onSubmit={(value) => console.log(value)}
        validationSchema={listEditSchema}
      >
        <Image
          style={styles.logo}
          source={require("../assets/icons/bitmaps/logo-red.png")}
        />

        <AppFormField
          name="title"
          autoCapitalize="words"
          autoCorrect={false}
          placeholder="Title"
          marginTop={20}
          maxLength={250}
        />
        <AppFormField
          name="price"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Price"
          marginTop={20}
          style={styles.price}
          maxLength={8}
        />
        <AppFormPicker
          style={styles.categoryField}
          name="categories"
          data={CATEGORIES}
          placeholder="Category"
          animationType="slide"
        />

        <AppFormField
          name="description"
          autoCapitalize="sentences"
          autoCorrect
          placeholder="Description"
          multiline
          numberOfLines={3}
          maxLength={250}
          marginTop={20}
        />

        <SubmitButton
          style={styles.submitButton}
          label={"Post"}
          size="md"
          color="primary"
        />
      </AppForm>
    </AppSafeView>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  submitButton: {
    marginTop: 20,
  },
  categoryField: {
    marginTop: 20,
    width: "50%",
  },
  price: {
    width: "35%",
  },
});
