import { useReducer } from 'react';
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import clientAxios from '../../config/axios';

import { SIGN_UP, LOG_IN } from '../../types';

export default authState = ({children}) => {

    const initialState = {
        loading: true,
        logged: false,
        user: {}
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // const getUser = () => {

    // }

    const signup = async (userData) => {

        const response = await clientAxios.post('/user', userData);


        dispatch({
            type: SIGN_UP,
            payload: {...response.data.user, document: response.data.document}
        })
    }

    const login = async phoneNumber => {

        try{
            const response = await clientAxios.get(`/user?phoneNumber=${phoneNumber}`);
    
            dispatch({
                type: LOG_IN,
                payload: {...response.data}
            });
        }catch(e){
            console.log(e)
        }
    }


    return (
        <AuthContext.Provider value={{
            loading: state.loading,
            logged: state.logged,
            user: state.user,

            signup,
            login
        }}>
            {children}
        </AuthContext.Provider>
    )
}
