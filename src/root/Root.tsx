import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import MainRoutes from "../routes/MainRoutes";
import SideMenu from "./components/SideMenu";
import Header from "./components/Header";
import {Container, CssBaseline} from "@mui/material";
import {RootModelProvider} from "./RootModelContext";

const Root = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <RootModelProvider>
            <BrowserRouter>
                <CssBaseline/>
                <Container>
                    <Header onMenuClick={() => setIsOpen(!isOpen)}/>
                    <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)}/>
                    <MainRoutes/>
                </Container>
            </BrowserRouter>
        </RootModelProvider>
    );
};

export default Root;