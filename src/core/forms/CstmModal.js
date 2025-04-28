import { useState } from 'react';
import { Backdrop, Box, Snackbar, Divider, useMediaQuery, Modal, Button, IconButton, Slide, Typography } from '@mui/material';
import { MActionIcon, SuccessIcon } from '../Icons';
import { SnakeLoader } from '../../loader/SnakeLoader';
import { Loader } from '../../../components/fetching/Loader';
import { Buttons } from './Button';
import Email from '../../../assets/images/assetLogo/Email.png';
import question from '../../../assets/images/assetLogo/question.png';
import CloseIcon from '@mui/icons-material/Close';

export const IconConfirm = ({fill="#d9fbe7"}) =>{
    return (
        <Box mx={2} my={2}>
            <svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" viewBox="0 0 125 125">
                <g id="Group_49025" data-name="Group 49025" transform="translate(-185 -655)">
                    <circle id="Ellipse_4143" data-name="Ellipse 4143" cx="62.5" cy="62.5" r="62.5" transform="translate(185 655)" fill={fill}/>
                    <g id="Group_47893" data-name="Group 47893" transform="translate(237.905 686.796)">
                        <path id="Icon_awesome-exclamation" data-name="Icon awesome-exclamation" d="M20.314,9.595A9.595,9.595,0,1,0,10.72,19.19,9.606,9.606,0,0,0,20.314,9.595ZM2.236,58.385,3.867,25.762a2.878,2.878,0,0,1,2.875-2.735H14.7a2.878,2.878,0,0,1,2.875,2.735L19.2,58.385a2.878,2.878,0,0,1-2.875,3.022H5.11A2.878,2.878,0,0,1,2.236,58.385Z" transform="translate(-1.125 0)" fill="#11783c"/>
                    </g>
                </g>
            </svg>
        </Box>
    )
}
export const ArrowUp = () =>{
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <defs>
                <clipPath id="clip-path">
                <rect id="Rectangle_26160" data-name="Rectangle 26160" width="40" height="40" transform="translate(-20790 -16805)" fill="#fff"/>
                </clipPath>
            </defs>
            <g id="Mask_Group_2602" data-name="Mask Group 2602" transform="translate(20790 16805)" clipPath="url(#clip-path)">
                <g id="Group_49032" data-name="Group 49032" transform="translate(-20781.695 -16801.824)">
                <path id="Path_70804" data-name="Path 70804" d="M23,32.121l1.442-1.483,1.239.168,3.048,2.947,2.445,2.378v-8.34l.368-12.426,1.072-1.574h1.742L35.5,14.9l.3,4.823V25.48h2.056l1.631,1.348,2.47.122,1.22,1.22,1.883.544,1.176,2.091v8.44l-.261,1.747-.3.827-1.317,1.73L43.1,45.591l-.456,1.869h-9.8l-.736-2.6-4.825-5.611Z" transform="translate(-23.002 -13.791)" fill="#fff"/>
                </g>
                <path id="Path_70803" data-name="Path 70803" d="M22.7,25.918l-.017-8.09c0-1.12-1.209-2.925-2.339-2.524a.391.391,0,0,1-.5-.24l-.017-.039a2.836,2.836,0,0,0-3.08-1.17.329.329,0,0,0-.045.022.393.393,0,0,1-.524-.239A2,2,0,0,0,16,13.316a2.407,2.407,0,0,0-2.685-.825,1.531,1.531,0,0,0-.284.156.4.4,0,0,1-.618-.357l.017-9.126C12.436,2.05,11.9.78,10.631.785S8.793,2.089,8.793,3.22L8.787,22.865a.391.391,0,0,1-.691.251L3.43,18.346c-.557-.568-1.448-1.059-2.161-.468a1.678,1.678,0,0,0-.134,2.212l4.389,6.686A14.78,14.78,0,0,0,7.64,29.228c1.281,1.242,2.434,2.4,2.573,4.307H19.4a7.257,7.257,0,0,1,1.732-3.878A6.023,6.023,0,0,0,22.7,25.918m.769-8.09.011,8.09a6.437,6.437,0,0,1-1.721,4.151,6.141,6.141,0,0,0-1.582,3.8.454.454,0,0,1-.4.457H9.835a.449.449,0,0,1-.39-.457c0-1.794-1.108-2.905-2.356-4.109a15.191,15.191,0,0,1-2.217-2.539l-4.395-6.7a2.444,2.444,0,0,1,.29-3.246c1.053-.875,2.354-.37,3.223.516L8,21.9V3.22C8,1.627,8.9.006,10.629,0c1.715,0,2.585,1.588,2.585,3.164L13.2,11.705a3.2,3.2,0,0,1,3.448,1.164,1.787,1.787,0,0,1,.106.173,3.706,3.706,0,0,1,3.682,1.443c1.643-.162,3.03,1.783,3.036,3.343" transform="translate(-20781.74 -16802.164)"/>
            </g>
        </svg>
    )
}

