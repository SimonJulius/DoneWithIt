import { GestureResponderEvent, Image, StyleSheet } from "react-native";
import React from "react";
import AppSafeView from "../components/AppSafeView";
import * as Yup from "yup";
import { AppFormField, SubmitButton, AppForm } from "../components/forms";

const loginSchema = Yup.object({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const LoginScreen = () => {
  return (
    <AppSafeView>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
        validationSchema={loginSchema}
      >
        <Image
          style={styles.logo}
          source={require("../assets/icons/bitmaps/logo-red.png")}
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
          label={"Login"}
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
