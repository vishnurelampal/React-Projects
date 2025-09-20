import Header from "./components/Header";
import Body from "./components/Body";
import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}
