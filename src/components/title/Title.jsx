import React, { useState } from 'react';
import './Title.scss';
import mine from '../../images/gnome-mines.png';
import store from '../../store/store';

const Title = (props) => {
    const [active, setActive] = useState(props.active);

    const setLevel = (e) => {
        props.changeLevel({ level: e.target.dataset.i })
    }

    store.subscribe(() => {
        setActive(store.getState().titleData.active);
    });

    return (
        <div className="header">
            <div className="logo">
                <img src={mine} alt="mine" />
            </div>
            <nav className="nav">
                {props.nav.map((el, i) =>
                    <div
                        key={i}
                        onClick={setLevel}
                        data-i={i}
                        className={active == i ? "active" : ""}
                    >
                        {el.level}
                    </div>)}
            </nav>
        </div >
    )
}

export default Title;