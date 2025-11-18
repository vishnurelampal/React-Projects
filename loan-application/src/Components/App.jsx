import { Provider } from "react-redux";

import store from "../Redux/store";
import Body from "./Body";
import Header from "./Header";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
};

export default App;
