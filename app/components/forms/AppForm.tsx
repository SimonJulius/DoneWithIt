import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Formik, FormikConfig } from "formik";

type AppFormProps = FormikConfig<{ [key: string]: unknown }>;
const AppForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: AppFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});
