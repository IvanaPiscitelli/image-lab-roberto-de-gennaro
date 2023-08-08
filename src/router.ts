import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import AboutMe from "./pages/AboutMe";
import PriceList from "./components/PriceList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: App(),
  },
  {
    path: "/about-me",
    element: AboutMe(),
  },
  {
    path: "/price-list",
    element: PriceList(),
  },
]);