export const Confirmation = (props) => {
    const xsm = useMediaQuery('(max-width:350px)');
    const sm = useMediaQuery('(max-width:600px)');
    const { isOpen = question, message, proceedBtn, cancelBtn, text , disabled = false, fs = 20, submessage="", height="351px", width="428px" } = props;

    return (
        <Backdrop open= { isOpen } sx={{zIndex: '1300'}}>
            {sm ? 
                <Box bgcolor="#FFFFFF" height="219px" width="100%" mx="16px" borderRadius="12px" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box display="flex" justifyContent="center">
                        <Box position="absolute" bgcolor="#006129" height="60px" width="60px" mt="1px" borderRadius={10} borderColor="#006129"/>
                        <Box position="relative"><MActionIcon/></Box>
                    </Box>
                    <Box fontWeight={600} fontSize="16px" color="#333333" pt="22px">
                        { message }
                    </Box>
                    <Box display="flex" fontWeight={400} fontSize="14px" color="#333333" pt="24px">
                        {disabled ? 
                            <>
                                <Box display="flex" justifyContent="center" alignItems="center" height="36px" width="134px" bgcolor="rgba(217, 217, 217, 0.64)" borderRadius="8px">Cancel</Box>
                                <Box ml="11px" display="flex" justifyContent="center" alignItems="center" height="36px" width="134px" bgcolor="#006129" borderRadius="8px" color="#FFFFFF">
                                    <SnakeLoader size="1rem" bg="#FFFFFF" distance="0.3rem" />
                                </Box>
                            </>
                        :
                            <>
                                <Box display="flex" justifyContent="center" alignItems="center" height="36px" width="134px" bgcolor="rgba(217, 217, 217, 0.64)" borderRadius="8px" onClick={cancelBtn}>Cancel</Box>
                                <Box ml="11px" display="flex" justifyContent="center" alignItems="center" height="36px" width="134px" bgcolor="#006129" borderRadius="8px" color="#FFFFFF" onClick={proceedBtn}>
                                    {text}
                                </Box>
                            </>
                        }
                       
                    </Box>
                </Box>
            :
                <Box width={xsm ? "310px" : sm ? "327px" : width} height={sm ? '219px' : height} minHeight={height} bgcolor="#FFFFFF" borderRadius="13px" display="flex" flexDirection="column" justifyContent="space-around" alignItems="center" p={3}>
                    <Box width="100%" display="flex" justifyContent="center"><IconConfirm fill={sm ? '#84E4AD' : '#d9fbe7' }/></Box>
                    <Box fontSize={sm ? '16px' : fs} textAlign= "center" fontWeight={600} >{ message }</Box>
                    <Box fontSize={14} textAlign= "center" fontWeight={500} sx={{wordBreak: 'break-word'}} >{ submessage }</Box>
                    <Box display="flex" justifyContent="center" margin="10px 0px">
                        <Box width={xsm || sm ? '134px' : "180px"} margin= "0 10px">
                            <Buttons fontSize="16px" disabled={disabled} height="48px" borderRadius="10px" event= { cancelBtn } variant="outlined" color={ sm ? 'rgba(217, 217, 217, 0.64)' : 'cancel'} width="100%" text="Cancel" />
                        </Box>
                        <Box width={xsm || sm ? '134px' : "180px"} margin= "0 10px">
                            <Buttons fontSize="16px" disabled={disabled} height="48px" borderRadius="10px" event= { proceedBtn } variant="contained" color="primary" width="100%" text={disabled ? <SnakeLoader size="1rem" bg="#11783C" distance="0.3rem" /> : text}/>
                        </Box>
                    </Box>
                </Box>
            }
        </Backdrop>
    )
}

