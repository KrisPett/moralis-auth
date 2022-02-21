import {Grid} from "@mui/material";
import React, {useState} from "react";
import {makeStyles} from "@mui/styles";
import ShowEmailLoginBtn from "./ShowEmailLoginBtn";
import LoginButton from "../../../assets/themes/components/btns/LoginButton";
import colors from "../../../assets/themes/utils/colors";

const useStyles = makeStyles({
    container: {
        backgroundColor: colors.sidenav.button,
        borderRadius: "20px",
        boxShadow: "10px 5px 10px grey"
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "100px",
    },
    link: {
        "&:hover": {
            cursor: "pointer"
        }
    }
});

function showWalletBtn(setShowWalletView: (value: (((prevState: boolean) => boolean) | boolean)) => void) {
    return <>
        <div>
            <LoginButton onClick={() => console.log("Metamask Desktop")} title={"Metamask Desktop"}/>
        </div>
        <div style={{margin: "10%"}}>
            <LoginButton onClick={() => console.log("Metamask Desktop")}
                         title={"Metamask Mobile"}/>
        </div>
        <div>
            <LoginButton onClick={() => console.log("Metamask Desktop")}
                         title={"Phantom Mobile"}/>
        </div>
        <div style={{margin: "10%"}}>
            <LoginButton onClick={() => setShowWalletView(false)}
                         title={"Email Login"}/>
        </div>
    </>;
}

const Login = () => {
    const classes = useStyles();
    const [showWalletView, setShowWalletView] = useState(true);

    return <Grid container>
        <Grid item className={classes.container}>
            <div className={classes.buttonContainer}>
                {showWalletView ? showWalletBtn(setShowWalletView)
                    :
                    <ShowEmailLoginBtn showWalletView={setShowWalletView}/>}
            </div>
        </Grid>
    </Grid>;
}

export default Login;