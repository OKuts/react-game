const SET_LEVEL = 'SET_LEVEL';

const initialState = {
    w: 10,
    h: 10
};

const titleReducer = (state = initialState, action) => {
    if (action.type === SET_LEVEL) {
        state.w = action.field.w;
        state.h = action.field.h;
    }
    return state;
}
export default titleReducer;

export const changeLevelCreator = (value) => ({ type: SET_LEVEL, field: value });