export const RemoveModal = (props) => {
    const { isOpen = question, message, proceedBtn, cancelBtn, text , disabled = false, fs = 20, height="351px", tdata={name:'', email:''} } = props;
   
    return (
        <Backdrop open= { isOpen } style={{zIndex: '1300'}}>
            <Box px={3} minWidth="432px" height={height} minHeight={height} bgcolor="#FFFFFF" borderRadius="13px" display="flex" flexDirection="column" justifyContent="space-around" alignItems="center" pt={3} pb={2}>
                <Box width="100%" display="flex" justifyContent="center"><IconConfirm height="99px" width="159px"/></Box>
                <Box fontSize={fs} textAlign= "center" component="strong">{ message }</Box>
                <Box fontSize={16} textAlign="center" fontWeight={500}>
                    <Box display="flex"><Box>Remove access of</Box><Box pl={.5} color="#1775EF">{tdata.email}</Box></Box>
                    <Box>to {tdata.name}</Box>
                </Box>
                <Box fontSize={14} fontWeight={500} >
                    <Box pt={2}><Divider/></Box>
                    <Box textAlign="center" color="#F24954" py={2}>Once you remove the access of the user:</Box>
                    <Box minWidth="332px">
                        {tdata.name === 'POFBusiness' ?
                            <>
                                <Box>1. The user will never be able to access POFBusiness </Box>
                                <Box>and all business tools.</Box>
                            </>
                        :
                            <Box>1. The user will never be able to access the said tool.</Box>
                        }
                        <Box>2. The user's transaction will not be deleted.</Box>
                        <Box textAlign="center">
                            *Your overall reports will not be affected since
                        </Box>
                        <Box pl={3}>
                            the data is still existing.
                        </Box>
                        <Box>3. The seat will be freed up for another user.</Box>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" margin="30px 0px">
                    <Box width= "180px" margin= "0 10px">
                        <Buttons disabled={disabled} height="48px" borderRadius="10px" event= { cancelBtn } variant="outlined" color={'cancel'} width="100%" text="Cancel" />
                    </Box>
                    <Box width= "180px" margin= "0 10px">
                        <Buttons disabled={disabled} height="48px" borderRadius="10px" event= { proceedBtn } variant="contained" color="primary" width="100%" text={disabled ? <SnakeLoader size="1rem" bg="#11783C" distance="0.3rem" /> : text}/>
                    </Box>
                </Box>
            </Box>
        </Backdrop>
    )
}

export const ResendEmail = (props) => {
    const { isOpen = question, message, proceedBtn, cancelBtn, text , disabled = false, fs = 20 } = props;

    return (
        <Backdrop open= { isOpen } style={{zIndex: '1500'}}>
            <Box width="432px" height="359px" minHeight="359px" bgcolor="#FFFFFF" borderRadius="13px" display="flex" flexDirection="column" justifyContent="space-around" alignItems="center" pt={3} pb={2}>
                <Box width="100%" display="flex" justifyContent="center"><img src={Email} alt="" /></Box>
                <Box fontSize={fs} textAlign= "center" fontWeight={500}>Resend another verification email to</Box>
                <Box fontSize={fs} textAlign= "center" component="strong" >{ message }</Box>
                <Box display="flex" justifyContent="center" margin="10px 0px">
                    <Box width= "132px" margin= "0 10px">
                        <Buttons disabled={disabled} height="44px" fontSize={17} borderRadius="15px" event= { cancelBtn } variant="outlined" color={'cancel'} width="100%" text="Cancel" />
                    </Box>
                    <Box width= "132px" margin= "0 10px">
                        <Buttons disabled={disabled} height="44px" fontSize={17} borderRadius="15px" event= { proceedBtn } variant="contained" color="primary" width="100%" text={disabled ? <Loader /> : text}/>
                    </Box>
                </Box>
            </Box>
        </Backdrop>
    )
}

