import { DefaultTheme } from "styled-components";

export default {
  title: "dark",

  colors: {
    primary: {
      rose: "#FDBAA3",
      main: "#FFFFFF",
      background: "#343539",
      sidebar: "#3C3D43",
    },
    semantic: {
      red: "#F7685C",
      opaqueRed: "rgba(247, 104, 92, 0.3)",
      green: "#30C58D",
      opaqueGreen: "rgba(48, 197, 141, 0.3)",
    },
    post: {
      opaqueLightYellow: "rgba(251, 235, 149, 0.4)",
      opaqueRedOrange: "rgba(253, 186, 163, 0.4)",
      opaqueLilac: "rgba(182, 165, 203, 0.4)",
      opaqueGreenCyan: "rgba(151, 210, 188, 0.6)",
      opaqueLightCyan: "rgba(174, 223, 232, 0.6)",
    },
    texts: {
      primary: "#FFFFFF",
      secondary: "#8C8A97",
    },
    gray: {
      900: "#343539",
      800: "#343539",
      600: "#4D4D4D",
      400: "#808080",
      300: "#8C8A97",
      200: "rgba(140, 138, 151, 0.2)",
      100: "#FDFDFD",
    },
  },
} as DefaultTheme;
