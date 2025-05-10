import React, { useContext } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FavoritosContext } from '../FavoritosContext';

export default function TelaReceitaTrigo() {
 const { adicionarFavorito, removerFavorito, estaFavorito } = useContext(FavoritosContext);
 const id = 'bolo-trigo';
 const favorito = estaFavorito(id);

 function alternarFavorito() {
  if (favorito) removerFavorito(id);
  else
   adicionarFavorito({
    id,
    nome: 'Bolo de Trigo',
    imagem: require('../assets/trigo2.jpg'), 
   });
 }

 return (
  <ScrollView style={styles.container}>
   <Image source={require('../assets/trigo2.jpg')} style={styles.imagem} />

   <View style={styles.header}>
    <Text style={styles.titulo}>Bolo de Trigo</Text>
    <TouchableOpacity onPress={alternarFavorito}>
     <AntDesign name={favorito ? 'star' : 'staro'} size={24} color="#46210B" />
    </TouchableOpacity>
   </View>

   <View style={styles.tempoContainer}>
    <AntDesign name="clockcircleo" size={18} color="#46210B" />
    <Text style={styles.tempoTexto}>55min</Text>
   </View>

   <Text style={styles.subtitulo}>Ingredientes</Text>
   <Text style={styles.texto}>
    Massa{'\n'}
    - 2 xícaras de açúcar{'\n'}
    - 2 colheres de manteiga{'\n'}
    - 1 xícara de leite{'\n'}
    - 2 xícaras de farinha de trigo{'\n'}
    - 3 ovos{'\n'}
    - 1 e 1/2 colheres de fermento
   </Text>

   <Text style={styles.subtitulo}>Modo de preparo</Text>
   <Text style={styles.texto}>
    1. Bata as claras em neve e reserve.{'\n\n'}
    2. Bata a manteiga, o açúcar e as gemas.{'\n\n'}
    3. Junte com a farinha e o leite.{'\n\n'}
    4. Bata bem, até ficar bem homogêneo.{'\n\n'}
    5. Acrescente o fermento.{'\n\n'}
    6. Por último, adicione as claras em neve e mexa cuidadosamente.{'\n\n'}
    7. Coloque em uma forma untada com manteiga e farinha de trigo e leve ao forno médio, pré-aquecido, por aproximadamente 35 minutos, ou até que espetando um palito, este saia seco.
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
  color: '#46210B',
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
  color: '#46210B',
 },
 subtitulo: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 20,
  marginBottom: 10,
  color: '#46210B',
  marginLeft: 20,
 },
 texto: {
  fontSize: 16,
  color: '#46210B',
  marginHorizontal: 20,
  lineHeight: 24,
  marginBottom: 20,
 },
});
