import { useReducer } from 'react';
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import clientAxios from '../../config/axios';

import { LOG_IN } from '../../types';

export default authState = ({children}) => {

    const initialState = {
        loading: true,
        logged: false,
        user: {}
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const getUser = () => {

    }

    const signup = async (userData) => {

        const response = await clientAxios.post('/user', userData);
        console.log(response);

        dispatch({
            type: LOG_IN,
            payload: response.data
        })
    }


    return (
        <AuthContext.Provider value={{
            loading: state.loading,
            logged: state.logged,

            signup
        }}>
            {children}
        </AuthContext.Provider>
    )
}
