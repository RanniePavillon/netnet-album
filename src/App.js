import { Box, Container, useMediaQuery } from '@mui/material';
import { WebRoute } from './core/webrouter/Route';

export const App = () => {
    const xl = useMediaQuery('(min-width:1921px)');

    return (
        <Box component={xl ? Container : ''} px={2} pb={10}>
            <WebRoute/>
        </Box>
    );
}