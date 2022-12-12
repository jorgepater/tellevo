import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from '@react-navigation/native';
import AuthContext from '../context/authContext/AuthContext';
import { useContext } from 'react';

export default function HomeScreen() {

  const {user} = useContext(AuthContext);

  console.log(user);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Home</Text>
      <Link to={{ screen: 'Profile' }}>
        Go to Profile
      </Link>

      <Text style={{marginTop: 5}}>
        nombre: {user.firstName}
      </Text>
      <Text>
        apellido: {user.lastName}
      </Text>
      <Text>
        telefono: {user.phoneNumber}
      </Text>
      <Text>
        {user.document.documentType}: {user.document.documentNumber}
      </Text>
      <Text>
        fecha de expedicion: {user.document.dateExp}
      </Text>
    </View>
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
