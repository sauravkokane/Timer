import React, { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import '../Static/styles/stopwatch.css';
const Stopwatch: React.FC = () => {
    const [time, setTime] = useState(0);
    const [status, setStatus] = useState(false);
    useEffect(() => {
        let timerId;
        if (status) {
            timerId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(timerId);
    }, [status, time]);
    return (
        <div className="stopwatch">
            <Stack className="stopwatch-container" direction="column" spacing={2}>
                <div className="stopwatch-container">
                    <div className="time-container" id="hours">{(Math.floor(time / 360000).toString().padStart(2, "0"))}</div>
                    <div className="time-container" id="minutes">{Math.floor((time % 360000) / 6000).toString().padStart(2, "0")}</div>
                    <div className="time-container" id="seconds">{Math.floor((time % 6000) / 100).toString().padStart(2, "0")}</div>
                    <div className="time-container" id="miliseconds">{(time % 100).toString().padStart(2, "0")}</div>
                </div>
                <div>
                    <button className="btn" onClick={() => setStatus(!status)}>{status ? 'STOP' : 'START'}</button>
                    <button className="btn" onClick={() => setTime(0)}>RESET</button>
                </div>

            </Stack>
        </div>
    )
}

export default Stopwatch;