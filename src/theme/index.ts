"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#000",
    },
    caption: {
      color: "hsl(231, 11%, 63%)",
    },
    body2: {
      color: "#fff",
      fontWeight: "bold",
    },
    h4: {
      color: " hsl(213, 96%, 18%)",
      fontWeight: "bold",
    },
    body1: {
      color: " hsl(213, 96%, 18%)",
      fontWeight: "bold",
    },
  },
});

export default theme;
