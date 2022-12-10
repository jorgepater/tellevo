import { useReducer } from 'react';
import ValidateNumberContext from './Context';
import ValidateNumberReducer from './Reducer';
import clientAxios from '../../config/axios';
import { CHANGE_CODE } from '../../types';


const ValidateNumberState = ({children}) => {

    const initialState = {
        code: ''
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

    return (
        <ValidateNumberContext.Provider
            value={{
                code: state.code,

                sendMessage
            }}
        >
            {children}
        </ValidateNumberContext.Provider>
    )

}

export default ValidateNumberState;
