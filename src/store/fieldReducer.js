import { matrix, openNearBlock, returnXY, bombAmount, isVictory } from "../lib/funcs";

const DELETE_BLOCK = 'DELETE_BLOCK';
const CHANGE_GAME = 'CHANGE_GAME';
const TOGGLE_FLAG = 'TOGGLE_FLAG';

const initialState = {
    gameSquare: matrix(10, 10),
    controlSquare: Array(10).fill(null).map(() => Array(10).fill(0)),
    bomb: bombAmount(10, 10),
    flagBalance: bombAmount(10, 10),
    step: 0,
    isGame: true
};

const fieldReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_BLOCK: {
            if (state.isGame) {
                let stateCopy = Object.assign({}, state);
                const [x, y] = returnXY(action.blockYX);
                if (stateCopy.gameSquare[x][y] === '') {
                    stateCopy.step += 1;
                    openNearBlock(x, y, state.gameSquare, stateCopy.controlSquare);
                    if (!isVictory(stateCopy.controlSquare)) stateCopy.isGame = false;
                } else if (stateCopy.gameSquare[x][y] === '💣') {
                    stateCopy.isGame = false;
                    stateCopy.controlSquare.fill(true);
                } else {
                    stateCopy.step += 1;
                    stateCopy.controlSquare[x][y] = true;
                    if (!isVictory(stateCopy.controlSquare)) stateCopy.isGame = false;
                }
                return stateCopy;
            } else return state;
        }
        case CHANGE_GAME: {
            // console.log('CHANGE_GAME', state)
            let stateCopy = Object.assign({}, state);
            stateCopy.step = 0;
            stateCopy.bomb = bombAmount(action.newLevel.w, action.newLevel.h);
            stateCopy.flagBalance = stateCopy.bomb;
            stateCopy.isGame = true;
            stateCopy.gameSquare = [...matrix(action.newLevel.w, action.newLevel.h)];
            stateCopy.controlSquare = [...Array(action.newLevel.h).fill(null).map(() => Array(action.newLevel.w).fill(0))];
            return stateCopy;
        }

        case TOGGLE_FLAG: {
            if (state.isGame) {
                let stateCopy = Object.assign({}, state);
                const [x, y] = returnXY(action.blockYX);
                stateCopy.step += 1;
                if (stateCopy.controlSquare[x][y] === 0) {
                    if (stateCopy.flagBalance > 0) {
                        stateCopy.controlSquare[x][y] = '🏴‍☠️';
                        stateCopy.flagBalance -= 1;
                    }
                } else {
                    stateCopy.controlSquare[x][y] = 0;
                    stateCopy.flagBalance += 1;
                }
                if (!isVictory(stateCopy.controlSquare)) stateCopy.isGame = false;
                return stateCopy;
            } else return state;
        }
        default: return state;
    }
}

export default fieldReducer;

export const deleteBlockCreator = (value) => ({ type: DELETE_BLOCK, blockYX: value });
export const changeGameCreator = (value) => ({ type: CHANGE_GAME, newLevel: value });
export const toggleFlagCreator = (value) => ({ type: TOGGLE_FLAG, blockYX: value });