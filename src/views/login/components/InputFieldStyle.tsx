import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'green',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'blue',
        },
        '&:hover fieldset': {
            borderColor: 'green',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
});

const InputFieldStyle = (props: any) => {
    return (
        <Box
            component="form"
            noValidate
            onChange={props.onChange}
        >
            <CssTextField label={props.title} fullWidth type={props.type}/>
        </Box>
    );
}

export default InputFieldStyle