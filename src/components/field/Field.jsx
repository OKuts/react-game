import React, { useState, useEffect } from 'react';
import './Field.scss';
import store from '../../store/store'

const smile = {
    flag: '🏴‍☠️'
}

const Field = (props) => {
    // console.log('props', props)
    // console.log(9000, props.sizes.levels[props.sizes.active].h)
    // console.log(4444, props.sizes.level)
    const f1 = React.createRef();
    const [w, setW] = useState(props.sizes.w);
    const [h, setH] = useState(props.sizes.h);
    const [level, setLevel] = useState(props.sizes.levels[props.sizes.active]);

    store.subscribe(() => {
        setH(props.sizes.levels[props.sizes.active].h);
        setW(props.sizes.levels[props.sizes.active].w);
        setLevel(props.sizes.levels[props.sizes.active]);

    });


    useEffect(() => {
        f1.current.classList.remove('amateur');
        f1.current.classList.remove('beginner');
        f1.current.classList.remove('professional');
        f1.current.classList.add(level.level);
        props.changeGame(level);
    }, [level])

    const deleteBlock = (e) => {
        props.openBlock(e.target.dataset.yx)
        // console.log(e.target.dataset.yx)
    }

    return (
        <div className="field" ref={f1}>
            <div>
                {props.game.map((el, i) =>
                    <div key={i}
                        className="one-square"
                        style={
                            {
                                left: `${30 * (i % level.w)}px`,
                                top: `${Math.floor(i / level.h) * 30}px`
                            }
                        }
                        data-yx={`${Math.floor(i / level.w)}:${i % level.h}`}
                    >{el}
                    </div>
                )
                }
            </div>
            <div className="second">
                {props.control.map((el, i) =>
                    <div key={i}
                        onClick={deleteBlock}
                        className={el === 0 ? "one-square marker" : "one-square marker display-none"}
                        style={
                            {
                                left: `${30 * (i % level.h)}px`,
                                top: `${Math.floor(i / level.w) * 30}px`
                            }
                        }
                        data-yx={`${Math.floor(i / level.w)}:${i % level.h}`}
                    ></div>)
                }
            </div>
        </div >
    )
}

export default Field;