import { ScrollView, StyleSheet, View, StatusBar } from "react-native";
import YearsInput from "./components/YearsInput";
import { useState } from "react";
import CalculateButton from "./components/CalcButton";
import YearsDisplay from "./components/YearsDisplay";

function App() {
  const [fullAge, setFullAge] = useState(0);
  const [diagnosisAge, setDiagnosisAge] = useState(0);
  const [separationAge, setSeparationAge] = useState(0);

  const [underFiveDisplay, setUnderFiveDisplay] = useState(0);
  const [renoDisplay, setRenoDisplay] = useState(0);

  const handleFullAgeChange = (value) => {
    setFullAge(value);
  };

  const handleDiagnosisAgeChange = (value) => {
    setDiagnosisAge(value);
  };

  const handleSeparationAgeChange = (value) => {
    setSeparationAge(value);
  };

  const calculateAges = () => {
    // Просчитывание возраста до пяти лет
    let underFive = fullAge;
    while (underFive > 60) {
      underFive /= 2;
    }
    setUnderFiveDisplay(underFive);

    // Возраст диагноза разделить на 5 - точка Рено
    setRenoDisplay(diagnosisAge / 5);
    // Половина, четверть и восьмая диагноза (если 1/8 больше 5 лет, то
    // К возрасту сепарации поочерёдно добавить половину, четверть и восьмую диагноза
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.yearsInputContainer}>
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
      <CalculateButton onPress={calculateAges} />
      <View style={styles.yearsDisplayContainer}>
        <YearsDisplay
          bgColor="green"
          label="Возраст до пяти"
          value={underFiveDisplay}
        />
        <YearsDisplay bgColor="blue" label="Точка Рено" value={renoDisplay} />
        {/*<YearsDisplay bgColor="red" label="Ещё название" />*/}
        {/*<YearsDisplay bgColor="yellow" label="Ещё название" />*/}
        {/*<YearsDisplay bgColor="pink" label="Ещё название" />*/}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    alignItems: "center",
    flexGrow: 1,
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
    alignItems: "center",
  },
});

export default App;
