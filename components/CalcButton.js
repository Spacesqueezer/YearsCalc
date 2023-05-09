import { View, TouchableOpacity, StyleSheet } from "react-native";

const CalculateButton = ({}) => {
  return <TouchableOpacity style={styles.wrapper}></TouchableOpacity>;
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "yellow",
    width: "95%",
    height: "5%",
  },
});

export default CalculateButton;
