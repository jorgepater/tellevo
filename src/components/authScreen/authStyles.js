import { View, Text, StyleSheet, Image } from 'react-native';

export function Title({children, marginBottom}){

    let bottom = !marginBottom ? 10 : marginBottom;

    return (
        <View style={{...styles.titleView, marginBottom: bottom}}>
            <Text style={styles.title}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
})
