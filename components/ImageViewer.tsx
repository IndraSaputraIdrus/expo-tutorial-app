import { Image, type ImageSource } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {
  imageSource: ImageSource;
  selectedImage?: string;
};

export default function ImageViewer({ imageSource, selectedImage }: Props) {
  const imgSource = selectedImage ? { uri: selectedImage } : imageSource;

  return <Image source={imgSource} style={styles.image} />;
}

const styles = {
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
};
