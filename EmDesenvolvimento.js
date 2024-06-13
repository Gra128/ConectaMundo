import * as React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';

export function EmDesenvolvimento({ navigation }) {
    const { width, height } = Dimensions.get('window');

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('./assets/imagens/manutencao.jpg')} style={[styles.image, { marginBottom: -Dimensions.get('window').height * 0.10 }]} resizeMode="contain" />

            </View>
            <View style={styles.container}>

                <Text style={styles.title}>Em desenvolvimento</Text>
            </View>
            <View style={[styles.buttonContainer, { marginTop: '0' }]}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: '#370e43', height: height * 0.1 }]}
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <Text style={styles.buttonText}>Tela inicial</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: '#002882',
        width: '100%',
        alignItems: 'center',
    },
    headerText: {
        color: '#e7ecff',
        fontSize: 18,
    },
    imageContainer: {
        marginTop: -Dimensions.get('window').height * 0.13,
        width: '100%',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('window').width,
    },
    buttonContainer: {
        width: '80%',
        justifyContent: 'flex-end',
        paddingBottom: Dimensions.get('window').height * 0.19,
    },
    button: {
        marginBottom: Dimensions.get('window').height * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 3,
        shadowOpacity: 1,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        color: '#370e43',
        //marginBottom: Dimensions.get('window').height * 0.01,
        marginTop: -Dimensions.get('window').height * 0,
        fontWeight: 'bold',
        //textShadowColor: 'rgba(55, 14, 67, 1)',
        //textShadowOffset: { width: 0.2, height: 0.2 },
        //textShadowRadius: 5,
    },
});

export default EmDesenvolvimento;