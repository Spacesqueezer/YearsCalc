import { Image, TouchableOpacity, StyleSheet } from "react-native";
import heart1 from "../images/heart1.png";

const CalculateButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Image source={heart1} style={styles.img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "20%",
    aspectRatio: 1,
    right: "-50%",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%"
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default CalculateButton;
