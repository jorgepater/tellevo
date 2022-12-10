import { CHANGE_CODE } from '../../types';

export default (state, action) => {
    switch(action.type){

        case CHANGE_CODE: return {
            ...state,
            code: action.payload
        }

        default: return state;
    }
}