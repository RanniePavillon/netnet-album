import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material'
import Typing from 'react-typing-animation';
import { MyPic } from './MyPic';
import { SwiperComponent } from './Swiper';

export const Index = ({match}) => {
    const staticBirthdate = '2023-07-02';
    const [age, setAge] = useState({
        years: 0,
        months: 0,
        days: 0
    });

    const calculateAge = () => {
        const currentDate = new Date()
        const targetDate = new Date(staticBirthdate)
        const differenceInTime =  currentDate.getTime() - targetDate.getTime()
        const years = Math.ceil(differenceInTime / (1000 * 3600 * 24 * 365)) - 1
        const months = Math.ceil(differenceInTime / (1000 * 3600 * 24 * 30)) - 1
        const days = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        setAge({...age, years:years, months:months, days:days })
    };

    useEffect(() => {
        calculateAge();
        // eslint-disable-next-line
    }, []);

    return (
        <Box width="100%" heigth="100%">
            <Box width="100%" heigth="100%" display="flex" flexDirection="column" justifyContent="center">
                <Box minHeight="200px" display="flex" justifyContent="center">
                    <Typing speed={20}>
                        <Box display="flex" justifyContent="center" gap={1}>
                            {age.years !== 0 ? (
                                <Box display="flex" textAlign="center" fontSize={40} pb={1} color="red">
                                    <Box textAlign="center" fontSize={40} pb={1} color="red">
                                        {age.years}
                                        <Box pl={1} pt="20px" fontSize={20} color="#000000">
                                            yr{age.years > 1 ?<>s</>:<></>}
                                        </Box>
                                    </Box>
                                    <Box>/</Box>
                                </Box>
                            ):<></>}
                            <Box display="flex" textAlign="center" fontSize={40} pb={1} color="red">
                                <Box textAlign="center" fontSize={40} pb={1} color="red">
                                    <Box>{age.months} </Box>
                                    <Box pl={1} pt="20px" fontSize={20} color="#000000">
                                        months
                                    </Box>
                                </Box>
                                <Box>/</Box>
                            </Box>
                            <Box textAlign="center" fontSize={40} pb={1} color="red">
                                {age.days} 
                                <Box pl={1} pt="20px" fontSize={20} color="#000000">
                                    days
                                </Box>
                            </Box>
                        </Box>
                        <Typing.Delay ms={500} />
                        <Box component="h2" width="100%" textAlign="center" pb={1}>
                            Hi, I am  Kzra Tonette D. Pavillon
                        </Box>
                        <Typing.Delay ms={500} />
                        <Box component="h2" width="100%" textAlign="center" fontSize="18px" pb={1}>
                            ( Net Net )
                        </Box>
                        <Typing.Delay ms={500} />
                        <Box component='p' textAlign="center" color="grey">
                            I am a cute girl who wants to express my album to the public.
                        </Box>
                    </Typing>
                </Box>
                <SwiperComponent/>
                <MyPic match={match}/>   
            </Box>
            {/* <Box width="100%" heigth="100%" display="flex" flexDirection="column" justifyContent="center">
                <Box minHeight="200px" display="flex" justifyContent="center">
                    <Typing speed={20}>
                        <Box display="flex" justifyContent="center" gap={1}>
                            {age.years !== 0 ? (
                                <Box display="flex" textAlign="center" fontSize={40} pb={1} color="red">
                                    <Box textAlign="center" fontSize={40} pb={1} color="red">
                                        {age.years}
                                        <Box pl={1} pt="20px" fontSize={20} color="#000000">
                                            yr{age.years > 1 ?<>s</>:<></>}
                                        </Box>
                                    </Box>
                                    <Box>/</Box>
                                </Box>
                            ):<></>}
                            <Box display="flex" textAlign="center" fontSize={40} pb={1} color="red">
                                <Box textAlign="center" fontSize={40} pb={1} color="red">
                                    <Box>{age.months} </Box>
                                    <Box pl={1} pt="20px" fontSize={20} color="#000000">
                                        months
                                    </Box>
                                </Box>
                                <Box>/</Box>
                            </Box>
                            <Box textAlign="center" fontSize={40} pb={1} color="red">
                                {age.days} 
                                <Box pl={1} pt="20px" fontSize={20} color="#000000">
                                    days
                                </Box>
                            </Box>
                        </Box>
                        <Typing.Delay ms={500} />
                        <Box component="h2" width="100%" textAlign="center" pb={1}>
                            Hi, I am  Kzra Tonette D. Pavillon
                        </Box>
                        <Typing.Delay ms={500} />
                        <Box component="h2" width="100%" textAlign="center" fontSize="18px" pb={1}>
                            ( Net Net )
                        </Box>
                        <Typing.Delay ms={500} />
                        <Box component='p' textAlign="center" color="grey">
                            I am a cute girl who wants to express my album to the public.
                        </Box>
                    </Typing>
                </Box>
                <SwiperComponent/>
            </Box>
            <MyPic match={match}/>        */}
        </Box>
    )
}