import {createTheme} from "@mui/material";
import globals from "./globals";
import createShadow from "./utils/shadows";
import breakpoints from "./utils/breakpoints";
import container from "./utils/container";
import lightThemeColors from "./utils/lightThemeColors"
import darkThemeColors from "./utils/darkThemeColors"

if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark")
}

let themeMode = localStorage.getItem("theme")

const provideColorTheme = () => {
    if (themeMode === "light") {
        return {...lightThemeColors}
    } else if (themeMode === "dark") {
        return {...darkThemeColors}
    }
}

export default createTheme({
    // @ts-ignore
    palette: provideColorTheme(),
    typography: {},
    breakpoints: {...breakpoints},
    shape: {},
    // @ts-ignore
    shadows: createShadow(provideColorTheme().primary.main),
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ...globals,
                ...container
            },
        },
        MuiContainer: {
            defaultProps: {
                sx: themeMode === "light" ?
                    {backgroundColor: lightThemeColors.background.paper} : {backgroundColor: darkThemeColors.background.paper}
            }
        },
        MuiGrid: {defaultProps: {}},
        MuiPaper: {
            defaultProps: {
                elevation: themeMode === "light" ? 3 : 5,

            }
        },
        MuiCard: {
            defaultProps: {
                elevation: themeMode === "light" ? 2 : 5,
            },
        },
        MuiToolbar: {
            defaultProps: {
                sx: themeMode === "light" ?
                    {backgroundColor: lightThemeColors.grey["300"]} : {backgroundColor: darkThemeColors.grey["800"]}
            }
        },
        MuiDrawer: {
            defaultProps: {
                PaperProps: {
                    sx: themeMode === "light" ?
                        {backgroundColor: lightThemeColors.grey["300"]} : {backgroundColor: darkThemeColors.grey["800"]}
                }
            }
        },
        MuiTypography: {
            defaultProps: {
                sx: {color: themeMode === "light" ? lightThemeColors.text.primary : darkThemeColors.text.secondary}
            }
        },
        MuiButton: {
            defaultProps: {
                variant: "outlined",
            }
        },
        MuiSvgIcon: { /*{sx: {'&:hover': {backgroundColor: "yellow"}}*/},
        MuiToggleButton: {
            defaultProps: {
                /* sx: {border: `1px solid ${(themeMode === "light") ? lightThemeColors.info.main : darkThemeColors.success.main}`}*/
            }
        },
        MuiListItemButton: {
            defaultProps: {
                sx: {
                    "&.Mui-selected": themeMode === "light" ?
                        {backgroundColor: lightThemeColors.grey[300]} : {backgroundColor: lightThemeColors.grey[700]}
                }
            }
        },
        MuiAlert: {
            defaultProps: {
                elevation: 1,
                sx: {
                    backgroundColor: (themeMode === "light")
                        ? lightThemeColors.success.lighter : darkThemeColors.success.darker,
                    '& .MuiAlert-message': {
                        color: (themeMode === "light") ? lightThemeColors.common.black : darkThemeColors.text.primary
                    }
                }
            }
        },
        MuiFilledInput: {
            defaultProps: {
                sx: {
                    backgroundColor: (themeMode === "light") ? lightThemeColors.grey["300"] : darkThemeColors.grey["800"],
                    ":hover": {backgroundColor: (themeMode === "light") ? lightThemeColors.grey["300"] : darkThemeColors.grey["800"]},
                }
            }
        },
        MuiFormControl: {
            defaultProps: {
                sx: {
                    backgroundColor: (themeMode === "light") ? lightThemeColors.grey["300"] : darkThemeColors.grey["800"]
                }
            }
        },
        MuiLink: {
            defaultProps: {
                color: (themeMode === "light") ? lightThemeColors.text.primary : darkThemeColors.text.primary,
                underline: "hover",
                sx: {
                    '&:hover': {color: (themeMode === "light") ? lightThemeColors.text.secondary : darkThemeColors.text.secondary},
                    cursor: "pointer",
                }
            }
        },
        MuiAccordion: {
            defaultProps: {
                sx: {
                    border: (themeMode === "light") ?
                        `1px solid ${lightThemeColors.divider}` : `1px solid ${darkThemeColors.divider}`
                }
            }
        },
        MuiTableHead: {
            defaultProps: {
                sx: {
                    backgroundColor: (themeMode === "light")
                        ? lightThemeColors.grey["100"] : darkThemeColors.grey["1000"]
                }
            }
        },
        MuiTableBody: {
            defaultProps: {
                sx: {
                    backgroundColor: (themeMode === "light") ?
                        lightThemeColors.common.white : darkThemeColors.grey["900"]
                }
            }
        },
    },

})
