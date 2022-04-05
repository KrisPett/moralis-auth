import {Container} from "@mui/material";
import React from "react";
import {LoginButtonsPage} from "./components/LoginButtonsPage";
import Page from "../../root/components/Page";

const LoginView = () => {
    return (
        <Page title={"ChainQT3"}>
            <Container>
                <LoginButtonsPage/>
            </Container>
        </Page>
    )
};

export default LoginView;