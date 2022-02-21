import React, {useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import MainRoutes from "../routes/MainRoutes";
import SideMenu from "./components/SideMenu";
import {RootViewProvider} from "./RootViewContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Container, CssBaseline} from "@mui/material";

const Root = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <RootViewProvider>
            <BrowserRouter>
                <CssBaseline/>
                <Container>
                    <Header onMenuClick={() => setIsOpen(!isOpen)}/>
                    <SideMenu isOpen={isOpen} closeSideMenu={() => setIsOpen(false)}/>
                    <MainRoutes/>
                    <Footer/>
                </Container>
            </BrowserRouter>
        </RootViewProvider>
    );
};

export default Root;