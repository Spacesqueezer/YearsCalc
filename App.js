import {ScrollView, StyleSheet, View, Text, StatusBar} from "react-native";
import YearsInput from "./components/YearsInput";
import { useState } from "react";
import CalculateButton from "./components/CalcButton";
import YearsDisplay from "./components/YearsDisplay";

function App() {
  const [fullAge, setFullAge] = useState(0);
  const [diagnosisAge, setDiagnosisAge] = useState(0);
  const [separationAge, setSeparationAge] = useState(0);

  const handleFullAgeChange = (value) => {
    setFullAge(value);
  };

  const handleDiagnosisAgeChange = (value) => {
    setDiagnosisAge(value);
  };

  const handleSeparationAgeChange = (value) => {
    setSeparationAge(value);
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.yearsInputContainer}>
          <Text>Full: {fullAge}</Text>
          <Text>Diag: {diagnosisAge}</Text>
          <Text>Sep: {separationAge}</Text>
          <YearsInput
            bgColor="#af5bd9"
            label="Возраст клиента"
            onChange={handleFullAgeChange}
          />
          <YearsInput
            bgColor="pink"
            label="Возраст диагноза"
            onChange={handleDiagnosisAgeChange}
          />
          <YearsInput
            bgColor="#3ae0d0"
            label="Возраст сепарации"
            onChange={handleSeparationAgeChange}
          />
        </View>
        <CalculateButton />
        <View style={styles.yearsDisplayContainer}>
          <YearsDisplay bgColor="green" label="Название" />
          <YearsDisplay bgColor="blue" label="Ещё название" />
          <YearsDisplay bgColor="red" label="Ещё название" />
          <YearsDisplay bgColor="yellow" label="Ещё название" />
          <YearsDisplay bgColor="pink" label="Ещё название" />
        </View>
        <StatusBar style="auto" />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    alignItems: "center",
    flexGrow: 1
  },
  yearsInputContainer: {
    marginTop: 150,
    marginBottom: 100,
    borderWidth: 1,
    width: "95%",
  },
  yearsDisplayContainer: {
    borderWidth: 1,
    marginTop: 100,
    width: "95%",
    marginBottom: 50,
    alignItems: "center"
  },
});

export default App;
