
import "./css/App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//page
import Xizmatlar from "./pages/Xizmatlar";
import Jamoa from "./pages/Jamoa";
import Blog from "./pages/Blog";
import Kontaklar from "./pages/Kontaklar";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";

//MainLayot
import MainLayout from "./layout/MainLayout";

function App() {
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/jamo",
          element: <Jamoa />,
        },
        {
          path: "/portfoilo",
          element: <Portfolio />,
        },
        {
          path: "/kontaklar",
          element: <Kontaklar />,
        },

        {
          path: "/xizmatlar",
          element: <Xizmatlar />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
