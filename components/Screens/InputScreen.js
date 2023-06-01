import YearsInput from "../YearsInput";
import { View } from "react-native";
import CalculateButton from "../CalcButton";
import {useState} from "react";

const InputScreen = () => {
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
    <View>
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
      <CalculateButton onPress={calculateAges} />
    </View>
  );
};

export default InputScreen