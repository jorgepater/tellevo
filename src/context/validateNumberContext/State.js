import { useReducer } from 'react';
import ValidateNumberContext from './Context';
import ValidateNumberReducer from './Reducer';
import clientAxios from '../../config/axios';
import { CHANGE_CODE, VALIDATE_CODE } from '../../types';


const ValidateNumberState = ({children}) => {

    const initialState = {
        code: '',
        validate: false,
        loading: true
    }

    const [state, dispatch] = useReducer(ValidateNumberReducer, initialState);

    const sendMessage = async (phoneNumber) => {
        try{
            const response = await clientAxios.post('/validateNumber', {phoneNumber});
            console.log(response.data.code);
            dispatch({
                type: CHANGE_CODE,
                payload: response.data.code
            })
        }
        catch(e){
            console.log(e);
        }    
    }

    const validateCode = () => {
        dispatch({
            type: VALIDATE_CODE
        })
    }

    return (
        <ValidateNumberContext.Provider
            value={{
                code: state.code,
                validate: state.validate,
                loading: state.loading,

                sendMessage,
                validateCode
            }}
        >
            {children}
        </ValidateNumberContext.Provider>
    )

}

export default ValidateNumberState;
