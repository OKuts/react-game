import React, { useEffect, useState } from 'react';
import './Title.scss';
import mine from '../../images/gnome-mines.png';

const Title = (props) => {

    // console.log('props title', props)
    const [active, setActive] = useState(props.active);

    const setLevel = (e) => {
        props.changeLevel({ level: e.target.dataset.i })
    }

    useEffect(() => {
        setActive(props.active)
    }, [props.active])

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