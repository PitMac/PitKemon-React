import { createTheme } from "@nextui-org/react";

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      primary: "#ee8329",
    }, // override dark theme colors
  },
});
