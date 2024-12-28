import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

//configuration about routes
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
],
//for warning solving of future flags in conosle
{
  future: {
    v7_relativeSplatPath: true, 
    v7_fetcherPersist: true,  
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true, 
    }
}
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider future={{ v7_startTransition: true }} router={appRouter}/>);