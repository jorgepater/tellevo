import { View,StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import AuthContext from '../../../context/authContext/AuthContext';
import { useContext } from "react";

export default function Buttons({dataRegister, navigation: {goBack}}){

    const { login } = useContext(AuthContext);

    const onSubmit = () => {
        for(const key in dataRegister){
            const value = dataRegister[key];
            if(value.trim() === '')
                return Alert.alert('Completa todos los dato');
        }

        login();
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => goBack()}
            >
                <View style={styles.button}>
                    <MaterialIcons name="arrow-back-ios" size={30} color="#5F9DF7" />
                    <View>
                        <Text>Atrás</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => onSubmit()}
            >
                <View style={styles.button}>
                    <View>
                        <Text>Siguiente</Text>
                    </View>
                    <MaterialIcons name="arrow-forward-ios" size={30} color="#5F9DF7" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        position: "absolute",
        bottom: 20,
    },
    button: {
        // width: '40%',
        flexDirection: "row",
        alignItems: "center",
    },
})
