import React, { useState, useEffect } from 'react';
import './Data.scss';

const Data = (props) => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            // setTime(time + 1);
            console.log('This will run every second!', new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="score-data">
            <span>🏴‍☠️ ( {props.flagBalance} )</span>
            {/* <span>time  ( {time} )</span> */}
        </div >
    )
}

export default Data;