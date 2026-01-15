import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "../../Redux/store";
import DashboardMain from "../Dashboard/DashboardMain";
import Logout from "../Dashboard/Logout";
import { PostLoginMainScreen } from "../Dashboard/PostLoginMainScreen";
import Profile from "../Dashboard/Profile";
import Login from "../LoginComponents/Login";
import ProtectedRoute from "./ProtectedRoute";
const appRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <PostLoginMainScreen />,
        children: [
          { element: <Profile />, path: "/profile" },
          { element: <DashboardMain />, path: "/home" },
          { element: <Logout />, path: "/logout" },
        ],
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
