import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

export const CstmDialog = styled(Dialog)({
    "& > .MuiDialog-container > .MuiPaper-root": {
        borderRadius:'10px'
    }
}); 