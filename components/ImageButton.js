import { Image, TouchableOpacity, StyleSheet } from "react-native";

const ImageButton = ({ onPress, image, style }) => {
  return (
    <TouchableOpacity
      style={StyleSheet.compose(styles.wrapper, style)}
      onPress={onPress}
    >
      <Image source={image} style={styles.img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default ImageButton;
