import { Box, Button } from '@mui/material'
import { buttonstyle } from '../../core/forms/Buttons';
import { useHistory } from 'react-router-dom';

export const MyPic = ({match}) => {
    const classes = buttonstyle();
    const history = useHistory()
    const months  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    const handleClick = (months, year = 0) => {
        history.push(`${match.path}/${year}/${months}`)
    };
  
    return (
        <Box withd="100%" textAlign="center" pt="32px">
            <Box component="h1" fontWeight={700} color="#165320" py="32px"> My Months </Box>  
            <Box width="100%" height="100%" display="grid" gridTemplateColumns="repeat(auto-fill,minmax(100px,1fr))" gap="12px">
                {months.map((t,i) => (
                    <Box onClick={()=>handleClick(t)} component={Button} disableFocusRipple={true} className={classes.btnbiz} key={i} minWidth="100px" borderRadius="6px" display="flex" flexDirection="column" alignItems="center" gap="12px" py="8px" bgcolor="#F8F9FA">
                        <Box fontSize={12} fontWeight={400} lineHeight="19px" width="100%" sx={{wordBreak: 'break-word'}} color="#283745">{t} {t === 1 ? 'Month' : 'Months'} </Box>
                    </Box>
                ))}
            </Box>
            <Box component="h1" fontWeight={700} color="#165320" py="32px"> My Parents </Box>  
            <Box width="100%" height="100%" display="grid" gridTemplateColumns="repeat(auto-fill,minmax(130px,1fr))" gap="12px">
                {['Mommy Jizzi', 'Daddy Rannie'].map((t,i) => (
                    <Box component={Button} disableFocusRipple={true} className={classes.btnbiz} key={i} minWidth="130px" borderRadius="6px" display="flex" flexDirection="column" alignItems="center" gap="12px" py="8px" bgcolor="#F8F9FA">
                        <Box fontSize={16} fontWeight={400} lineHeight="19px" width="100%" sx={{wordBreak: 'break-word'}} color="#283745">{t}</Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}