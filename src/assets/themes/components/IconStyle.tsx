import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

export default function IconStyle() {
    const theme = useTheme();

    return (
        <IconButton size={"small"}
                    sx={{
                        cursor: "pointer",
                        transition: theme.transitions.create(['background-color', 'transform'], {duration: theme.transitions.duration.standard}),
                        "&:hover": {
                            transform: "scale(1.1)",
                            backgroundColor: "transparent"
                        },
                        "&:active": {
                            transform: "scale(1.3)"
                        }
                    }}
        >
            <Avatar src="/broken-image.jpg"/>
        </IconButton>
    )
}