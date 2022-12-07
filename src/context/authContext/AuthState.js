import { useReducer } from 'react';
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";

export default authState = ({children}) => {

    const initialState = {
        loading: true,
        login: false,
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);


    return (
        <AuthContext.Provider value={{
            loading: state.loading,
            login: state.login
        }}>
            {children}
        </AuthContext.Provider>
    )
}
