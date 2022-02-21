import breakpoints from "./breakpoints";

const {values: {xs, sm, md, lg, xl, xxl}} = breakpoints;

const XS = `@media (min-width: ${xs}px)`;
const SM = `@media (min-width: ${sm}px)`;
const MD = `@media (min-width: ${md}px)`;
const LG = `@media (min-width: ${lg}px)`;
const XL = `@media (min-width: ${xl}px)`;
const XXL = `@media (min-width: ${xxl}px)`;

const sharedClasses = {
    marginRight: "auto !important",
    marginLeft: "auto !important",
    width: "100% !important",
    position: "relative",
};

export default {
    [XS]: {
        ".MuiContainer-root": {
            ...sharedClasses,
            maxWidth: "100% !important",
        },
    },
    [SM]: {
        ".MuiContainer-root": {
            ...sharedClasses,
            maxWidth: "100% !important",
        },
    },
    [MD]: {
        ".MuiContainer-root": {
            ...sharedClasses,
            maxWidth: "100% !important",
        },
    },
    [LG]: {
        ".MuiContainer-root": {
            ...sharedClasses,
            maxWidth: "100% !important",
        },
    },
    [XL]: {
        ".MuiContainer-root": {
            ...sharedClasses,
            maxWidth: "100% !important",
        },
    },
    [XXL]: {
        ".MuiContainer-root": {
            ...sharedClasses,
            maxWidth: "100% !important",
        },
    },
};
