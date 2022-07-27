import { createTheme } from "@mui/material";

export const twitterTheme = createTheme({
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
    fontFamily: "Roboto",
    fontSize: 13,
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
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          padding: "6px 12px",
          textTransform: "none",
        },
      },

      variants: [
        {
          props: { variant: "tweet" },
          style: {
            fontSize: 15,
            fontWeight: 700,
            borderRadius: 50,
            background: "#1DA1F2",
            width: 80,
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
