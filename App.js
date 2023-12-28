import { Provider } from "react-redux";
import store from "./src/store";
import { SafeAreaView } from "react-native";
import Routes from "./src/navigation/Routes";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
