import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../components/AppSafeView";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };
  const handlePasswordChange = (email: string) => {
    setPassword(email);
  };
  return (
    <AppSafeView>
      <Image
        style={styles.logo}
        source={require("../assets/icons/bitmaps/logo-red.png")}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        leftIconName="email"
        iconSize={20}
        keyboardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"
        marginBottom={20}
        onChangeText={handleEmailChange}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        leftIconName="lock"
        iconSize={20}
        placeholder="Password"
        textContentType="password"
        marginBottom={20}
        secureTextEntry
        onChangeText={handlePasswordChange}
      />
      <AppButton
        title="Login"
        onPress={() => console.log({ email, password })}
        size="md"
        color="primary"
      />
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
});
