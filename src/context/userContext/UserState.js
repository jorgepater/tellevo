import { useReducer } from 'react';
import UserContext from './UserContext';
import UserReducer from './UserReducer';

const UserState = ({children}) => {

    const initialState = {
        user: {nombre: 'jesuan'}
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    return (
        <UserContext.Provider
            value={{
                user: state.user
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export default UserState;
