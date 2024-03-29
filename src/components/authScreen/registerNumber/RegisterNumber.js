import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { Title } from '../authStyles';
import ValidateNumberContext from '../../../context/validateNumberContext/Context';

export default function RegisterNumber({sendCode,setSendCode}){

    const { sendMessage } = useContext(ValidateNumberContext);

    const [phoneNumbre, setPhoneNumber] = useState('');
    const [error, setError] = useState('');

    const handleChange = value => {
        setError('');
        setPhoneNumber(value);
    }

    const onSubmit = () => {

        if(phoneNumbre.trim() === '' || phoneNumbre.trim().length < 10 || phoneNumbre.trim().length > 10){
            return setError('El número ingresado es incorrecto');
        }

        setSendCode(true);
        sendMessage(phoneNumbre);
    }

    function changeColorButton(){
        return phoneNumbre.trim().length < 10 || phoneNumbre.trim().length > 10 ? 'grey' : '#5F9DF7'
    }

    return (
        <View style={styles.container}>
            <Title>
                Registrar Numero
            </Title>

            {error && <Text style={styles.error}>{error}</Text>}

            <View style={{alignItems: 'center'}}>

                <TextInput
                    style={styles.input}
                    value={phoneNumbre}
                    keyboardType='numeric'
                    placeholder='Número'
                    editable={!sendCode}
                    onChangeText={handleChange}
                />

                <TouchableOpacity
                    disabled={sendCode}
                    onPress={onSubmit}
                >
                    <View style={{...styles.button, backgroundColor: changeColorButton()}}>
                        <Text>Enviar código</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
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
    input: {
        height: 35,
        width: 200,
        width: '100%',
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
    error: {
        color: 'red',
        margin: 5
    }
});
