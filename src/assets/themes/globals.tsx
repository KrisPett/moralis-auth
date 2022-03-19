import lightThemeColors from "./utils/lightThemeColors";

const {info, grey } = lightThemeColors;

const globals = {
    "*, *::before, *::after": {
        margin: 0,
        padding: 0,
    },
    body: {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue, sans-serif'",
        webkitFontSmoothing: "antialiased",
        mozOsxFontSmoothing: "grayscale",
    },
    code: {
        fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
    },
    '*::-webkit-scrollbar': {
        width: '20px'
    },
    '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(34,45,58,0.53)',
        borderRadius: '20px',
        border: '6px solid transparent',
        backgroundClip: 'content-box'
    },
    '::-webkit-scrollbar-thumb:hover': {
        backgroundColor: 'rgba(69,86,100,0.52)'
    }
};

export default globals;
