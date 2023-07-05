// theme.js

// 1. import `extendTheme` function
// import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Quicksand', sans-serif`,
    body: `'Work Sans', sans-serif`,
  },
});

export default theme;
