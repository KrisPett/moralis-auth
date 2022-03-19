import React from 'react';
import {ThemeProvider} from "@mui/material";
import Root from "./root/Root";
import mainTheme from "./assets/themes/mainTheme";

function App() {
    return (
        <ThemeProvider theme={mainTheme}>
            <Root/>
            {/*testssffedeesddddddd*/}
        </ThemeProvider>
    );
}

export default App;
