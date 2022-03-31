import React from 'react';
import {ThemeProvider} from "@mui/material";
import Root from "./root/Root";
import mainTheme from "./assets/themes/mainTheme";
import {useMoralis} from "react-moralis";
import {useNavigate} from "react-router-dom";

function App() {

    return (
        <ThemeProvider theme={mainTheme}>
            <Root/>
        </ThemeProvider>
    );
}

export default App;
