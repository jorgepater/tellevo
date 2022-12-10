import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './signup/Signup';
import RegisterNumber from './registerNumber';

const Stack = createNativeStackNavigator();

export default function AuthScreen({setLogin}){

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            
            <Stack.Screen
                name='Login'
                options={{
                    headerStyle: {backgroundColor: '#878787'},
                }}
                >
                {props => <Login {...props} setLogin={setLogin}/>}
            </Stack.Screen>

            <Stack.Screen
                name='Signup'
                >
                {props => <Signup {...props} />}
            </Stack.Screen>

            <Stack.Screen
                name='RegisterNumber'
                component={RegisterNumber}
            />

        </Stack.Navigator>
    )
}
