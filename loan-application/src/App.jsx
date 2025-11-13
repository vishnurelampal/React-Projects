import React from "react";
import Header from "./Header";
import Body from "./Body";
import store from "./Redux/store";
import { Provider } from "react-redux";
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
