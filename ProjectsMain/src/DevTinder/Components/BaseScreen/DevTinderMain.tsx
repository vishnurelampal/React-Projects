import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "../../Redux/store";
import { Profile } from "../Dashboard/Profile";
import Login from "../LoginComponents/Login";
import DevTinderBaseScreen from "./DevTinderBaseScreen";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <DevTinderBaseScreen />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);
const DevTinderMain = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
};

export default DevTinderMain;
