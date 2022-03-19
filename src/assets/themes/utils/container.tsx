import breakpoints from "./breakpoints";

const {values: {xs, sm, md, lg, xl, xxl}} = breakpoints;

const XS = `@media (min-width: ${xs}px)`;
const SM = `@media (min-width: ${sm}px)`;
const MD = `@media (min-width: ${md}px)`;
const LG = `@media (min-width: ${lg}px)`;
const XL = `@media (min-width: ${xl}px)`;

const sharedClasses = {
    marginRight: "auto !important",
    marginLeft: "auto !important",
    width: "100% !important",
    position: "relative",
};

const container = {
    [XS]: {
        ".MuiContainer-root": {
            ...sharedClasses,
            maxWidth: "400px !important",
        },
    },
    [SM]: {
        ".MuiContainer-root": {
            ...sharedClasses,
            maxWidth: "540px !important",
        },
    },
    [MD]: {
        ".MuiContainer-root": {
            ...sharedClasses,
            maxWidth: "720px !important",
        },
    },
    [LG]: {
        ".MuiContainer-root": {
            ...sharedClasses,
            maxWidth: "1000px !important",
        },
    },
    [XL]: {
        ".MuiContainer-root": {
            ...sharedClasses,
            maxWidth: "1500px !important",
        },
    },
};

export default container;
