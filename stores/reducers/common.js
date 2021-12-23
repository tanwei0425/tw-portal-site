import { COMMON } from '../actionTypes';
const initialState = {
    demo: 'initDemo'
};
const common = (state = initialState, action) => {
    switch (action.type) {
        case COMMON.DEMO:
            return Object.assign({}, state, {
                demo: action.demo
            });
        default: return state
    }
};
export default common