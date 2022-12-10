import { useContext } from "react"
import { Text, View } from "react-native";
import ValidateNumberContext from "../../../context/validateNumberContext/Context"

export default function ProtectedAuth({children, navigation: {goBack}}){

    const { validate, loading } = useContext(ValidateNumberContext);

    if(loading){
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>Loading...</Text>
            </View>
        )
    }
    else if(validate){
        return <>{children}</>
    }
    else if(!loading && !validate){
        goBack()
    }
}
