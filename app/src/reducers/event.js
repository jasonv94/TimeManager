import {
    AUTH_ERROR,
    LOAD_EVENTS,
} from '../actions/types';

const initialState = {
    events: [],
    loading: true,
};

function authReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case LOAD_EVENTS:
            return {
                ...state,
                events: payload,
                loading: false
            };
        default:
            return state;
    }
}

export default authReducer;