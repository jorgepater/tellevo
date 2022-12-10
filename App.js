import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SwitchScreenlogin from './src/components/switchScreen/SwitchScreenlogin';
import AuthState from './src/context/authContext/AuthState';
import ValidateNumberState from './src/context/validateNumberContext/State';

export default function App() {
  return (
    <NavigationContainer>

        <AuthState>
          <ValidateNumberState>
          
          <SwitchScreenlogin />

          </ValidateNumberState>
        </AuthState>

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
