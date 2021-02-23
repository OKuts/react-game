import React, { useState, useEffect } from 'react';
import './Field.scss';
import store from '../../store/store'

const smile = {
    flag: '🏴‍☠️'
}

const Field = (props) => {
    // console.log(props)

    const f1 = React.createRef();
    const [w, setW] = useState(props.sizes.w);
    const [h, setH] = useState(props.sizes.h);

    // console.log(props.field)
    store.subscribe(() => {
        setH(props.sizes.h);
        setW(props.sizes.w);
    });

    useEffect(() => {
        f1.current.classList.remove('amateur')
        f1.current.classList.remove('beginner')
        f1.current.classList.remove('professional')
        if (h === w) {
            switch (h) {
                case 10:
                    f1.current.classList.add('beginner');
                    break;
                case 15:
                    f1.current.classList.add('amateur');
                    break;
                case 20:
                    f1.current.classList.add('professional');
                    break;
            }
        }
    })

    const deleteBlock = (e) => {
        props.openBlock(e.target.dataset.yx)
    }

    return (
        <div className="field" ref={f1}>
            <div>
                {props.game.map((el, i) =>
                    <div key={i}
                        className="one-square"
                        style={
                            {
                                left: `${30 * (i % h)}px`,
                                top: `${Math.floor(i / w) * 30}px`
                            }
                        }
                        data-yx={`${Math.floor(i / w)}:${i % h}`}
                    >{props.game[i]}
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
                                left: `${30 * (i % h)}px`,
                                top: `${Math.floor(i / w) * 30}px`
                            }
                        }
                        data-yx={`${Math.floor(i / w)}:${i % h}`}
                    ></div>)
                }
            </div>
        </div >
    )
}

export default Field;