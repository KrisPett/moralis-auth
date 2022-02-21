import colors from "./utils/colors";

const {info, dark} = colors;

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
        fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace"
    },
    "a, a:link, a:visited": {
        textDecoration: "none !important",
    },
    "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
        color: `${dark.main} !important`,
        transition: "color 150ms ease-in !important",
    },
    "a.link:hover, .link:hover, a.link:focus, .link:focus": {
        color: `${info.main} !important`,
    },
};

export default globals;
