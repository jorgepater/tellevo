import React from 'react';
import MyTabs from '../MyTabs';
import AuthScreen from '../authScreen';

export default function SwitchScreenlogin(){

    const [login, setLogin] = React.useState(false);

    if(!login){
        return <AuthScreen setLogin={setLogin} />
    }

    else if(login){
        return <MyTabs />
    }
}