import Checkbox from '@mui/material/Checkbox';
import { withStyles } from '@mui/styles';

export const CstmCheckbox = withStyles({
    root: {
      
      "&$disabled": {
        color: '#11783C'
      }
    },
    checked: {},
    disabled: {}
})(Checkbox);