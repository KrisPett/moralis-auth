import React from 'react';
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import mainTheme from "./assets/themes/mainTheme";
import {RootModelProvider} from "./root/RootModelContext";
import MainRoutes from "./routes/MainRoutes";

function App() {
    return (
        <ThemeProvider theme={mainTheme}>
            <RootModelProvider>
                <Container>
                    <CssBaseline/>
                    <MainRoutes/>
                </Container>
            </RootModelProvider>
        </ThemeProvider>
        /*dwd*/
    );
}

export default App;
