import React, {useState} from 'react';
import {Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import {ToggleButton} from "@mui/lab";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import {LoginButtonStyled} from "../../../assets/themes/components/LoginButtonStyled";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import {useMoralis} from "react-moralis";
import EmailLoginBtn from "./EmailLoginBtn";

export const LoginButtonsPage = () => {
    let theme = useTheme();
    const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));
    const {authenticate, isAuthenticated, isAuthenticating, user, account, logout, Moralis} = useMoralis();
    const [isEmailView, setIsEmailView] = useState(false);

    const test = () => {
        setIsEmailView(!isEmailView);
    }

    return (
        <Grid container justifyContent={"center"} marginTop={15}>
            {!isEmailView ?
                <Paper sx={{padding: isMobileSize ? 5 : 20}}>
                    <Grid container justifyContent={"center"} spacing={5} direction={"column"}>
                        <Grid item>
                            <ToggleButton onClick={() => authenticate({})}
                                          size={"small"} value={1}
                                          sx={{border: "0px solid transparent"}}>
                                <ButtonUnstyled component={LoginButtonStyled}> Metamask Desktop</ButtonUnstyled>
                            </ToggleButton>
                        </Grid>
                        <Grid item>
                            <ToggleButton onClick={() => authenticate({type: "sol"})}
                                          size={"small"}
                                          value={1}
                                          sx={{border: "0px solid transparent"}}>

                                <ButtonUnstyled component={LoginButtonStyled}> Phantom Desktop</ButtonUnstyled>
                            </ToggleButton>
                        </Grid>
                        <Grid item>
                            <ToggleButton onClick={() => authenticate(
                                {
                                    provider: "web3Auth",
                                    clientId: process.env.REACT_APP_WEB3AUTH_CLIENT_ID
                                },
                            )
                            }
                                          size={"small"}
                                          value={1}
                                          sx={{border: "0px solid transparent"}}>
                                <ButtonUnstyled component={LoginButtonStyled}>Web3Auth Desktop</ButtonUnstyled>
                            </ToggleButton>
                        </Grid>
                        <Grid item>
                            <ToggleButton onClick={() => authenticate({provider: "walletconnect", chainId: 56})}
                                          size={"small"}
                                          value={1}
                                          sx={{border: "0px solid transparent"}}>
                                <ButtonUnstyled component={LoginButtonStyled}>Mobile Auth</ButtonUnstyled>
                            </ToggleButton>
                        </Grid>
                        <Grid item>
                            <ToggleButton onClick={() => setIsEmailView(!isEmailView)}
                                          size={"small"}
                                          value={1}
                                          sx={{border: "0px solid transparent"}}>
                                <ButtonUnstyled component={LoginButtonStyled}> Email Login</ButtonUnstyled>
                            </ToggleButton>
                        </Grid>
                    </Grid>
                </Paper>
                :
                <EmailLoginBtn showWalletView={isEmailView} setIsEmailView={test}/>
            }


        </Grid>
    );
};