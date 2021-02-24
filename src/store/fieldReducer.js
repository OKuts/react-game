import { matrix, openNearBlock } from "../lib/funcs";
import store from './store';

const DELETE_BLOCK = 'DELETE_BLOCK';
const CHANGE_GAME = 'CHANGE_GAME';

const initialState = {
    gameSquare: matrix(10, 10),
    controlSquare: Array(10).fill(null).map(() => Array(10).fill(0)),
    bombs: 10
};

const fieldReducer = (state = initialState, action) => {
    if (action.type === DELETE_BLOCK) {
        let stateCopy = Object.assign({}, state);
        const x = +action.blockYX.slice(0, action.blockYX.indexOf(':'));
        const y = +action.blockYX.slice(action.blockYX.indexOf(':') + 1);
        if (stateCopy.gameSquare[x][y] === '') {
            openNearBlock(x, y, state.gameSquare, stateCopy.controlSquare);
        } else if (stateCopy.gameSquare[x][y] === '💣') {
            console.log('Game over');
            stateCopy.controlSquare[x][y] = true;
        } else stateCopy.controlSquare[x][y] = true;
        return stateCopy
    } else if (action.type === CHANGE_GAME) {
        let stateCopy = Object.assign({}, state);
        stateCopy.gameSquare = [...matrix(action.newLevel.w, action.newLevel.h)];
        stateCopy.controlSquare = [...Array(action.newLevel.h).fill(null).map(() => Array(action.newLevel.w).fill(0))];
        return stateCopy;
    }
    return state;
}
export default fieldReducer;

export const deleteBlockCreator = (value) => ({ type: DELETE_BLOCK, blockYX: value });
export const changeGameCreator = (value) => ({ type: CHANGE_GAME, newLevel: value });