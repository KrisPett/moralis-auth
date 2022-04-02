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

interface Props {
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    onKeyPressEnter: () => void;
    title: string;
    type: string;
}

const InputFieldStyle = (props: Props) => {
    return (
        <Box
            onKeyPress={(e: { key: string; }) => {
                if (e.key === "Enter") props.onKeyPressEnter()
            }}
        >
            <CssTextField
                label={props.title}
                fullWidth
                type={props.type}
                onChange={props.onChange}/>
        </Box>
    );
}

export default InputFieldStyle