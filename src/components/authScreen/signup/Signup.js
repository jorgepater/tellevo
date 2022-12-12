import React, { useState } from 'react';
import {StatusBar} from 'expo-status-bar'
import { View, StyleSheet, ScrollView} from 'react-native';
import RegistroDocumento from './RegistroDocumento';
import RegistroPersonales from './RegistroPersonales';
import Buttons from './Buttons';

export default function Signup({navigation}){


    // dayExp significa dia de expedicion, y asi con todos
    const [dataRegister, setDataRegister] = useState({
        firstName: '',
        lastName: '',
        documentType: '',
        documentNumber: '',
        dayExp: '',
        monthExp: '',
        yearExp: '',
        countryExp: '',
        cityExp: ''
    })
    
    return (
        <>
            <StatusBar
                backgroundColor={'transparent'}
                // style="light"
                translucent={false}
            />

            <View style={styles.container}>
                <View style={styles.containerform}>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <RegistroPersonales dataRegister={dataRegister} setDataRegister={setDataRegister}/>

                        <RegistroDocumento dataRegister={dataRegister} setDataRegister={setDataRegister}/>

                    </ScrollView>

                    <Buttons navigation={navigation} dataRegister={dataRegister} />

                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerform: {
        // backgroundColor: '#fff',
        marginHorizontal: 20,
        height: '100%',
        justifyContent: 'center',
    },
});
