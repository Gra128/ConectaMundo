import * as React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native';

export function HomeScreen({ navigation }) {
  const { width, height } = Dimensions.get('window');

  // Remover o título padrão da tela
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: '', // Definir o título como vazio para remover o título padrão
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('./assets/imagens/logoabertura.png')} style={styles.image} resizeMode="contain" />
      </View>
      <View style={[styles.buttonContainer, { marginTop: '0' }]}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#370e43', height: height * 0.1 }]}
          onPress={() => navigation.navigate('TourismDetailsScreen')}
        >
          <Text style={styles.buttonText}>Cidades</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'white', borderColor: '#370e43', borderWidth: 1, height: height * 0.1 }]}
          onPress={() => navigation.navigate('Atracoes')}
        >
          <Text style={[styles.buttonText, { color: '#370e43' }]}>Atrações</Text>
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
  imageContainer: {
    marginTop: -Dimensions.get('window').height * 0.14,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    marginTop: 0,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'flex-end',
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
});

export default HomeScreen;
