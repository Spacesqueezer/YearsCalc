import { View, TextInput, Text, StyleSheet } from "react-native";

const YearsInput = ({ bgColor, label }) => {
  return (
    <View
      style={StyleSheet.flatten([styles.wrapper, { backgroundColor: bgColor }])}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.inputs}>
        <Text style={styles.label}>Лет: </Text>
        <TextInput style={styles.textInput} keyboardType="numeric" />
        <Text style={styles.label}>Месяцев: </Text>
        <TextInput style={styles.textInput} keyboardType="numeric" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderStyle: "solid",
    margin: 10,
    display: "flex",
    flexDirection: "column",
    borderRadius: 50,
    padding: 10,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  header: {
    marginLeft: "5%",
    width: "50%",
  },
  label: {},
  inputs: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default YearsInput;
