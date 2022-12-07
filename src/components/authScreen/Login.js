import { View, Button } from 'react-native';

export default function Login({setLogin, navigation}){

    return (
        <View>
            <Button title='Login' onPress={() => setLogin(true)} />
            <View style={{marginVertical: 15}}></View>
            <Button title='Registrar' onPress={() => navigation.navigate('Signup')} />
        </View>
    )
}