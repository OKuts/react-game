import { matrix, openNearBlock, returnXY, bombAmount } from "../lib/funcs";

const DELETE_BLOCK = 'DELETE_BLOCK';
const CHANGE_GAME = 'CHANGE_GAME';
const TOGGLE_FLAG = 'TOGGLE_FLAG';

const initialState = {
    gameSquare: matrix(10, 10),
    controlSquare: Array(10).fill(null).map(() => Array(10).fill(0)),
    bomb: bombAmount(10, 10),
    bombBalance: bombAmount(10, 10)
};

const fieldReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_BLOCK: {
            let stateCopy = Object.assign({}, state);
            const [x, y] = returnXY(action.blockYX);
            if (stateCopy.gameSquare[x][y] === '') {
                openNearBlock(x, y, state.gameSquare, stateCopy.controlSquare);
            } else if (stateCopy.gameSquare[x][y] === '💣') {
                console.log('Game over');
                stateCopy.controlSquare.fill(true);
            } else stateCopy.controlSquare[x][y] = true;
            return stateCopy;
        }
        case CHANGE_GAME: {
            // console.log('CHANGE_GAME', action)
            let stateCopy = Object.assign({}, state);
            stateCopy.gameSquare = [...matrix(action.newLevel.w, action.newLevel.h)];
            stateCopy.controlSquare = [...Array(action.newLevel.h).fill(null).map(() => Array(action.newLevel.w).fill(0))];
            return stateCopy;
        }

        case TOGGLE_FLAG: {
            let stateCopy = Object.assign({}, state);
            const [x, y] = returnXY(action.blockYX);
            stateCopy.controlSquare[x][y] = stateCopy.controlSquare[x][y] === 0 ? '🏴‍☠️' : 0;
            return stateCopy;
        }

        default: return state;
    }
}
export default fieldReducer;

export const deleteBlockCreator = (value) => ({ type: DELETE_BLOCK, blockYX: value });
export const changeGameCreator = (value) => ({ type: CHANGE_GAME, newLevel: value });
export const toggleFlagCreator = (value) => ({ type: TOGGLE_FLAG, blockYX: value });