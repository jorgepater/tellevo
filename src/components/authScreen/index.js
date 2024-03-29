import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './signup/Signup';
import RegisterNumber from './registerNumber';
import ProtectedAuth from './protectedAuth';

const Stack = createNativeStackNavigator();

export default function AuthScreen(){

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
                {props => <Login {...props} />}
            </Stack.Screen>

            <Stack.Screen
                name='Signup'
                >
                {props => (
                    <ProtectedAuth {...props}>
                        <Signup {...props} />
                    </ProtectedAuth>
                )}
            </Stack.Screen>

            <Stack.Screen
                name='RegisterNumber'
                component={RegisterNumber}
            />

        </Stack.Navigator>
    )
}
