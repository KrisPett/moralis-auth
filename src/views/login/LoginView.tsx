import {Container} from "@mui/material";
import React, {useState} from "react";
import {LoginButtonList} from "./components/LoginButtonList";

const LoginView = () => {
    return (
        <Container>
            <LoginButtonList/>
        </Container>

    )
};

export default LoginView;