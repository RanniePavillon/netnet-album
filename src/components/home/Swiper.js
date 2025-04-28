import { Box, Avatar, useMediaQuery } from '@mui/material'
import ZraPic1 from '../../assets/img/zraPic1.png'
import ZraPic2 from '../../assets/img/zraPic2.png'
import Family from '../../assets/img/Family.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper/core';
SwiperCore.use([Autoplay,Pagination,Navigation]);

export const SwiperComponent = () => {
    const mobile = useMediaQuery('(max-width:350px)');

    return (
        <Box width="100%" height="100%"> 
            <Swiper 
                // spaceBetween={20} 
                centeredSlides={true} 
                autoplay={{
                    "delay": 2000,
                    "disableOnInteraction": false
                }} 
                navigation={true}
                className="mySwiper" 
                style={{width:mobile ?'100%' : 350}}
            >
                <SwiperSlide>
                    <Avatar variant="square" src={ZraPic1} sx={{height:'auto', width:'100%'}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Avatar variant="square" src={ZraPic2} sx={{height:'100%', width:'100%'}}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Avatar variant="square" src={Family} sx={{height:'100%', width:'100%'}}/>
                </SwiperSlide>
            </Swiper>
        </Box>
    )
}