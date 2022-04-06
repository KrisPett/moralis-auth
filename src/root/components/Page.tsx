import {Helmet, HelmetProvider} from "react-helmet-async";
import {forwardRef} from 'react';
import {Box} from '@mui/material';

interface Props {
    children: JSX.Element;
    title: string ;
}

const Page = forwardRef(({ children, title, ...other }: Props, ref) => (
    <Box ref={ref} {...other}>
        <HelmetProvider>
            <Helmet>
                <title>{title}</title>
               {/* <link rel="icon" type="image/x-icon" href="../../../public/orange.png"/>*/}
            </Helmet>
            {children}
        </HelmetProvider>
    </Box>
));

export default Page;
