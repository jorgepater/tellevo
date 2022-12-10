import { useReducer } from 'react';
import ValidateNumberContext from './Context';
import ValidateNumberReducer from './Reducer';


const ValidateNumberState = ({children}) => {

    const initialState = {
        code: '123456'
    }

    const [state, dispatch] = useReducer(ValidateNumberReducer, initialState);

    return (
        <ValidateNumberContext.Provider
            value={{
                code: state.code
            }}
        >
            {children}
        </ValidateNumberContext.Provider>
    )

}

export default ValidateNumberState;
