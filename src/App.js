import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

//configuration about routes
const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu/>
        },
      ],
      errorElement: <Error />,
    },
  ],
  //for warning solving of future flags in conosle
  /*
    multi line comment
  */
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider future={{ v7_startTransition: true }} router={appRouter} />
);
