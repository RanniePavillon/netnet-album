import { Button } from "@mui/material";
import { makeStyles, createStyles } from '@mui/styles';

export const Buttons = (props) =>{
    let bgColor;
    let color;
    let hovColor;
    if (props.color === 'primary') {
        bgColor = '#11783C';
        color = '#FFFFFF';
        hovColor = '#035827';
    }else if(props.color === 'secondary'){
        bgColor = '#ffb347';
        color = '#FFFFFF';
        hovColor = '#ffb347';
    }else if(props.color === 'disabled' || props.disabled){
        bgColor = '#AEE1C3';
        color = '#6EC49A';
        hovColor = '#AEE1C3';
    }else if(props.color === 'cancel'){
        bgColor = '#D3D3D3';
        color = '#121212';
        hovColor = '#D3D3D3';
    }else if(props.color === 'default'){
        bgColor = '#64CC90';
        color = '#FFFFFF';
        hovColor = '#127A3E';
    }else{
        if (props.color === '#ffffff') {
            bgColor = props.color;
            color = '#000000';
            hovColor = props.color;
        }else{
            bgColor = props.color;
            color = '#FFFFFF';
            hovColor = props.color;
        }
    }
    
    const useStyles = makeStyles(() =>
        createStyles({
            btn:{
                margin:props.margin,
                textTransform:'none',
                backgroundColor: props.variant === 'contained' ? bgColor :'none',
                border:`${props.disabled ? '' : bgColor} solid 1px`,
                color: props.variant === 'contained' ? color : '#000000',
                width:props.width,
                height:props.height,
                fontSize:props.fontSize,
                borderRadius:props.borderRadius,
                // fontFamily: [
                //     '-apple-system',
                //     '"Poppins"',
                // ].join(','),
                '&:hover': {
                    backgroundColor: hovColor,
                    color:color,
                },
            }
        }),
    );
    const classes = useStyles();
    return (
        <Button disabled={props.disabled} onClick={props.event} startIcon={props.startIcon} className={classes.btn} variant={props.variant} >{props.text}</Button>
    )
}