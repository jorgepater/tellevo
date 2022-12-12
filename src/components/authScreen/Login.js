import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Title } from './authStyles';

export default function Login({navigation}){

    return (
        <View style={styles.container}>

            <Title marginBottom={70}>
                Registro
            </Title>

            <TouchableOpacity
                onPress={() => navigation.navigate('RegisterNumber', {typeOfRegister: 'signin'})}
            >
                <View style={styles.button}>
                    <View style={styles.viewImage}>
                        <Image
                            style={styles.image}
                            source={
                                require('../../../assets/phone.png')
                            }
                        />
                    </View>

                    <View>
                        <Text>Continúa con número de telefono</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={styles.button}>
                <View style={styles.viewImage}>
                    <Image
                        style={styles.image}
                        source={
                            require('../../../assets/google.png')
                        }
                    />
                </View>

                <View>
                    <Text>Continúa con Google</Text>
                </View>
            </View>

            <View style={styles.button}>
                <View style={styles.viewImage}>
                    <Image
                        style={styles.image}
                        source={
                            require('../../../assets/facebook.png')
                        }
                    />
                </View>

                <View>
                    <Text>Continúa con Facebook</Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('RegisterNumber', {typeOfRegister: 'signup'})}
            >
                <Text style={{textAlign: 'center', marginTop: 30}}>Crear una cuenta</Text>
            </TouchableOpacity>

            <Text style={{marginTop: 30}}>
                Al continuar, aceptas recibir llamadas, WhatsApp o SMS de Tllevo y de sus afiliados al número proporcionado, incluso de forma automática.
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center'
    },
    image: {
        width: 40,
        height: 40,
    },
    viewImage: {
        position: 'absolute',
        left: 10
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: 45,
        borderRadius: 10,
        padding: 8,
        marginBottom: 10,
    },
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
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        color: '#fff'
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
});
