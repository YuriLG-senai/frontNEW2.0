import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Inicio() {
  const navigation = useNavigation();

  return (
    <View style={styles.body}>
      <Image
        source={{ uri: 'https://assespropr.org.br/wp-content/uploads/2022/05/Senai-300x300.png' }}
        style={styles.image}
      />

      <View style={styles.menu}>
        <Text style={styles.title}>Livrarias SENAI</Text>
        <View style={styles.buttongroup}>
          <View style={styles.button}>
            <Button
              title="Livros"
              color="#003D73"
              onPress={() => navigation.navigate('VerLivros')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Locar Livro"
              color="#003D73"
              onPress={() => navigation.navigate('EmprestarLivro')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Devolução"
              color="#003D73"
              onPress={() => navigation.navigate('DevolverLivro')}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Clientes"
              color="#003D73"
              onPress={() => navigation.navigate('Clientes')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#003D73',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  menu: {
    backgroundColor: 'white',
    padding: 30,
    width: 300,
    height: 350,
    borderRadius: 8,
    zIndex: 1,  
  },
  title: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 15,
  },
  buttongroup: {
    gap: 10,
  },
  image: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 80, 
    height: 80, 
    borderRadius: 8,  
  },
});
