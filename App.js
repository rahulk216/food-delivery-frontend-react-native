import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Routes from "./src/navigation/Routes";
import { persistor, store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
