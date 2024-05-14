import React from "react";
import Layout from "./components/layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";


const App = () => {
  const Routing = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        {path: "/about", element: <About />},
        {
           path: "/services",
         element: <Services />
        },
        { path: "/contact", element: <Contact /> },
      ]
    }])
  return (
    <>
      
      <RouterProvider router={Routing} />

    </>
  );
};

export default App;
