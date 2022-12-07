import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/components/MyTabs';
import SwitchScreenlogin from './src/components/switchScreen/SwitchScreenlogin';

export default function App() {
  return (
    <NavigationContainer>
      <SwitchScreenlogin />
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
