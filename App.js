import { StyleSheet, View } from "react-native";
import YearsInput from "./components/yearsInput/YearsInput";

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.yearsInputContainer}>
          <YearsInput bgColor="#af5bd9" label="Возраст пациента"/>
          <YearsInput bgColor="pink" label="Возраст диагноза"/>
          <YearsInput bgColor="#3ae0d0" label="Возраст сепарации"/>
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
