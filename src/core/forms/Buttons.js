import { makeStyles } from '@mui/styles'

export const buttonstyle = () => {
    let s = makeStyles(theme => ({
        btnpsl:{
            textTransform:'none',
            border:"2px solid transparent",
            '&:focus': {
                borderRadius: '8px',
                border: '2px solid var(--wireframe_colors-blue, #1E92FD)',
                background: 'var(--wireframe_colors-01, #F0F5F9)',
                boxShadow: '0px 0px 0px 4px rgba(29, 146, 253, 0.24)'
            },
        },
        btnbiz:{
            backgroundColor:'pink',
            textTransform:'none',
            border:"2px solid transparent",
            '&:focus': {
                borderRadius: '8px',
                border: '2px solid var(--business_ui_colors-primary_color, #107038)',
                background: 'var(--wireframe_colors-01, #F0F5F9)',
                boxShadow: '0px 0px 0px 4px rgba(22, 83, 32, 0.24)'
            },
        },
       
    }));

    return s()
}