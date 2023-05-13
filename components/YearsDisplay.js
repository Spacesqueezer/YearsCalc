import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

const YearsDisplay = ({ label, bgColor, value }) => {
  console.log(value);
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);

  useEffect(() => {
    setYears(Math.floor(value / 12));
    setMonths(Math.floor(value % 12));
  }, [value]);

  return (
    <View
      style={StyleSheet.flatten([styles.wrapper, { backgroundColor: bgColor }])}
    >
      <Text>{label}</Text>
      <Text>Лет: {years}</Text>
      <Text>Месяцев: {months}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "95%",
  },
});

export default YearsDisplay;
