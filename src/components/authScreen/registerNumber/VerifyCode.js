import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Title} from '../authStyles';

export default function VerifyCode(){

    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    const onChange = value => {
        setCode(value)
    }

    const onSubmit = () => {

        if(code.trim() === '' || code.trim().length < 6 || code.trim().length > 6){
            return setError('Código incorrecto');
        }


    }

    return (
        <View style={styles.container}>
            
            <Title>
                Verificación
            </Title>

            <View>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder='Código'
                    onChangeText={onChange}
                />
            </View>

            <TouchableOpacity
                    disabled={code.length < 6 || code.length > 6 ? true : false}
                    onPress={onSubmit}
                >
                    <View style={{...styles.button, backgroundColor: code.length < 6 || code.length > 6 ? '#989898' : '#5F9DF7'}}>
                        <Text>Validar</Text>
                    </View>
                </TouchableOpacity>

            <View>
                <Text>
                    Coloque el código de seis dígitos que llego a el número de teléfono indicado
                </Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    input: {
        height: 35,
        width: 100,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#5F9DF7',
        width: '100%',
        height: 35,
        borderRadius: 10,
        padding: 8,
        marginBottom: 10
    },
});
