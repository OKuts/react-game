const SET_LEVEL = 'SET_LEVEL';

const initialState = {
    active: 0,
    levels: [
        {
            level: 'beginner',
            w: 10,
            h: 10
        },
        {
            level: 'amateur',
            w: 15,
            h: 15
        },
        {
            level: 'professional',
            w: 20,
            h: 20
        }
    ]
};

const titleReducer = (state = initialState, action) => {

    if (action.type === SET_LEVEL) {
        const stateCopy = Object.assign({}, state);
        stateCopy.active = action.level.level;
        return stateCopy;
    }
    return state;
}
export default titleReducer;

export const changeLevelCreator = (value) => ({ type: SET_LEVEL, level: value });
