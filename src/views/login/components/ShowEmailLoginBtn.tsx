import {Grid, Link} from "@mui/material";
import React, {useState} from "react";
import {makeStyles} from "@mui/styles";
import {Moralis} from "moralis";
import ForgetPasswordDialog from "./ForgetPasswordDialog";
import LoginEmailButton from "../../../assets/themes/components/LoginEmailButton";
import IconBackButton from "../../../assets/themes/components/IconBackButton";
import InputFieldStyle from "./InputFieldStyle";

const useStyles = makeStyles({
    container: {
        backgroundColor: "yellowgreen",
        borderRadius: "20px",
        boxShadow: "10px 5px 10px grey"
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    link: {
        "&:hover": {
            cursor: "pointer"
        }
    }
});

const ShowEmailLoginBtn = (props: { showWalletView: (arg0: boolean) => any; }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [closeDialog, setcloseDialogOpen] = useState(false);
    const userData = {email: "", password: ""}
    const emailInput = (value: string) => userData.email = value;
    const passwordInput = (value: string) => userData.password = value;

    const signInHandler = async () => {
        /* await Moralis.User.logIn(userData.email, userData.password)
             .catch((error) => {
                 // Show the error message somewhere
                 alert("Error: " + error.code + " " + error.message)
             })*/
        //SendEmail
        //await Moralis.Cloud.run("sendEmailToUser", {})
        //window.location.reload(true);
    };

    const createAccountHandler = async () => {
        const user = new Moralis.User();
        user.set("username", userData.email);
        user.set("password", userData.password);
        user.set("email", userData.email);
        user.set("phone", "415-392-0202");
        try {
            await user.signUp();
        } catch (error) {
            // @ts-ignore
            alert("Error: " + error.code + " " + error.message);
        }
    };

    return (
        <div>
            <div style={{marginBottom: " 10px"}}>
                <IconBackButton onClick={() => props.showWalletView(true)} title={""}/>
            </div>
            <Grid container direction={"column"} alignItems={"center"} justifyContent={"center"}>
                <Grid item>
                    <InputFieldStyle
                        title={"Enter Email"}
                        onChange={(e: { target: { value: any; }; }) => emailInput(e.target.value)}
                        type={"email"}/>
                </Grid>
                <Grid item m={3}>
                    <InputFieldStyle
                        title={"Enter Password"}
                        onChange={(e: { target: { value: any; }; }) => passwordInput(e.target.value)}
                        type={"password"}/>
                </Grid>
                <Grid container justifyContent={"end"} alignItems={"end"}>
                    <Grid item>
                        <ForgetPasswordDialog openDialog={open} setOpen={setOpen}/>
                        <Link className={classes.link} onClick={() => setOpen(true)}>Forgot Password?</Link>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item m={5}>
                        <LoginEmailButton onClick={() => signInHandler()} title={"Sign in"}/>
                    </Grid>
                    <Grid item m={5}>
                        <LoginEmailButton onClick={() => createAccountHandler()} title={"Create Account"}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ShowEmailLoginBtn;