import {Alert, Collapse, Grid, Link, ToggleButton} from "@mui/material";
import React, {useState} from "react";
import {Moralis} from "moralis";
import ForgetPasswordDialog from "./ForgetPasswordDialog";
import IconBackButton from "../../../assets/themes/components/IconBackButton";
import InputFieldStyle from "../../../assets/themes/components/InputFieldStyle";
import Paper from "@mui/material/Paper";
import {LoginButtonStyled} from "../../../assets/themes/components/LoginButtonStyled";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import {Box} from "@mui/system";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

interface Props {
    showWalletView: boolean,
    setIsEmailView: () => void
}

const EmailLoginBtn = (props: Props) => {
    let theme = useTheme();
    const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));
    const [openDialog, setOpenDialog] = useState(false);
    const [isOpenCollapse, setIsOpenCollapse] = useState(false);
    const [inputData, setInputData] = useState({email: "", password: ""});

    const signInHandler = async () => {
        await Moralis.User.logIn(inputData.email, inputData.password)
            .then(() => window.location.reload())
            .catch((error) => {
                console.log(error)
                setIsOpenCollapse(true)
            })
    };

    const createAccountHandler = async () => {
         const user = new Moralis.User();
         user.set("username", inputData.email);
         user.set("password", inputData.password);
         user.set("email", inputData.email);
         user.set("phone", "415-392-0202");
         try {
             await user.signUp()
                 .then(value => window.location.reload());
         } catch (error) {
             console.log(error)
             setIsOpenCollapse(!isOpenCollapse)
         }
    };

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputData({...inputData, [e.target.type as string]: e.target.value})
    };

    return (
        <Box>
            <Paper sx={{
                width: "100%",
                paddingLeft: isMobileSize ? 5 : 20,
                paddingRight: isMobileSize ? 5 : 20,
                paddingBottom: isMobileSize ? 5 : 15,
                paddingTop: isMobileSize ? 5 : 15,
            }}
            >
                <Grid container>
                    <Grid item mb={5}>
                        <IconBackButton onClick={props.setIsEmailView} title={""}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container direction={"column"} spacing={3} alignItems={"center"}>
                        <Grid item>
                            <Grid item m={2}>
                                <Grid item>
                                    <Collapse in={isOpenCollapse}>
                                        <Alert severity="warning">
                                            <Typography variant={"body2"}>
                                                Invalid username or password
                                            </Typography>
                                        </Alert>
                                    </Collapse>
                                </Grid>
                                <Grid item visibility={"hidden"}>
                                    <Collapse in={!isOpenCollapse}>
                                        <Alert severity="warning">
                                            <Typography variant={"body2"}>
                                                Invalid username or password
                                            </Typography>
                                        </Alert>
                                    </Collapse>
                                </Grid>
                            </Grid>
                            <Grid item mb={2}>
                                <InputFieldStyle
                                    onKeyPressEnter={() => signInHandler()}
                                    title={"Enter Email"}
                                    onChange={e => inputHandler(e)}
                                    type={"email"}
                                />
                            </Grid>
                            <Grid item>
                                <InputFieldStyle
                                    onKeyPressEnter={() => signInHandler()}
                                    title={"Enter Password"}
                                    onChange={e => inputHandler(e)}

                                    type={"password"}/>
                            </Grid>
                            <Grid container justifyContent={"end"}>
                                <Grid item mt={1}>
                                    <ForgetPasswordDialog isOpenDialog={openDialog}
                                                          setOpenDialog={() => setOpenDialog(!openDialog)}
                                    />
                                    <Link onClick={() => setOpenDialog(true)}>Forgot Password?</Link>
                                </Grid>
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