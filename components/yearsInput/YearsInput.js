import { View, TextInput, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

const YearsInput = ({ bgColor, label, onChange }) => {
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    onChange(months + years * 12);
  }, [months, years]);

  return (
    <View
      style={StyleSheet.flatten([styles.wrapper, { backgroundColor: bgColor }])}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.inputs}>
        <Text style={styles.label}>Лет: </Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          value={years.toString()}
          onChangeText={(value) => setYears(parseInt(value))}
        />
        <Text style={styles.label}>Месяцев: </Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          value={months.toString()}
          onChangeText={(value) => setMonths(parseInt(value))}
        />
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
    borderColor: "black",
    borderBottomWidth: 1,
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
    justifyContent: "center",
  },
});

export default YearsInput;
