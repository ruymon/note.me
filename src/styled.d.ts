import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: {
        rose: string;
        main: string;
        background: string;
        sidebar: string;
      };
      semantic: {
        red: string;
        opaqueRed: string;
        green: string;
        opaqueGreen: string;
      };
      post: {
        opaqueLightYellow: string;
        opaqueRedOrange: string;
        opaqueLilac: string;
        opaqueGreenCyan: string;
        opaqueLightCyan: string;
      };
      texts: {
        primary: string;
        secondary: string;
      };
      gray: {
        900: string;
        800: string;
        600: string;
        400: string;
        300: string;
        200: string;
        100: string;
      };
    };
  }
}
