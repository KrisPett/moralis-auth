import {Grid, Link} from "@mui/material";
import React, {FC, useState} from "react";
import {makeStyles} from "@mui/styles";
import {Moralis} from "moralis";
import ForgetPasswordDialog from "./ForgetPasswordDialog";
import IconBackButton from "../../../assets/themes/components/IconBackButton";
import InputFieldStyle from "./InputFieldStyle";
import Paper from "@mui/material/Paper";
import {LoginButtonStyled} from "../../../assets/themes/components/LoginButtonStyled";
import {ToggleButton} from "@mui/lab";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import {Box} from "@mui/system";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

interface I {
    showWalletView: boolean,
    setIsEmailView: () => void
}

const EmailLoginBtn: FC<I> = (props) => {
    let theme = useTheme();
    const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));
    const [openDialog, setOpenDialog] = useState(false);
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
        <Box>
            <Paper sx={{width: "100%", padding: isMobileSize ? 5 : 20}}>
                <Grid container>
                    <Grid item mb={5}>
                        <IconBackButton onClick={props.setIsEmailView} title={""}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container direction={"column"} spacing={3} alignItems={"center"}>
                        <Grid item>
                            <InputFieldStyle
                                title={"Enter Email"}
                                onChange={(e: { target: { value: any; }; }) => emailInput(e.target.value)}
                                type={"email"}/>
                        </Grid>
                        <Grid item>
                            <InputFieldStyle
                                title={"Enter Password"}
                                onChange={(e: { target: { value: string; }; }) => passwordInput(e.target.value)}
                                type={"password"}/>
                        </Grid>
                        <Grid container justifyContent={"end"}>
                            <Grid item p={2}>
                                <ForgetPasswordDialog openDialog={openDialog} setOpen={() => setOpenDialog(!openDialog)}/>
                                <Link onClick={() => setOpenDialog(true)}>Forgot Password?</Link>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <ToggleButton onClick={() => signInHandler()}
                                          size={"small"}
                                          value={1}
                                          sx={{border: "0px solid transparent"}}>
                                <ButtonUnstyled component={LoginButtonStyled}>Sign in</ButtonUnstyled>
                            </ToggleButton>
                        </Grid>
                        <Grid item>
                            <ToggleButton onClick={() => createAccountHandler()}
                                          size={"small"}
                                          value={1}
                                          sx={{border: "0px solid transparent"}}>
                                <ButtonUnstyled component={LoginButtonStyled}>Create Account</ButtonUnstyled>
                            </ToggleButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default EmailLoginBtn;