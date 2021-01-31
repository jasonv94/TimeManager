import api from '../utils/api';
import {
    LOAD_EVENTS,
    AUTH_ERROR
} from './types';

// Load User
export const load_events = () => async dispatch => {
    try {
        const res = await api.get('/events');
        console.log(res.data);
        dispatch({
            type: LOAD_EVENTS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
        // dispatch({
        //     type: AUTH_ERROR
        // });
    }
};