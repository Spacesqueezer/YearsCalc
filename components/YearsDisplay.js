import { View, Text, StyleSheet } from "react-native";

const YearsDisplay = ({ label, bgColor }) => {
  return (
    <View
      style={StyleSheet.flatten([styles.wrapper, { backgroundColor: bgColor }])}
    >
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "95%",
  },
});

export default YearsDisplay;
