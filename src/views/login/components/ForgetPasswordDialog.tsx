import * as React from 'react';
import {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import {makeStyles} from "@mui/styles";
import LoginEmailButton from "../../../assets/themes/components/btns/LoginEmailButton";
import CancelButton from "../../../assets/themes/components/btns/CancelButton";
import InputFieldStyle from "./InputFieldStyle";

const useStyles = makeStyles(() => ({
    container: {
        padding: "50px",
        borderRadius: " 20px",
        boxShadow: "3px 3px 20px white",
        display: "flex",
        alignItems: "center",
        justifyContent: " center",
        flexDirection: "column"
    }
}))

function PaperComponent(props: any) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} className={useStyles().container}/>
        </Draggable>
    );
}

export default function ForgetPasswordDialog(props: any) {

    const [email, setEmail] = useState();

    const handleClose = () => {
        props.setOpen(false);
    };

    const forgotPassword = () => {
     /*   Moralis.User.requestPasswordReset(email)
            .then(() => {
                handleClose()
            }).catch((error) => {
            // Show the error message somewhere
            alert("Error: " + error.code + " " + error.message);*/

    };

    return (
        <div>
            <Dialog
                open={props.openDialog}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
                style={{display: "flex", alignItems: "center", justifyContent: " center"}}
            >
                <DialogTitle style={{
                    cursor: 'move',
                    background: "linear-gradient(to right, hsl(204 100% 62%), hsl(242 100% 59%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"

                }} id="draggable-dialog-title">
                    Reset Password
                </DialogTitle>
                <div style={{margin: "10px"}}>
                    <InputFieldStyle
                        title={"Enter Email"}
                        onChange={(e: { target: { value: React.SetStateAction<undefined>; }; }) => setEmail(e.target.value)}
                        type={"email"}
                    />
                </div>
                <DialogActions>
                    <div style={{margin: "10px"}}>
                        <CancelButton onClick={handleClose} title={"Cancel"}/>
                    </div>
                    <div style={{margin: "10px"}}>
                        <LoginEmailButton onClick={() => forgotPassword()} title={"Reset Password"}/>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    );
}