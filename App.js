import { StyleSheet } from "react-native";
import StackNavigator from "./StackNavigator";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
