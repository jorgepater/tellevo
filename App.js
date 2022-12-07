import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SwitchScreenlogin from './src/components/switchScreen/SwitchScreenlogin';
import AuthState from './src/context/authContext/AuthState';

export default function App() {
  return (
    <NavigationContainer>
      <AuthState>
        <SwitchScreenlogin />
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
