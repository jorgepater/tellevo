import { useReducer } from 'react';
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

import { LOG_IN } from '../../types';

export default authState = ({children}) => {

    const initialState = {
        loading: true,
        logged: false,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const login = () => {
        dispatch({
            type: LOG_IN
        })
    }


    return (
        <AuthContext.Provider value={{
            loading: state.loading,
            logged: state.logged,

            login
        }}>
            {children}
        </AuthContext.Provider>
    )
}
