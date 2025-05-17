import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FavoritosContext } from '../FavoritosContext';

export default function TelaReceitaPalha() {
 const { adicionarFavorito, removerFavorito, estaFavorito } = useContext(FavoritosContext);
 const id = 'palha';
 const favorito = estaFavorito(id);

 function alternarFavorito() {
  if (favorito) removerFavorito(id);
  else
   adicionarFavorito({
    id,
    nome: 'Palha italiana',
    imagem: require('../assets/palha.jpg'),
   });
 }

 return (
  <ScrollView style={styles.container}>
   <Image source={require('../assets/palha2.jpg')} style={styles.imagem} />

   <View style={styles.header}>
    <Text style={styles.titulo}>Palha italiana</Text>
    <TouchableOpacity onPress={alternarFavorito}>
     <AntDesign name={favorito ? 'star' : 'staro'} size={24} color="#B15129" />
    </TouchableOpacity>
   </View>

   <View style={styles.tempoContainer}>
    <AntDesign name="clockcircleo" size={18} color="#B15129" />
    <Text style={styles.tempoTexto}>30min</Text>
   </View>

   <Text style={styles.subtitulo}>Ingredientes</Text>
   <Text style={styles.texto}>
    - 1 lata de leite condensado{'\n'}
    - 8 colheres (sopa) de chocolate em pó{'\n'}
    - 1/2 colher (sopa) de margarina{'\n'}
    - 1 pacote de biscoito maisena
   </Text>

   <Text style={styles.subtitulo}>Modo de preparo</Text>
   <Text style={styles.texto}>
    1. Pique o biscoito em pedacinhos pequenos e reserve.{'\n\n'}
    2. Com o leite condensado, a margarina e o chocolate em pó, faça um brigadeiro.{'\n\n'}
    3. Assim que o brigadeiro começar a soltar do fundo da panela, misture o biscoito picado até formar uma massa, retire do fogo.{'\n\n'}
    4. Unte uma bancada de mármore, ou alguma superfície lisa, com margarina e despeje essa massa.{'\n\n'}
    5. Abra a massa, batendo com a palma das mãos.{'\n\n'}
    6. Deixe esfriar e corte em quadradinhos.
   </Text>
  </ScrollView>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#F5DDC7',
 },
 imagem: {
  width: '100%',
  height: 200,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
 },
 header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20,
  marginTop: 10,
 },
 titulo: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#B15129',
 },
 tempoContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 5,
  marginLeft: 20,
 },
 tempoTexto: {
  marginLeft: 5,
  fontSize: 16,
  color: '#B15129',
 },
 subtitulo: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 20,
  marginBottom: 10,
  color: '#B15129',
  marginLeft: 20,
 },
 texto: {
  fontSize: 16,
  color: '#B15129',
  marginHorizontal: 20,
  lineHeight: 24,
  marginBottom: 20,
 },
});
