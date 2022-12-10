import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Title} from '../authStyles';
import ValidateNumberContext from '../../../context/validateNumberContext/Context';

export default function VerifyCode({navigation}){

    const { code, validateCode } = useContext(ValidateNumberContext);

    const [valitadeCode, setValitadeCode] = useState('');
    const [error, setError] = useState('');

    const onChange = value => {
        setError('');
        setValitadeCode(value);
    }

    const onSubmit = () => {

        if(valitadeCode.trim() === ''
            || valitadeCode.trim().length < 6
            || valitadeCode.trim().length > 6
            || valitadeCode !== code
        ){
            return setError('Código incorrecto');
        }

        validateCode();
        navigation.navigate('Signup');
    }

    return (
        <View style={styles.container}>
            
            <Title>
                Verificación
            </Title>

            {error && <Text style={styles.error}>{error}</Text>}

            <View>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    placeholder='Código'
                    onChangeText={onChange}
                />
            </View>

            <TouchableOpacity
                    disabled={valitadeCode.length < 6 || valitadeCode.length > 6 ? true : false}
                    onPress={onSubmit}
                >
                    <View style={{...styles.button, backgroundColor: valitadeCode.length < 6 || valitadeCode.length > 6 ? '#989898' : '#5F9DF7'}}>
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
        width: '100%',
        height: 35,
        borderRadius: 10,
        padding: 8,
        marginBottom: 10
    },
    error: {
        color: 'red',
        margin: 5
    }
});
