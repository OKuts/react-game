import { matrix } from "../lib/funcs";

const DELETE_BLOCK = 'DELETE_BLOCK';

const initialState = {
    gameSquare: matrix(10, 10),
    bombs: 10
};

const fieldReducer = (state = initialState, action) => {
    console.log(action)
    return state;
}
export default fieldReducer;

export const deleteBlockCreator = (value) => ({ type: DELETE_BLOCK, blockYX: value });