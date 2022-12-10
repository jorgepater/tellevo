import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';
import { Title } from '../authStyles';

export default function RegistroPersonales(){

    const dataRegistro = ['C.C', 'Pasaporte', 'Licencia'];

    return (
        <View>

            <Title>
                Registro Personales
            </Title>

            <View>

                <View style={styles.containerinput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombres"
                        keyboardType="text"
                    />
                </View>

                <View style={styles.containerinput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Apellidos"
                        keyboardType="text"
                    />
                </View>

                <View style={{...styles.containerinput,flexDirection: 'row'}}>
                    
                    <SelectDropdown
                        buttonTextStyle={{fontSize: 14}}
                        buttonStyle={{width: '30%', borderRadius: 10, height: 35, backgroundColor: 'transparent', borderWidth: 1, borderColor: 'grey'}}
                        defaultButtonText='Documento'
                        renderDropdownIcon={() => <AntDesign name="down" size={10} color="black" />}
                        data={dataRegistro}
                        onSelect={(selectedItem) => {
                            console.log(selectedItem)
                        }}
                    />

                    <View style={{width: '69.9%'}}>
                        <TextInput
                            style={{...styles.input, width: '100%'}}
                            keyboardType='numeric'
                            placeholder='Número'
                        />
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerinput: {
        marginBottom: 10
    },
    input: {
        height: 35,
        maxWidth: '100%',
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 10,
        marginBottom: 3
    },
});
