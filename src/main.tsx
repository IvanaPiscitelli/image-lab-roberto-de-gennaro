import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme.ts";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import "./i18n.ts";

import "./styles/index.css";
import "@fontsource/quicksand"; // Defaults to weight 400
import "@fontsource/work-sans"; // Defaults to weight 400

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
