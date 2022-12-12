import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SwitchScreenlogin from './src/components/switchScreen/SwitchScreenlogin';
import AuthState from './src/context/authContext/AuthState';
import ValidateNumberState from './src/context/validateNumberContext/State';
import UserState from './src/context/userContext/UserState';

export default function App() {
  return (
    <NavigationContainer>

        <ValidateNumberState>
          <AuthState>
            <UserState>
            
              <SwitchScreenlogin />

            </UserState>
          </AuthState>
        </ValidateNumberState>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
