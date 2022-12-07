import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';

export default function RegistroPersonales(){

    const dataRegistro = ['C.C', 'Pasaporte', 'Licencia'];

    return (
        <View>

            <View style={styles.titleView}>
                <Text style={styles.title}>Registro Personales</Text>
            </View>

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
    // button: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#5F9DF7',
    //     width: '100%',
    //     height: 50,
    //     borderRadius: 10,
    // },
    containerinput: {
        marginBottom: 10
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
        maxWidth: '100%',
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 10,
        marginBottom: 3
    },
});