export const SuccessAlert = (props) => {
    const sm = useMediaQuery('(max-width:450px)');
    const { successOpen, setSuccessOpen, text, actionType, defaultTxt="" } = props;
 
    const [alrt] = useState({vertical:'bottom', horizontal:'center'}) 
    const { vertical, horizontal } = alrt;
    
    return (
        <Snackbar key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }} open={successOpen} 
    autoHideDuration={2000} 
    onClose={() => setSuccessOpen(false)} >
            <Box m={sm ? 0 : 3} mt={10} borderRadius={3} bgcolor={sm ? '#FFFFFF' : "#00BE81"} fontSize={14} display="flex" justifyContent="center" alignItems="center" minHeight="44px" color={sm ? "#000" : "#ffffff"} px={2}>
                <Box display="flex" justifyContent="center" alignItems="center"> 
                    <SuccessIcon fill={sm ? '#000' : '#FFF'}/>
                    {defaultTxt ? 
                        <Box px={1}>{text}</Box>
                    :
                        text === 'Resend Email' ? 
                            <Box px={1}>Verification email has been sent.</Box>
                        :
                            <Box px={1}>{text === 'Registration' || text === 'Contracts'  ? text : 'details'}  successfully {actionType === 'Update' ? 'updated' : (actionType === 'Skip' ? 'skip' : 'saved' ) } </Box>
                    }
                </Box>   
            </Box>
        </Snackbar>
    )
}

export const NewSuccessAlert = (props) => {
    const { successOpen, setSuccessOpen, text } = props;
 
    const [alrt] = useState({vertical:'bottom', horizontal:'right'}) 
    const { vertical, horizontal } = alrt;
    
    return (
        <Snackbar key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }} open={successOpen} onClose={() => setSuccessOpen(false)} autoHideDuration={1000}>
           <Slide in={successOpen} direction='up'>
            <Box display="flex" alignItems="center" color="#F2F7FF" bgcolor="#2FA86E" p="17px 24px" boxShadow="0px 0px 32px rgba(0, 0, 0, 0.12)" borderRadius="6px" lineHeight="16px" mb={2} mr={3}>
                    <Box mr="17px" fontSize={14} fontWeight={400} lineHeight="16px">{text}</Box>
                    <IconButton sx={{p: '0px !important', }} onClick={() => setSuccessOpen(false)}>
                        <CloseIcon sx={{color: '#FFFFFF', fontSize: 20}} />
                    </IconButton>
                </Box>
           </Slide>
        </Snackbar>
    )
}

export const ErrorAlert = (props) => {
    const { errOpen, setErrOpen, text, center = false, duration = 1000 } = props;
 
    const [alrt] = useState({vertical:center ? 'center': 'bottom', horizontal:center ? 'center': 'right'}) 
    const { vertical, horizontal } = alrt;
    
    return (
        <Snackbar key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }} open={errOpen} onClose={() => setErrOpen(false)} autoHideDuration={duration}>
           <Slide in={errOpen} direction='up'>
            <Box display="flex" alignItems="center" color="#F2F7FF" bgcolor="#DA4B1B" p="17px 24px" boxShadow="0px 0px 32px rgba(0, 0, 0, 0.12)" borderRadius="6px" lineHeight="16px" mb={2} mr={3}>
                    <Box mr="17px" fontSize={14} fontWeight={400} lineHeight="16px">{text}</Box>
                    <IconButton sx={{p: '0px !important', }} onClick={() => setErrOpen(false)}>
                        <CloseIcon sx={{color: '#FFFFFF', fontSize: 20}} />
                    </IconButton>
                </Box>
           </Slide>
        </Snackbar>
    )
}

