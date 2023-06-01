import YearsInput from "../YearsInput";
import { SafeAreaView, View, Image, StyleSheet } from "react-native";
import CalculateButton from "../CalcButton";
import { useState } from "react";

const InputScreen = ({ navigation }) => {
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

    navigation.navigate("ResultScreen");
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.screenComponents}>
        <View style={styles.inputsContainer}>
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
        <CalculateButton style={styles.btn} onPress={calculateAges} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, paddingTop: 35, backgroundColor: "#C7B0A2" },
  background: { width: "100%", height: "100%" },
  screenComponents: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  inputsContainer: {
    top: 0,
    left: 0,
    width: "100%",
    marginBottom: "20%",
  },
  btn: {
    right: "50%",
  },
});

export default InputScreen;
