import React from 'react';
import { useState, useEffect } from 'react';
import Timer from './Timer.tsx';
import { wait } from '@testing-library/user-event/dist/utils/index.js';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Button from "@mui/material/Button";
import "react-datepicker/dist/react-datepicker.css";
import "../Static/styles/datesetter.css";
const DateSetter = () => {
    const [running, setRunning] = useState(false);
    const [dueDate, setDueDate] = useState(new Date());

    useEffect(() => {
        if (running === false)
            setDueDate(new Date());
    }, [running])
    const run = () => {
        var now = new Date();
        wait(2000);
        if (dueDate < now) {
            alert(`Due date cannot be today or in the past!!!`);
        }
        else {
            setRunning(true);
        }
    }
    const OnDateSelect = (date) => {
        setDueDate(date);
        console.log(date);
    }

    return (
        <div className='datesetter'>

            {!running && <>
                {/* <DatePicker selected={dueDate} onChange={OnDateSelect} timeFormat="HH:mm" showTimeSelect /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDateTimePicker defaultValue={dayjs(new Date())} onChange={OnDateSelect} />
                </LocalizationProvider>
                <button className='btn' onClick={run}>Start</button>
            </>}
            {running && <Timer deadline={dueDate} setRunning={setRunning} />}
            {running && <button className='btn cancel' onClick={() => setRunning(false)}>Cancel</button>}
        </div>
    )
};


export default DateSetter;