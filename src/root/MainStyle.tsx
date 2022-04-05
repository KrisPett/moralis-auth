import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {Box} from "@mui/system";

export default function MainStyle() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box sx={{
            marginLeft: {xs: "0px", md: "250px"},
            marginTop: 10,
            minHeight: "90vh"
        }}>
            <Header onMenuClick={() => setIsOpen(!isOpen)}/>
            <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            <Outlet/>
        </Box>
    );
}