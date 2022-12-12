import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RegisterNumber from './RegisterNumber';
import VerifyCode from './VerifyCode';

export default function Index({route, navigation}){

    const [sendCode, setSendCode] = useState(false);

    return (
        <View style={styles.container}>

            <RegisterNumber route={route} sendCode={sendCode} setSendCode={setSendCode} />

            {sendCode && <VerifyCode route={route} navigation={navigation}/>}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center'
    },
});
