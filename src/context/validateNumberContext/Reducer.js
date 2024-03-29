import { CHANGE_CODE, VALIDATE_CODE } from '../../types';

export default (state, action) => {
    switch(action.type){

        case CHANGE_CODE: return {
            ...state,
            code: action.payload.code,
            phoneNumber: action.payload.phoneNumber
        }

        case VALIDATE_CODE: return {
            ...state,
            validate: true,
            loading: false
        }

        default: return state;
    }
}