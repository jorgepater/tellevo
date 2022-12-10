import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RegisterNumber from './RegisterNumber';
import VerifyCode from './VerifyCode';

export default function Index({navigation}){

    const [sendCode, setSendCode] = useState(false);

    return (
        <View style={styles.container}>

            <RegisterNumber sendCode={sendCode} setSendCode={setSendCode} />

            {sendCode && <VerifyCode navigation={navigation}/>}

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
