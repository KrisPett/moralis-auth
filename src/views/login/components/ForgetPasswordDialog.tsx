import * as React from 'react';
import {FC, useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import CancelButton from "../../../assets/themes/components/CancelButton";
import InputFieldStyle from "../../../assets/themes/components/InputFieldStyle";
import {Alert, Collapse, Grid, TextField} from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import LoginResetButton from "../../../assets/themes/components/LoginResetButton";
import Typography from "@mui/material/Typography";
import {Moralis} from "moralis";

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

interface Props {
    isOpenDialog: boolean;
    setOpenDialog: () => void
}

const ForgetPasswordDialog = (props: Props) => {
    let theme = useTheme();
    const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));
    const [email, setEmail] = useState("");
    const [isOpenCollapse, setIsOpenCollapse] = useState(false);


    const forgotPassword = () => {
        Moralis.User.requestPasswordReset(email)
            .then(() => {
               props.setOpenDialog()
            }).catch((error) => {
            console.log(error)
            setIsOpenCollapse(!isOpenCollapse)
        })
    };

    return (
        <Dialog
            open={props.isOpenDialog}
            onClose={props.setOpenDialog}
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
                <Typography textAlign={"center"} fontSize={"x-large"}> Reset Password</Typography>
            </DialogTitle>
            <DialogActions>
                <Grid container justifyContent={"center"} direction={"row"} rowSpacing={1}>
                    <Grid container justifyContent={"end"}>
                        <Grid item >
                            <Grid item>
                                <Collapse in={isOpenCollapse}>
                                    <Alert severity="warning">
                                        <Typography variant={"body2"}>
                                            Invalid email
                                        </Typography>
                                    </Alert>
                                </Collapse>
                            </Grid>
                            <Grid item visibility={"hidden"}>
                                <Collapse in={!isOpenCollapse}>
                                    <Alert severity="warning">
                                        <Typography variant={"body2"}>
                                            Invalid email
                                        </Typography>
                                    </Alert>
                                </Collapse>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <InputFieldStyle
                            title={"Enter Email"}
                            onChange={e => setEmail(e.target.value)}
                            onKeyPressEnter={() => console.log(3213)}
                            type={"email"}
                        />
                    </Grid>
                    <Grid container direction={"row"} justifyContent={"space-between"}>
                        <Grid item mt={3}>
                            <CancelButton onClick={props.setOpenDialog} title={"Cancel"}/>
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