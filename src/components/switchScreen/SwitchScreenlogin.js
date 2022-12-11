import React, { useContext } from 'react';
import MyTabs from '../MyTabs';
import AuthScreen from '../authScreen';
import AuthContext from '../../context/authContext/AuthContext';
import { Text, View } from 'react-native';

export default function SwitchScreenlogin(){

    const { logged, loading } = useContext(AuthContext);

    // if(loading){
    //     return (
    //         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //             <Text style={{fontSize: 20}}>Cargando...</Text>
    //         </View>
    //     );
    // }
    if(!logged){
        return <AuthScreen />
    }
    else if(logged){
        return <MyTabs />
    }
}