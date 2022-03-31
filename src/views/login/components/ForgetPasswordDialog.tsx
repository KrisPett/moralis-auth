import * as React from 'react';
import {FC, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import CancelButton from "../../../assets/themes/components/CancelButton";
import InputFieldStyle from "./InputFieldStyle";
import {Grid} from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import LoginResetButton from "../../../assets/themes/components/LoginResetButton";
import Typography from "@mui/material/Typography";

function PaperComponent(props: any) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

interface I {
    openDialog: boolean;
    setOpen: () => void
}

const ForgetPasswordDialog: FC<I> = (props) => {
    let theme = useTheme();
    const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));

    const [email, setEmail] = useState();

    /*   const handleClose = () => {
           props.setOpen(false);
       };*/

    const forgotPassword = () => {
        /*   Moralis.User.requestPasswordReset(email)
               .then(() => {
                   handleClose()
               }).catch((error) => {
               // Show the error message somewhere
               alert("Error: " + error.code + " " + error.message);*/

    };

    return (
        <Dialog
            open={props.openDialog}
            onClose={props.setOpen}
            PaperComponent={PaperComponent}
            fullWidth
            PaperProps={{sx: {padding: 3}}}
            sx={{marginLeft: isMobileSize ? 0 : 28}}
        >
            <DialogTitle sx={{
                background: "linear-gradient(to right, hsl(204 100% 62%), hsl(242 100% 59%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}
            >
                <Typography textAlign={"center"} variant={"h5"}> Reset Password</Typography>
            </DialogTitle>
            <DialogActions>
                <Grid container justifyContent={"center"} direction={"row"} rowSpacing={1}>
                    <Grid item xs={12}>
                        <InputFieldStyle
                            title={"Enter Email"}
                            onChange={(e: { target: { value: React.SetStateAction<undefined>; }; }) => setEmail(e.target.value)}
                            type={"email"}
                        />
                    </Grid>
                    <Grid container direction={"row"} justifyContent={"space-between"}>
                        <Grid item mt={3}>
                            <CancelButton onClick={props.setOpen} title={"Cancel"}/>
                        </Grid>
                        <Grid item mt={3}>
                            <LoginResetButton onClick={() => forgotPassword()} title={"Reset Password"}/>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogActions>
        </Dialog>
    );
}

export default ForgetPasswordDialog;