export const MblAlert = (props) => {
    const { successOpen, setSuccessOpen, text } = props;
 
    const [alrt] = useState({vertical:'bottom', horizontal:'center'}) 
    const { vertical, horizontal } = alrt;
    
    return (
        <Snackbar key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }} open={successOpen}  autoHideDuration={1000} onClose={() => setSuccessOpen(false)}>
           <Slide in={successOpen} direction='up'>
            <Box display="flex" alignItems="center" color="#F2F7FF" bgcolor="#2FA86E" p="12px 24px" boxShadow="0px 0px 32px rgba(0, 0, 0, 0.12)" borderRadius="6px" lineHeight="16px" mb={2} >
                    <Box mr="17px" fontSize={14} fontWeight={400} lineHeight="16px">{text}</Box>
                    <IconButton sx={{p: '0px !important', }} onClick={() => setSuccessOpen(false)}>
                        <CloseIcon sx={{color: '#FFFFFF', fontSize: 20}} />
                    </IconButton>
                </Box>
           </Slide>
        </Snackbar>
    )
}

export const MbFailedOcrAlrt = (props) => {
    const { open, close, } = props;
    const [alrt] = useState({vertical:'bottom', horizontal:'center'}) 
    const { vertical, horizontal } = alrt;
    
    return (
        <Snackbar key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }} open={open}  >
            <Box display="flex" flexDirection="column" color="#F2F7FF" bgcolor="#107038" width="100%" p="12px" borderRadius="6px" lineHeight="16px" mb={2}>
                 <Box fontSize={12} lineHeight="19px" fontWeight={400} mb={3}>
                    <Box component="strong">Image scan failed:</Box> We are unable to read the photo you have selected. Please upload a clearer image or verify that it is the intended registration document.
                </Box>
                <Button fullWidth variant="outlined" sx={{color: '#FFFFFF', minWidth: 115, border: '1px solid #FFFFFF', borderRadius: '6px', '&:hover': { border: '1px solid #FFFFFF' } }} onClick={close}>
                    Got it
                </Button>
            </Box>
        </Snackbar>
    )
}

export const FailedOcrAlrt = (props) => {
    const { open, close, type="registration", message } = props;
    const [alrt] = useState({vertical:'bottom', horizontal:'center'}) 
    const { vertical, horizontal } = alrt;
    
    return (
        <Snackbar key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }} open={open} sx={{minWidth: '800px !important'}} >
            <Box display="flex" alignItems="center" justifyContent="center" color="#F2F7FF" bgcolor="#F84949" width="100%" p="25px 24px" borderRadius="6px" lineHeight="16px" mb={2} mr={3}>
                {type === 'contracts' ? 
                    <Box mr={3}>
                        <Box> Image/PDF scan failed: We are unable to read the file you have selected.</Box>
                    </Box>
                : 
                    <Box mr={3}>
                        <Typography flexWrap="wrap">{message}</Typography>
                        </Box>
                }
                <Button variant="outlined" sx={{color: '#FFFFFF', minWidth: 115, border: '1px solid #FFFFFF', borderRadius: '6px', '&:hover': { border: '1px solid #FFFFFF' } }} onClick={close}>
                    Got it
                </Button>
            </Box>
        </Snackbar>
    )
}

export const FailedUpload = (props) => {
    const { open, close } = props;
    const [alrt] = useState({vertical:'bottom', horizontal:'center'}) 
    const { vertical, horizontal } = alrt;
    
    return (
        <Snackbar key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }} open={open}>
            <Box width="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" color="#F2F7FF" bgcolor="#F84949" borderRadius="6px" lineHeight="16px" mb={2} py={3} px={1} gap={2}>
                <Box textAlign="center" fontSize={14}> Image/PDF scan failed: We are unable to read the file you have selected.</Box>
                <Button variant="outlined" sx={{color: '#FFFFFF', minWidth: 32, border: '1px solid #FFFFFF', borderRadius: '6px', '&:hover': { border: '1px solid #FFFFFF' } }} onClick={close}>
                    Got it
                </Button>
            </Box>
        </Snackbar>
    )
}

