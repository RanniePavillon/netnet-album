import { Avatar, Box, IconButton } from '@mui/material'
import { useEffect, useRef, useState } from 'react';
import { ImageDatas } from './ImageData';
import { ArrowLeft } from '../../core/global/Icons';
import { useHistory } from 'react-router-dom';
import CuteSound from '../../assets/mp3/cute.wav'

export const MyAlbum = ({match}) => {
    const [imgdata, setImgdata] = useState([])
    const [title, setTitle] = useState('')
    const [selectedImage, setSelectedImage] = useState(null);
    const history = useHistory()

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClosePreview = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        const __init = async() => {
            let imgdatas = await ImageDatas(match)
            setImgdata(imgdatas)
            let year
            let months
            let month
            let data 
            if (match.params.year === '1') {
                year = 'My 1 year'
            }else{
                year = `My ${match.params.year} years`
            }
            if (match.params.months === '1') {
                month = ' 1 month'
                months = 'My 1 month'
            }else{
                month = ` ${match.params.months} months`
                months = `My ${match.params.months} months`
            }
            if (match.params.year !== '0') {
                data = year + month
            }else{
                data = months
            }
            setTitle(data)
        }
        __init()
        // eslint-disable-next-line
    }, [])

    const audioRef = useRef(new Audio());
    const audio = audioRef.current;

    const playSound = () => {
        audio.src = CuteSound;
        audio.currentTime = 0; // Reset the audio to the beginning
        audio.play();
    };

    const stopSound = () => {
        audio.pause();
    };

    const handleEnded = () => {
        // Restart the playback when the sound ends
        playSound();
    };

    useEffect(() => {
        playSound()
        audio.addEventListener('ended', handleEnded);
        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
         // eslint-disable-next-line
      }, []);

    const handleClick = () => {
        stopSound()
        history.push('/netnet-album')
    }
    
    return (
        <Box width="100%" textAlign="center" pt="32px" className="grid-gallery-container">
            <Box width="100%" display="flex" justifyContent="flex-start">
                <IconButton onClick={()=>handleClick()}>
                    <ArrowLeft/>
                </IconButton>
            </Box>
            <Box component="h1" fontWeight={700} color="#165320">{title}</Box>  
            <Box className="grid">
                {imgdata.map((val, index) => (
                    <Avatar
                        variant='square'
                        sx={{height:'100%', width:'100%'}}
                        key={index}
                        src={val}
                        alt={`Image ${index}`}
                        onClick={() => handleImageClick(val)}
                    />
                ))}
            </Box>

            {selectedImage && (
                <Box className="preview-overlay" onClick={handleClosePreview}>
                    <Box className="preview-content">
                        <img src={selectedImage} alt="Selected" />
                    </Box>
                </Box>
            )}
        </Box>
    )
}