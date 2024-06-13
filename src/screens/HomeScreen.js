import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/applogo.png')}
                style={styles.image}
            />
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.cityButton}>
                    <Text style={styles.cityButtonText}>Cidades</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.attractionsButton}>
                    <Text style={styles.attractionsButtonText}>Atrações</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: 'cover',
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    cityButton: {
        backgroundColor: 'purple',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    cityButtonText: {
        color: 'white',
        fontSize: 18,
    },
    attractionsButton: {
        backgroundColor: 'white',
        borderColor: 'purple',
        borderWidth: 2,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    attractionsButtonText: {
        color: 'purple',
        fontSize: 18,
    },
});

export default HomeScreen;
