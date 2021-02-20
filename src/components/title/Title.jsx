import React, { Component } from 'react';
import './Title.scss';
import mine from '../../images/gnome-mines.png';

const Title = (props) => {

    const setLevel = (e) => {
        const n = e.target.dataset.i * 5 + 10;
        props.changeLevel({ w: n, h: n })
    }

    return (
        <div className="header">
            <div className="logo">
                <img src={mine} alt="mine" />
            </div>
            <nav className="nav">
                <div onClick={setLevel} data-i="0" className="active">beginner</div>
                <div onClick={setLevel} data-i="1">amateur</div>
                <div onClick={setLevel} data-i="2">professional</div>
                <div onClick={setLevel} data-i="3">special</div>
            </nav>
        </div >
    )
}

export default Title;