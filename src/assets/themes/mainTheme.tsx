import { createTheme} from "@mui/material";
import globals from "./globals";
import createShadow from "./utils/shadows";
import breakpoints from "./utils/breakpoints";
import container from "./utils/container";
import colors from "./utils/colors";

export default createTheme({
    // @ts-ignore
    palette: {...colors, mode: "light"},
    typography: {},
    breakpoints: {...breakpoints},
    shape: {},
    // @ts-ignore
    shadows: createShadow(colors.grey["300"]),
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ...globals,
                ...container
            },
        },
        // @ts-ignore
  /*      MuiCard: {...cardStyle},
        // @ts-ignore
        MuiButton: {...buttonStyle},*/
 /*       MuiGrid: {defaultProps: {style: {}}},
        MuiTextField: {defaultProps: {}},
        MuiPopover: {defaultProps: {}},
        MuiPaper: {defaultProps: {}},*/
        MuiButton: {defaultProps:{variant: "contained"}}

    },
});
