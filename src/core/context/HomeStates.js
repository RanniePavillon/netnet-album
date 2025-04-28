import { useState } from "react"

export const HomeStates = () => {
    const [dateToday, setDateToday] = useState()
    const [isPlaying, setIsPlaying] = useState(false);

    return {
       dateToday: {data: dateToday, set: setDateToday},
       isPlaying: {data: isPlaying, set: setIsPlaying}
    }
}