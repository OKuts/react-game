import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Styles from './Field.module.scss';
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

    const portal = createPortal(
        <h3 className={Styles.portal}>Game over</h3>,
        document.getElementById('root'));

    return (
        <div className={Styles.field} >
            <div className={classFieldCN} >
                {props.game.map((el, i) =>
                    <div key={i}
                        className={Styles.one_square}
                        onContextMenu={(e) => e.preventDefault()}
                        style={
                            {
                                left: `${3 * (i % w)}rem`,
                                top: `${Math.floor(i / h) * 3}rem`
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
                            left: `${3 * (i % h)}rem`,
                            top: `${Math.floor(i / w) * 3}rem`
                        }
                    }
                    data-yx={`${Math.floor(i / w)}:${i % h}`}
                >
                    {el === '🏴‍☠️' ? '🏴‍☠️' : ''}
                </div>)
            }
            {!props.isGame && (
                <div
                    onClick={() => props.changeGame({ w: w, h: h })}
                    className={Styles.new_game}>
                    <span>New game</span>
                    <div className={Styles.game_over}>Game over</div>
                </div>
            )}
        </div >
    )
}

export default Field;