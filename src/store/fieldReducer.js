import { matrix, openNearBlock } from "../lib/funcs";

const DELETE_BLOCK = 'DELETE_BLOCK';

const initialState = {
    gameSquare: matrix(10, 10),
    controlSquare: Array(10).fill(null).map(() => Array(10).fill(0)),
    bombs: 10
};

// console.log('ini', initialState)

const fieldReducer = (state = initialState, action) => {
    if (action.type === DELETE_BLOCK) {
        const stateCopy = Object.assign({}, state);
        const x = +action.blockYX.slice(0, action.blockYX.indexOf(':'));
        const y = +action.blockYX.slice(action.blockYX.indexOf(':') + 1);
        if (stateCopy.gameSquare[x][y] === '') {
            openNearBlock(x, y, state.gameSquare, stateCopy.controlSquare);
        } else if (stateCopy.gameSquare[x][y] === '💣') {
            console.log('Game over');
            stateCopy.controlSquare[x][y] = true;
        } else stateCopy.controlSquare[x][y] = true;
        return stateCopy
    }
    return state;
}
export default fieldReducer;

export const deleteBlockCreator = (value) => ({ type: DELETE_BLOCK, blockYX: value });