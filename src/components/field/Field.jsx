import React, { useState, useEffect } from 'react';
import Styles from './Field.module.scss';
import store from '../../store/store';
import cn from 'classnames';

const Field = (props) => {
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
        // f1.current.classList.add(level.level);
        props.changeGame(level);
    }, [level])

    const deleteBlock = (e) => {
        props.openBlock(e.target.dataset.yx)
        console.log('delete', e.target.dataset.yx)
    }

    const setFlag = (e) => {
        e.preventDefault();
        props.toggleFlag(e.target.dataset.yx)
    }

    const classFieldCN = cn({
        [Styles.beginner]: level.level === 'beginner',
        [Styles.amateur]: level === '1',
        [Styles.professional]: level === '2',
        [Styles.special]: level === '3',
    })

    return (
        <div className={Styles.field} >
            <div className={classFieldCN}>
                {props.game.map((el, i) =>
                    <div key={i}
                        className={Styles.one_square}
                        onContextMenu={(e) => e.preventDefault()}
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
            {props.control.map((el, i) =>
                <div key={i}
                    onClick={deleteBlock}
                    onContextMenu={setFlag}
                    className={cn({
                        [Styles.one_square]: true,
                        [Styles.marker]: true,
                        [Styles.display_none]: !(el === 0 || el === '🏴‍☠️')
                    })}
                    style={
                        {
                            left: `${30 * (i % level.h)}px`,
                            top: `${Math.floor(i / level.w) * 30}px`
                        }
                    }
                    data-yx={`${Math.floor(i / level.w)}:${i % level.h}`}
                >
                    {el === '🏴‍☠️' ? '🏴‍☠️' : ''}
                </div>)
            }
        </div >
    )
}

export default Field;