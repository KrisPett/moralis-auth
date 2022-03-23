import React from 'react';
import {Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import {ToggleButton} from "@mui/lab";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import {LoginButtonStyled} from "../../../assets/themes/components/LoginButtonStyled";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";

export const LoginButtonList = () => {
    let theme = useTheme();
    const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container justifyContent={"center"} marginTop={15} >
            <Paper sx={{padding: isMobileSize ? 5 : 20}}>
                <Grid container justifyContent={"center"} spacing={5} direction={"column"} >
                    <Grid item>
                        <ToggleButton onClick={() => console.log(12321)}
                                      size={"small"} value={1}
                                      sx={{border: "0px solid transparent"}}>
                            <ButtonUnstyled component={LoginButtonStyled}> Metamask Desktop(test)</ButtonUnstyled>
                        </ToggleButton>
                    </Grid>
                    <Grid item>
                        <ToggleButton onClick={() => console.log(12321)}
                                      size={"small"}
                                      value={1}
                                      sx={{border: "0px solid transparent"}}>
                            <ButtonUnstyled component={LoginButtonStyled}> Metamask Mobile</ButtonUnstyled>
                        </ToggleButton>
                    </Grid>
                    <Grid item>
                        <ToggleButton onClick={() => console.log(12321)}
                                      size={"small"}
                                      value={1}
                                      sx={{border: "0px solid transparent"}}>
                            <ButtonUnstyled component={LoginButtonStyled}> Phantom Mobile</ButtonUnstyled>
                        </ToggleButton>
                    </Grid>
                    <Grid item>
                        <ToggleButton onClick={() => console.log(12321)}
                                      size={"small"}
                                      value={1}
                                      sx={{border: "0px solid transparent"}}>
                            <ButtonUnstyled component={LoginButtonStyled}> Email Login</ButtonUnstyled>
                        </ToggleButton>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
};