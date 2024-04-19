import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useFormikContext } from "formik";

import { AppSafeAreaProps } from "../AppSafeView";
import { AppFormFieldProps } from "./AppFormField";
import ErrorMessageText from "./ErrorMessageText";
import ImageInputList, { ImagesType } from "../images/ImageInputList";

interface FormImagePickerProps extends AppFormFieldProps {
  name?: string;
}
const FormImagePicker = ({ name, ...rest }: FormImagePickerProps) => {
  const {
    setFieldValue,
    setFieldTouched,
    handleChange,
    touched,
    errors,
    values,
  } = useFormikContext();

  const [images, setImages] = useState<ImagesType[]>();

  const options: ImagePicker.ImagePickerOptions = {
    aspect: [1, 1],
    quality: 1,
  };

  const onAddImage = async () => {
    try {
      const { granted } = await ImagePicker.requestCameraPermissionsAsync();

      if (!granted) {
        alert("This app needs permission to your photo library");
        return;
      }

      const { canceled, assets } = await ImagePicker.launchImageLibraryAsync(
        options
      );
      if (!canceled) {
        setImages((prev) => {
          if (Array.isArray(prev)) {
            return [
              ...prev,
              {
                uri: assets[0].uri,
                id: (prev.length + 1).toString(),
                name: name! + prev.length + 1,
                type: "image/jpeg",
              },
            ];
          } else {
            return [
              {
                uri: assets[0].uri,
                id: "1",
                name: name! + 1,
                type: "image/jpeg",
              },
            ];
          }
        });
      }
    } catch (error) {
      console.log("Error loading image: ", error);
    }
  };

  useEffect(() => {
    setFieldValue(name!, images);
  }, [images]);

  const onRemoveImage = (imageId: string) => {
    setImages(images?.filter((image) => image.id !== imageId));
  };

  return (
    <>
      <ImageInputList
        imageUris={images!}
        onAddImage={onAddImage}
        onRemoveImage={onRemoveImage}
        {...rest}
      />
      <ErrorMessageText
        visible={false}
        errorMessage={errors[name as keyof {}]}
      />
    </>
  );
};

export default FormImagePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
