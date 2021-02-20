import React, { useState, useEffect } from 'react';
import './Field.scss';
import store from '../../store/store'

const smile = {
    flag: '🏴‍☠️',
    bomb: '💣'
}


const Field = (props) => {
    const f1 = React.createRef();
    console.log(props)
    const [w, setW] = useState(props.field.w);
    const [h, setH] = useState(props.field.h);
    store.subscribe(() => {
        setH(props.field.h);
        setW(props.field.w);
    });

    useEffect(() => {
        f1.current.classList.remove('amateur')
        f1.current.classList.remove('beginner')
        f1.current.classList.remove('professional')
        if (props.field.h === props.field.w) {
            switch (props.field.h) {
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
        e.target.classList.add('display-none');
    }

    return (
        <div className="field" ref={f1}>
            <div>
                {Array(h * w).fill().map((el, i) =>
                    <div key={i}
                        className="one-square"
                        style={
                            {
                                left: `${30 * (i % h)}px`,
                                top: `${Math.floor(i / w) * 30}px`
                            }
                        }
                        data-yx={`${Math.floor(i / w)}:${i % h}`}
                    >{smile.bomb}</div>)
                }
            </div>
            <div className="second">
                {Array(h * w).fill().map((el, i) =>
                    <div key={i}
                        onClick={deleteBlock}
                        className="one-square marker"
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