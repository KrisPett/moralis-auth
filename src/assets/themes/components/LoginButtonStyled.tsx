import * as React from 'react';
import {forwardRef, LegacyRef} from 'react';
import {buttonUnstyledClasses} from '@mui/base/ButtonUnstyled';
import {styled} from '@mui/system';
import lightThemeColors from "../utils/lightThemeColors";
import darkThemeColors from "../utils/darkThemeColors";

let themeMode = localStorage.getItem("theme")

const ButtonRoot = forwardRef((props, ref: LegacyRef<SVGSVGElement> | undefined) => {
    const {children, ...other} = props;

    return (
        <svg width="250"
             height="50"
             {...other}
             ref={ref}
             style={{boxShadow: `5px 5px 10px ${themeMode === "light" ? lightThemeColors.info.main : darkThemeColors.info.dark}`}}>
            <polygon points="0,50 0,0 250,0 250,50" className="bg"/>
            <polygon points="0,50 0,0 250,0 250,50" className="borderEffect"/>
            <foreignObject x="0" y="0" width="250" height="50">
                <div className="content">{children}</div>
            </foreignObject>
        </svg>
    );
});

export const LoginButtonStyled = styled(ButtonRoot)(
    ({theme}) => {
        return (
            `
  overflow: visible;
  cursor: pointer;
  --main-color: ${themeMode === 'light' ? lightThemeColors.primary.main : darkThemeColors.primary.main};
  --hover-color: ${themeMode === 'light' ? lightThemeColors.grey["50"] : darkThemeColors.grey["800"]};
  --active-color: ${themeMode === 'light' ? lightThemeColors.grey["100"] : darkThemeColors.grey["800"]};
  & polygon {
    fill: transparent;
    transition: all 1500ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }
  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 5;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }
  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }
    .bg {
      fill: var(--hover-color);
    }
  }
  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: 0px solid transparent;
    outline-offset: 2px;
  }
  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }
  & foreignObject {
    pointer-events: none;
    & .content {
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif;
      font-weight: 600;
      line-height: 1.5;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
    }
    & svg {
      margin: 0 5px;
    }
  }`
        )
    }
);
