import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./theme.ts";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/quicksand"; // Defaults to weight 400
import "@fontsource/work-sans"; // Defaults to weight 400

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
