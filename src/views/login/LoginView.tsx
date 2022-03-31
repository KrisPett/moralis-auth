import {Container} from "@mui/material";
import React from "react";
import {LoginButtonList} from "./components/LoginButtonList";
import Box from "@mui/material/Box";

const LoginView = () => {
    return (
        <Container>
            <Box sx={{
                marginLeft: {xs: "0px", md: "250px"},
                marginTop: 10,
                minHeight: "90vh"
            }}>
                <LoginButtonList/>
            </Box>
        </Container>

    )
};

export default LoginView;