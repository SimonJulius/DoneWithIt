import { GestureResponderEvent, Image, StyleSheet } from "react-native";
import React from "react";
import AppSafeView from "../components/AppSafeView";
import * as Yup from "yup";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";

const registerSchema = Yup.object({
  name: Yup.string().required().label("Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const LoginScreen = () => {
  return (
    <AppSafeView>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
        validationSchema={registerSchema}
      >
        <Image
          style={styles.logo}
          source={require("../assets/icons/bitmaps/logo-red.png")}
        />

        <AppFormField
          name="name"
          autoCapitalize="words"
          autoCorrect={false}
          leftIconName="account"
          iconSize={20}
          placeholder="Name"
          textContentType="name"
          marginTop={20}
        />
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          leftIconName="email"
          iconSize={20}
          placeholder="Email"
          textContentType="emailAddress"
          marginTop={20}
        />
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          leftIconName="lock"
          iconSize={20}
          placeholder="Password"
          textContentType="password"
          marginTop={20}
          secureTextEntry
        />

        <SubmitButton
          style={styles.submitButton}
          label={"Register"}
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
});
