import { View,StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Buttons({navigation}){

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <View style={styles.button}>
                    <MaterialIcons name="arrow-back-ios" size={30} color="#5F9DF7" />
                    <View>
                        <Text>Atrás</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('RegisterNumber')}
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
