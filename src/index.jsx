import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "../components/Home";
import Menu from "../components/Menu";
import About from "../components/About";
import Contact from "../components/Contact";
import Logout from "../components/Logout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Faq from "../components/Faq";
import AuthContextProvider from "../context/AuthContext";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";



const ConditionalRendering = () => {
  const {isLoggedIn, login, logout} = useContext(AuthContext);
  
  return isLoggedIn ? <Menu/> : <Home/>

}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <ConditionalRendering/> ,
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
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
  
  
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
