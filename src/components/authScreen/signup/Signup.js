import React from 'react';
import {StatusBar} from 'expo-status-bar'
import { View, StyleSheet} from 'react-native';
import RegistroDocumento from './RegistroDocumento';
import RegistroPersonales from './RegistroPersonales';
import Buttons from './Buttons';

export default function Signup({navigation}){
    
    return (
        <>
            <StatusBar
                // backgroundColor={'transparent'}
                // style="light"
            />

            <View style={styles.container}>
                <View style={styles.containerform}>

                    <RegistroPersonales />

                    <RegistroDocumento />

                    <Buttons navigation={navigation} />

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
