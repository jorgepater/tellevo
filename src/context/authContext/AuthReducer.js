import { SIGN_UP, LOG_IN } from '../../types';

export default (state, action) => {
    switch(action.type){

        case LOG_IN:
        case SIGN_UP: return {
            ...state,
            logged: true,
            loading: false,
            user: action.payload
        }

        default: return state;
    }
}