export const MblSuccessAlert = (props) => {
    const { successOpen, setSuccessOpen, text, actionType, defaultTxt="", bottom="90px !important" } = props;
 
    const [alrt] = useState({vertical:'bottom', horizontal:'center'}) 
    const { vertical, horizontal } = alrt;
    
    return (
        <Snackbar key={vertical + horizontal} anchorOrigin={{ vertical, horizontal }} open={successOpen} sx={{bottom: bottom,}}
    autoHideDuration={2000} 
    onClose={() => setSuccessOpen(false)} >
            <Box borderRadius={3} bgcolor='#FFFFFF' fontSize={14} display="flex" justifyContent="center" alignItems="center" minHeight="44px" color="#000" px={2} boxShadow={10}>
                <Box display="flex" justifyContent="center" alignItems="center"> 
                    <SuccessIcon fill='#000'/>
                    {defaultTxt ? 
                        <Box px={1}>{text}</Box>
                    :
                        <Box px={1}>{text === 'Registration' || text === 'Contracts'  ? text : 'details'}  successfully {actionType === 'Update' ? 'updated' : (actionType === 'Skip' ? 'skip' : 'saved' ) } </Box>
                    }
                </Box>   
            </Box>
        </Snackbar>
    )
}

export const ConfirmationEmail = (props) => {
    const { isOpen = question, cancelBtn, text , fs = 20 } = props;
    
    return (
        <Backdrop open= { isOpen } style={{zIndex: '1200'}} onClick={cancelBtn}>
            <Box display="flex" flexDirection="column" width="428px">
                <Box width="100%" py={3} bgcolor="#FFFFFF" borderRadius="13px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Box width="100%" display="flex" justifyContent="center"><img src={Email} alt="" /></Box>
                    <Box fontSize={fs} textAlign= "center" fontWeight={700}>
                        A verification email has been sent 
                    </Box>
                    <Box fontSize={fs} fontWeight={700} display="flex" justifyContent="center" flexWrap="wrap" px={3}>
                        to &nbsp;
                        {text.length > 0 && (
                            text.map((v,k) => (
                                <Box key={k}>{v.email}{text.length === 1 ? '.' :','} &nbsp;</Box>
                            ))
                        )}
                    </Box>
                </Box>
                <Box width="100%" height="100%" textAlign="center" pt={10}>
                    <ArrowUp/>
                    <Box color="#ffffff">Click anywhere to continue...</Box>
                </Box>
            </Box>
        </Backdrop>
    )
}

export const MblTrashConfirmation = (props) => {
    const { isOpen = question, message, proceedBtn, cancelBtn, disabled = false, submessage="" } = props;

    return (
        <Modal open={isOpen} sx={{borderColor:'none !important'}} BackdropProps={{style: { borderColor:'none !important' } }}>
            <Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
                <Box bgcolor="#ffffff" mx={3} p={3} borderRadius="12px" width="100%">
                    <Box width="100%" display="flex" justifyContent="center"><IconConfirm fill='#84E4AD' /></Box>
                    <Box textAlign= "center" fontWeight={600} >{ message }</Box>
                    <Box fontSize={14} textAlign= "center" fontWeight={500} mb="32px" sx={{wordBreak: 'break-word'}}>{ submessage }</Box>
                    <Box display="flex" justifyContent="center" >
                        <Button sx={{width:"100%", height:"36px", bgcolor:"#D9D9D9A3", borderRadius:"8px", color:"#1B1B1B", mr: 1}} disabled={disabled} onClick={cancelBtn}>
                            Cancel
                        </Button>
                        <Button sx={{width:"100%", height:"36px", bgcolor:"#11783C", borderRadius:"8px", color:"#FFFFFF", '&:hover': { bgcolor:"#11783C", } }} disabled={disabled} onClick={proceedBtn}>
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}