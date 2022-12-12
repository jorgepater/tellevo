import { useReducer } from 'react';
import ValidateNumberContext from './Context';
import ValidateNumberReducer from './Reducer';
import clientAxios from '../../config/axios';
import { CHANGE_CODE, VALIDATE_CODE } from '../../types';


const ValidateNumberState = ({children}) => {

    const initialState = {
        code: '',
        validate: false,
        loading: true,
        phoneNumber: ''
    }

    const [state, dispatch] = useReducer(ValidateNumberReducer, initialState);

    const sendMessage = async (phoneNumber) => {
        try{
            const response = await clientAxios.post('/validateNumber', {phoneNumber});
            console.log(response.data.code);
            dispatch({
                type: CHANGE_CODE,
                payload: {code: response.data.code, phoneNumber}
            });
        }
        catch(e){
            console.log(e);
        }    
    }

    const validateCode = () => {
        dispatch({
            type: VALIDATE_CODE
        });
    }

    return (
        <ValidateNumberContext.Provider
            value={{
                code: state.code,
                validate: state.validate,
                loading: state.loading,
                phoneNumber: state.phoneNumber,

                sendMessage,
                validateCode,
            }}
        >
            {children}
        </ValidateNumberContext.Provider>
    )

}

export default ValidateNumberState;
