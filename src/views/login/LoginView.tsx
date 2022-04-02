import {Container} from "@mui/material";
import React from "react";
import {LoginButtonsPage} from "./components/LoginButtonsPage";
import Box from "@mui/material/Box";

const LoginView = () => {
    return (
        <Container>
            <Box sx={{
                marginLeft: {xs: "0px", md: "250px"},
                marginTop: 10,
                minHeight: "90vh"
            }}>
                <LoginButtonsPage/>
            </Box>
        </Container>

    )
};

export default LoginView;