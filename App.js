import { StyleSheet, View, Text } from "react-native";
import YearsInput from "./components/yearsInput/YearsInput";
import { useState } from "react";

export default function App() {
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
    <View style={styles.container}>
      <View style={styles.yearsInputContainer}>
        <Text>Full: {fullAge}</Text>
        <Text>Diag: {diagnosisAge}</Text>
        <Text>Sep: {separationAge}</Text>
        <YearsInput
          bgColor="#af5bd9"
          label="Возраст пациента"
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
  },
  yearsInputContainer: {
    borderWidth: 1,
    width: "95%",
    top: 150,
  },
});
