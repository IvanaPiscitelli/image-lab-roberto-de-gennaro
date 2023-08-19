import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import AboutMe from "./pages/AboutMe";
import PriceList from "./pages/PriceList";
import NotFound from "./pages/NotFound";
import Location from "./pages/Location";

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
  {
    path: "/location",
    element: Location(),
  },
  {
    path: "*",
    element: NotFound(),
  },
]);
