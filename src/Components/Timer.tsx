import { useEffect } from "react";
import React, { useState } from 'react';
import '../Static/styles/timerstyle.css';
const Timer = ({ deadline }) => {

    const [days, setDays] = useState(Number.NaN);
    const [hours, setHours] = useState(Number.NaN);
    const [minutes, setMinutes] = useState(Number.NaN);
    const [seconds, setSeconds] = useState(Number.NaN);

    const getTime = () => {
        const time = deadline - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }
    useEffect(() => {
        const interval = setInterval(() => getTime(), 1000);

        return () => clearInterval(interval);
    }, []);
    // if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    //     return (
    //         <div className='timer'>
    //             <h1>DD, HH, MM, SS</h1>
    //         </div>
    //     )
    // }
    return (
        <div className='timer'>
            <div className="timer-container">
                <div className="time-container">
                    {isNaN(days) ? "DD" : days}
                </div>
                <div className="time-container">
                    {isNaN(hours) ? "HH" : hours}
                </div>
                <div className="time-container">
                    {isNaN(minutes) ? "MM" : minutes}
                </div>
                <div className="time-container">
                    {isNaN(seconds) ? "SS" : seconds}
                </div>
            </div>
        </div>
    )
};

export default Timer;