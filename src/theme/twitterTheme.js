import { createTheme } from "@mui/material";

export const twitterTheme = createTheme({
  spacing: 8,
  palette: {
    mode: "dark",
    primary: {
      main: "#1DA1F2",
      light: "#6E767D",
      dark: "#202327",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "rgba(29,161,242,0.2)",
      contrastText: "#1da1f2",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#6E767D",
      disabled: "#6E767D",
      hint: "#6E767D",
    },
    background: {
      default: "#000000",
      paper: "#15181C",
    },
    divider: "#2F3336",
  },
  typography: {
    fontFamily: "-apple-system, Roboto, sans-serif",
    caption: {
      fontSize: 13,
    },
    subtitle1: {
      fontSize: 19,
      fontWeight: 800,
    },
    body1: {
      fontSize: 15,
      fontWeight: 700,
    },
    body2: {
      fontSize: 15,
      fontWeight: 400,
    },
    button: {
      fontSize: 19,
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: undefined,
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 40,
          height: 40,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          margin: 17,
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          maxWidth: 600,
          width: "100%",
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          justifyContent: "flex-start",
          alignItems: "flex-start",
          spacing: 1,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: "6px 18px 6px 12px",
          textTransform: "none",
          justifyContent: "flex-start",
        },
      },
      variants: [
        {
          props: { variant: "tweet" },
          style: {
            justifyContent: "center",
            fontSize: 15,
            fontWeight: 700,
            borderRadius: 50,
            background: "#1DA1F2",
            width: "100%",
            height: 40,
          },
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "search" },
          style: {
            fontSize: 15,
            fontWeight: 400,
            borderRadius: 50,
            border: "none",
          },
        },
      ],
    },
  },
});
