import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import AboutMe from "./pages/AboutMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: App(),
  },
  {
    path: "/about-me",
    element: AboutMe(),
  }
]);
