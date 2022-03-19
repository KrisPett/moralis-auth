import * as React from 'react';
import {styled} from '@mui/system';
import useTheme from "@mui/material/styles/useTheme";

// <InputUnstyled components={{Input: StyledInputElement}} defaultValue={props.inputValue} disabled={isDisabled} onChange={e => props.onChangeTextInput(e)} aria-label={props.ariaLabel}/>

let themeMode = localStorage.getItem("theme")

export const StyledInputElement = styled('input')(({disabled}) => {
        let theme = useTheme();

        return (
            `
  width: 100%;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${themeMode === 'dark' ? theme.palette.grey["500"] : theme.palette.grey["900"]};
  background: ${themeMode === 'dark' ? theme.palette.grey["900"] : theme.palette.grey["200"]};
  border: 3px solid ${disabled ?
                themeMode === 'dark' ? theme.palette.grey["700"] : theme.palette.grey["300"]
                :
                themeMode === 'dark' ? theme.palette.success.dark : theme.palette.success.light};
  border-radius: 8px;
  padding: 10px 10px;
  &:hover {
    background: ${themeMode === 'dark' ? theme.palette.grey["900"] : theme.palette.grey["200"]};
    border-color: ${disabled ?
                themeMode === 'dark' ? theme.palette.grey["600"] : theme.palette.grey["400"]
                :
                themeMode === 'dark' ? theme.palette.success.dark : theme.palette.success.light};
  }
  &:focus {
    outline: 1px solid ${themeMode === 'dark' ? theme.palette.success.light : theme.palette.success.light};
  }
`
        )
    }
);