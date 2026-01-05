import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Body from "./src/Components/Body";
import Contact from "./src/Components/Contact";
import DishesPage from "./src/Components/DishesPage";
import Error from "./src/Components/Error";
import Header from "./src/Components/Header";
// import About from "./src/Components/About";
import { Provider } from "react-redux";
import { UserContext } from "./src/utils/Context/useContext";
import appStore from "./src/utils/Redux/store";

function AppLayout() {
  const [userName, setUserName] = useState();
  ///using useEffect to imitate api call for username
  useEffect(() => {
    const data = {
      name: "Vishnu",
    };
    setUserName(data.name);
  }, []);
  const location = useLocation();
  const noHeaderRoutes = ["/resmenu"];
  const hideHeader = noHeaderRoutes.some((path) =>
    location.pathname.startsWith(path)
  );
  ///wrap the root component using usercontext.provider
  ///set the value that is updated,use same format of the object we created
  return (
    //redux provider, store is the prop
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div id="AppLayout">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

// const About = lazy(()=>import("./src/Components/About"))

const Aboutjibb = lazy(() => import("./src/Components/About"));
<Suspense fallback={<h1>Loadin...</h1>}>
  <Aboutjibb />
</Suspense>;
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <Aboutjibb />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resmenu/:resId",
        element: <DishesPage />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
