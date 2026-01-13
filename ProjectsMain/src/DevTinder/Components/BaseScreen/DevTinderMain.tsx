import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "../../Redux/store";
import { PostLoginMainScreen } from "../Dashboard/PostLoginMainScreen";
import Profile from "../Dashboard/Profile";
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
      {
        path: "/postLoginMainScreen",
        element: <PostLoginMainScreen />,
        children: [{ path: "/profile", element: <Profile /> }],
      },
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
