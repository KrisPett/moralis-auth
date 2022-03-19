import React, {ChangeEvent, FC, useContext, useEffect, useState} from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import {ProfileModelContext} from '../ProfileModelContext'
import {ProfileViewModel} from '../ProfileViewModel'
import {Alert, Collapse, Grid, Input, ToggleButton} from '@mui/material'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import {StyledInputElement} from '../../../assets/themes/components/StyledInputElement'
import useMediaQuery from '@mui/material/useMediaQuery'
import useTheme from '@mui/material/styles/useTheme'
import InputUnstyled from '@mui/base/InputUnstyled'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'

interface IInputRow {
    title: string
    inputValue: string
    onClickButtonEdit: () => void
    onChangeTextInput: (e: ChangeEvent<HTMLInputElement>) => void
    ariaLabel: string
}

export const TextfieldInputRow: FC<IInputRow> = props => {
    let theme = useTheme()
    const isMobileScreenSize = useMediaQuery(theme.breakpoints.down('lg'))
    const [isDisabled, setIsDisabled] = useState(true)

    const onClickButtonEdit = () => {
        setIsDisabled(!isDisabled)
        props.onClickButtonEdit()
    }

    return (
        <Grid
            container
            direction={isMobileScreenSize ? 'column' : 'row'}
            justifyContent={isMobileScreenSize ? 'center' : 'space-between'}
            mt={1}
            mb={1}
        >
            <Grid item>
                <Typography variant={'body1'}>{props.title}</Typography>
            </Grid>
            <Grid item xs={10}>
                <Grid container justifyContent={isMobileScreenSize ? 'space-between' : 'center'} alignItems={'center'}>
                    <Grid item xs={9}>
                        <InputUnstyled
                            components={{Input: StyledInputElement}}
                            defaultValue={props.inputValue}
                            disabled={isDisabled}
                            onChange={e => props.onChangeTextInput(e)}
                            aria-label={props.ariaLabel}
                        />
                    </Grid>
                    <Grid item xs={2} ml={1}>
                        <ToggleButton
                            size={'medium'}
                            onClick={() => onClickButtonEdit()}
                            value={"check"}
                            selected={isDisabled}
                            sx={{border: isDisabled ? "2px solid transparent" : `2px solid ${theme.palette.success.main}`}}
                        >
                            {!isDisabled ? <CheckIcon/> : <ModeEditIcon/>}
                        </ToggleButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

interface IUserForm {
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
}

const Profile = () => {
    let theme = useTheme();
    const isMobileSize = useMediaQuery(theme.breakpoints.down('sm'));
    const profileData = useContext<ProfileViewModel>(ProfileModelContext);
    const [textValue, setTextValue] = useState(profileData.firstName);
    const [textInputData, setTextInputData] = useState<IUserForm>({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        phoneNumber: ""
    });
    const [openSaveAlert, setOpenSaveAlert] = useState(false);

    const onClickButtonEdit = () => {
        if (profileData.firstName !== textValue) {
            setOpenSaveAlert(true)
            setTimeout(() => {
                setOpenSaveAlert(false)
            }, 5000);
        }
    };

    useEffect(() => {
        setTextValue(profileData.firstName)
    }, [openSaveAlert])

    const onChangeTextInput = (textInputLabel: ChangeEvent<HTMLInputElement>) => {
        setTextValue(textInputLabel.target.value)
        setTextInputData({...textInputData, [textInputLabel.target.ariaLabel as string]: textInputLabel.target.value})
    }

    return (
        <Grid container>
            <Grid container justifyContent={'space-between'}>
                <Grid item mb={3}>
                    <Typography variant={isMobileSize ? 'h6' : 'h4'}>
                        Inställningar
                    </Typography>
                </Grid>
                <Grid item>
                    <Collapse in={openSaveAlert}>
                        <Alert
                            action={
                                <IconButton size='small' onClick={() => setOpenSaveAlert(false)}>
                                    <CloseIcon/>
                                </IconButton>
                            }
                        >
                            Sparad!
                        </Alert>
                    </Collapse>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Paper sx={{padding: 3}}>
                        <Grid container direction={'row'} alignItems={'center'}>
                            <Grid item>
                                <Avatar sx={{width: 70, height: 70}}/>
                            </Grid>
                            <Grid item m={3}>
                                <label htmlFor='contained-button-file'>
                                    <Input
                                        id='contained-button-file'
                                        type='file'
                                        sx={{display: 'none'}}
                                    />
                                    <Button component='span'>
                                        Ladda Upp Bild
                                    </Button>
                                </label>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item mt={3} mb={1}>
                    <Typography variant={'h6'}>Personuppgifter</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{padding: 5}}>
                        <TextfieldInputRow
                            title={'Förnamn'}
                            inputValue={profileData.firstName}
                            onClickButtonEdit={onClickButtonEdit}
                            onChangeTextInput={onChangeTextInput}
                            ariaLabel={"firstName"}
                        />
                        <TextfieldInputRow
                            title={'Efternamn'}
                            inputValue={profileData.lastName}
                            onClickButtonEdit={onClickButtonEdit}
                            onChangeTextInput={onChangeTextInput}
                            ariaLabel={"lastName"}
                        />
                        <TextfieldInputRow
                            title={'Epost'}
                            inputValue={profileData.email}
                            onClickButtonEdit={onClickButtonEdit}
                            onChangeTextInput={onChangeTextInput}
                            ariaLabel={"email"}
                        />
                        <TextfieldInputRow
                            title={'Telefonnummer'}
                            inputValue={profileData.phoneNumber}
                            onClickButtonEdit={onClickButtonEdit}
                            onChangeTextInput={onChangeTextInput}
                            ariaLabel={"phoneNumber"}
                        />
                    </Paper>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item mt={3} mb={1} xs={12}>
                    <Typography>Lösenord</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{padding: 5}}>
                        <TextfieldInputRow
                            title={'Lösenord'}
                            inputValue={profileData.password}
                            onClickButtonEdit={onClickButtonEdit}
                            onChangeTextInput={onChangeTextInput}
                            ariaLabel={"password"}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Profile
