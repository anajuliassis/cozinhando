import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function TelaInicial({ navigation }) {
 return (
  <View style={styles.container}>
   <Image source={require('../assets/brito.png')} style={styles.image} />
   <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
    <Text style={styles.text}>Cozinhando com o Brito</Text>
   </TouchableOpacity>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5DDC7'
 },
 image: {
  width: 200,
  height: 200,
  marginBottom: 20
 },
 text: {
  fontSize: 20,
  color: '#C23116',
  fontWeight: 'bold'
 }
});
