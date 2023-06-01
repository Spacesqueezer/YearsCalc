import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InputScreen from "./components/Screens/InputScreen";
import ResultScreen from "./components/Screens/ResultScreen";

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InputScreen">
        <Stack.Screen name="InputScreen" component={InputScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
