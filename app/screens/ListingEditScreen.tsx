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
    id: "1",
    label: "fashion",
    description: "beautiful jacket",
  },
  {
    id: "2",
    label: "electronic",
    description: "ceiling fan",
  },
  {
    id: "3",
    label: "beauty product",
    description: "vitamin c serum",
  },
];

const LoginScreen = () => {
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
          maxLength={8}
        />
        <AppFormPicker
          style={styles.categoryField}
          name="categories"
          data={CATEGORIES}
          placeholder="Category"
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

export default LoginScreen;

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
  },
});
