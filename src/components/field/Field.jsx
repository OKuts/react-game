import React, { useState, useEffect, useRef } from 'react';
import Styles from './Field.module.scss';
import store from '../../store/store';
import cn from 'classnames';

const Field = (props) => {
    // console.log('props field', props)
    const [w, setW] = useState(props.level.w);
    const [h, setH] = useState(props.level.h);

    let classFieldCN = cn({
        [Styles.beginner]: props.level.level === 'beginner',
        [Styles.amateur]: props.level.level === 'amateur',
        [Styles.professional]: props.level.level === 'professional',
        [Styles.special]: props.level.level === 'special',
    })

    useEffect(() => {
        setH(props.level.h);
        setW(props.level.w);
        props.changeGame({ w: props.level.w, h: props.level.h });
    }, [props.active])

    const deleteBlock = (e) => {
        props.openBlock(e.target.dataset.yx)
    }

    const setFlag = (e) => {
        e.preventDefault();
        props.toggleFlag(e.target.dataset.yx)
    }

    return (
        <div className={Styles.field} >
            <div className={classFieldCN} >
                {props.game.map((el, i) =>
                    <div key={i}
                        className={Styles.one_square}
                        onContextMenu={(e) => e.preventDefault()}
                        style={
                            {
                                left: `${30 * (i % w)}px`,
                                top: `${Math.floor(i / h) * 30}px`
                            }
                        }
                        data-yx={`${Math.floor(i / w)}:${i % h}`}
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
                            left: `${30 * (i % h)}px`,
                            top: `${Math.floor(i / w) * 30}px`
                        }
                    }
                    data-yx={`${Math.floor(i / w)}:${i % h}`}
                >
                    {el === '🏴‍☠️' ? '🏴‍☠️' : ''}
                </div>)
            }
        </div >
    )
}

export default Field;