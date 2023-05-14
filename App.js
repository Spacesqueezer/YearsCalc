import { ScrollView, StyleSheet, View, StatusBar } from "react-native";
import YearsInput from "./components/YearsInput";
import { useState } from "react";
import CalculateButton from "./components/CalcButton";
import YearsDisplay from "./components/YearsDisplay";

function App() {
  const [fullAge, setFullAge] = useState(0);
  const [diagnosisAge, setDiagnosisAge] = useState(0);
  const [separationAge, setSeparationAge] = useState(0);

  const [renoDisplay, setRenoDisplay] = useState(0);
  const [halfDisplay, setHalfDisplay] = useState(0);
  const [quarterDisplay, setQuarterDisplay] = useState(0);
  const [eightsDisplay, setEightsDisplay] = useState(0);
  const [parallel1, setParallel1] = useState(0);
  const [parallel2, setParallel2] = useState(0);
  const [parallel3, setParallel3] = useState(0);

  const [program1, setProgram1] = useState(0);
  const [program2, setProgram2] = useState(0);

  const [eightLabel, setEightLabel] = useState("Восьмая диагноза");

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
    // Возраст диагноза разделить на 5 - точка Рено
    setRenoDisplay(diagnosisAge / 5);

    // Половина, четверть и восьмая диагноза (если 1/8 больше 5 лет, то 1/16)
    setHalfDisplay(diagnosisAge / 2);
    setQuarterDisplay(diagnosisAge / 4);
    let _eightsAge;
    _eightsAge = Math.floor(diagnosisAge / 8);
    if (_eightsAge > 60) {
      setEightLabel("Шестнадцатая диагноза");
      _eightsAge = Math.floor(_eightsAge / 2);
      setEightsDisplay(_eightsAge);
    } else {
      setEightLabel("Восьмая диагноза");
      setEightsDisplay(_eightsAge);
    }

    // К возрасту сепарации поочерёдно добавить половину, четверть и восьмую диагноза
    setParallel1(separationAge + halfDisplay);
    setParallel2(separationAge + quarterDisplay);
    setParallel3(separationAge + eightsDisplay);

    // Установить параллели
    setProgram1(9 - Math.floor(_eightsAge / 12));
    setProgram2(9 - Math.floor(_eightsAge % 12));
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
        <YearsDisplay bgColor="red" label="Точка Рено" value={renoDisplay} />
        <YearsDisplay
          bgColor="pink"
          label="Половина диагноза"
          value={halfDisplay}
        />
        <YearsDisplay
          bgColor="pink"
          label="Четверть диагноза"
          value={quarterDisplay}
        />
        <YearsDisplay bgColor="pink" label={eightLabel} value={eightsDisplay} />
        <YearsDisplay bgColor="#3ae0d0" label="Параллель 1" value={parallel1} />
        <YearsDisplay bgColor="#3ae0d0" label="Параллель 2" value={parallel2} />
        <YearsDisplay bgColor="#3ae0d0" label="Параллель 3" value={parallel3} />
        <YearsDisplay
          bgColor="yellow"
          label="Период программирования 1"
          value={program1}
        />
        <YearsDisplay
          bgColor="yellow"
          label="Период программирования 2"
          value={program2}
        />
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
