import { LOG_IN } from '../../types';

export default (state, action) => {
    switch(action.type){

        case LOG_IN: return {
            ...state,
            logged: true,
            loading: false
        }

        default: return state;
    }
}