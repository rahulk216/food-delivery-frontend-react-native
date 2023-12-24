import Index from "./src";
import { Provider } from "react-redux";
import store from "./src/store";

import Routes from "./src/navigation/Routes";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
