import { useEffect } from "react";
import React, { useState } from 'react';
import '../Static/styles/timerstyle.css';
const Timer = ({ deadline, setRunning }) => {

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
    }, [deadline]);
    useEffect(() => {
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
            alert("Time Up");
            setRunning(false);
        }
    }, [minutes])
    return (
        <div className='timer'>
            <div className="timer-container">
                <div className="time-container">
                    {isNaN(days) ? "DD" : days.toString().padStart(2, "0")}
                </div>
                <div className="time-container">
                    {isNaN(hours) ? "HH" : hours.toString().padStart(2, "0")}
                </div>
                <div className="time-container">
                    {isNaN(minutes) ? "MM" : minutes.toString().padStart(2, "0")}
                </div>
                <div className="time-container">
                    {isNaN(seconds) ? "SS" : seconds.toString().padStart(2, "0")}
                </div>
            </div>
        </div>
    )
};

export default Timer;