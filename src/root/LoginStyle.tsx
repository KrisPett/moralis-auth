import {Outlet} from 'react-router-dom';
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import React, {useState} from "react";
import {Box} from "@mui/system";

export default function LoginStyle() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box sx={{
            marginLeft: {xs: "0px", md: "250px"},
            minHeight: "90vh"
        }}>
            <Header onMenuClick={() => setIsOpen(!isOpen)}/>
            <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            <Outlet/>
        </Box>
    );
}