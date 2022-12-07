import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './signup/Signup';
import RegisterNumber from './signup/RegisterNumber';

const Stack = createNativeStackNavigator();

export default function AuthScreen({setLogin}){

    return (
        <Stack.Navigator>
            
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
                options={{
                    headerBackVisible: false,
                    headerShown: false
                }}
                >
                {props => <Signup {...props} />}
            </Stack.Screen>

            <Stack.Screen name='RegisterNumber' component={RegisterNumber}  />

        </Stack.Navigator>
    )
}
