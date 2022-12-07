import React from 'react';
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native';

export default function RegisterNumber(){

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>Registrar Numero</Text>
            </View>

            <View style={{alignItems: 'center'}}>

                <TextInput
                    style={styles.input}
                    placeholder='Numero'

                />

                <TouchableOpacity
                    onPress={() => console.log('Enviando códigp')}
                >
                    <View style={styles.button}>
                        <Text>Enviar código</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    containerinput: {
        marginBottom: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5F9DF7',
        width: '100%',
        height: 35,
        borderRadius: 10,
        padding: 8
    },
    titleView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: 50,
        backgroundColor: '#5F9DF7',
        borderRadius: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 20,
        color: '#fff'
    },
    input: {
        height: 35,
        width: 200,
        maxWidth: '100%',
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 10,
        marginBottom: 3
    },
});
