import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    highlight: {
      "100": "#FFBA08",
      "50": "#FFBA0880",
    },
    dark: {
      bg: "#1D1D1D",
      text: "#F5F8FA",
      info: "#DADADA",
      info50: "#DADADA80",
    },
    light: {
      bg: "#FFFFFF",
      text: "#47585B",
      info: "#999999",
      info50: "#99999980",
    },
  },
  fonts: { heading: "Poppins", body: "Poppins" },
});
