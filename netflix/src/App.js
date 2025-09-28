import { Provider } from "react-redux";
import Body from "./Components/Body";
import appStore from "./Utilis/Redux/store";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
