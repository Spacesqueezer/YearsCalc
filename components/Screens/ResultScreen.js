import YearsDisplay from "../YearsDisplay";
import { View, StyleSheet } from "react-native";
import heart2 from "../../images/heart2.png";
import ImageButton from "../ImageButton";

const ResultScreen = ({ navigation }) => {
  const doSomething = () => {
    navigation.navigate("InputScreen");
  };
  let renoDisplay;
  let halfDisplay;
  let quarterDisplay;
  let eightLabel;
  let parallel1;
  let eightsDisplay;
  let parallel2;
  let parallel3;
  let program1;
  let program2;
  return (
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
      <ImageButton
        style={styles.resultButton}
        onPress={doSomething}
        image={heart2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  yearsDisplayContainer: {
    flex: 1,
    paddingTop: 35,
    backgroundColor: "#F5E9CF",
  },
  resultButton: {
    backgroundColor: "yellow",
    width: "50%",
    aspectRatio: 1.51,
  },
});

export default ResultScreen;
