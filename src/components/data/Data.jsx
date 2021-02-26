import React, { useState } from 'react';
import './Data.scss';
// import store from '../../store/store';

const Data = (props) => {
    // const [active, setActive] = useState(props.active);

    // const setLevel = (e) => {
    //     props.changeLevel({ level: e.target.dataset.i })
    // }

    // store.subscribe(() => {
    //     setActive(store.getState().titleData.active);
    // });

    return (
        <div className="score-data">
            <span>🏴‍☠️ {props.bomb}</span>
            <span>step:{props.bomb}</span>
            <span>{'time'}</span>
        </div >
    )
}

export default Data;