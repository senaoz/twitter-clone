import { createTheme } from "@mui/material";

export const TwitterThemeLight = createTheme({
  palette: {
    mode: "light",
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
      primary: "#000000",
      secondary: "#6E767D",
      disabled: "#6E767D",
      hint: "#6E767D",
    },
    background: {
      default: "#ffffff",
      paper: "rgb(247, 249, 249)",
    },
    retweet: "#00BA7CFF",
    like: "rgba(249, 24, 128)",
    divider: "#dedede",
  },

  spacing: 8,
  typography: {
    fontFamily: "-apple-system, Roboto, sans-serif",
    caption: {
      fontSize: 13,
    },
    subtitle1: {
      fontSize: 19,
      fontWeight: 800,
    },
    subtitle2: {
      fontSize: 19,
      fontWeight: 500,
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
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: undefined,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "black",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            background: "rgba(29,161,242,0.2)",
          },
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },

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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "none",
          outline: "none",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          marginTop: "14px",
          marginBottom: "8px",
          border: "1px solid #2F3336",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          maxWidth: 600,
          width: "100%",
          background: "transparent",
          padding: "16px",
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0px !important",
        },
      },
    },

    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "0px",
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
          textTransform: "none",
          justifyContent: "flex-start",
          minWidth: "31px",
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
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: 19,
          border: "1px solid #00000",
          fontWeight: 500,
          padding: "0px",
          margin: "0px",
          outline: "solid ",
          outlineColor: "rgba(0,0,0,0)",
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          padding: "0px",
          margin: "0px",
          outline: "solid ",
          outlineColor: "rgba(0,0,0,0)",
        },
      },
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
