import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CalculateButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Text>Па-shit-ать</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "yellow",
    width: "95%",
    height: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CalculateButton;
