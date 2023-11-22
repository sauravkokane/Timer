import React from 'react';
import { useState, useEffect } from 'react';
import Timer from './Timer.tsx';
import DatePicker from 'react-datepicker';
import { isToday } from 'date-fns';
import Button from "@mui/material/Button";
import "react-datepicker/dist/react-datepicker.css";
import "../Static/styles/datesetter.css";
const DateSetter = () => {
    const [running, setRunning] = useState(false);
    const [dueDate, setDueDate] = useState(new Date());
    const run = () => {
        if (isToday(dueDate) || dueDate <= new Date()) {
            alert("Due date cannot be today or in the past");
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
                <DatePicker selected={dueDate} onChange={OnDateSelect} timeFormat="HH:mm" showTimeSelect />
                <Button variant="contained" className='btn' onClick={run}>Start</Button>
            </>}
            {running && <Timer deadline={dueDate} />}
            {running && <button className='btn cancel' onClick={() => setRunning(false)}>Cancel</button>}
        </div>
    )
};


export default DateSetter;