import React, { useContext } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FavoritosContext } from '../FavoritosContext';
export default function TelaReceitaAlema() {
const { adicionarFavorito, removerFavorito, estaFavorito } = useContext(FavoritosContext);
const id = 'alema';
const favorito = estaFavorito(id);
function alternarFavorito() {
if (favorito) removerFavorito(id);
else adicionarFavorito({
id,
nome: 'Torta Alemã',
imagem: require('../assets/alema.jpg'),
});
}
return (
<ScrollView style={styles.container}>
<Image source={require('../assets/alema2.jpg')} style={styles.imagem} />
<View style={styles.header}>
<Text style={styles.titulo}>Torta Alemã</Text>
<TouchableOpacity onPress={alternarFavorito}>
<AntDesign name={favorito ? 'star' : 'staro'} size={24} color="#46210B" />
</TouchableOpacity>
</View>
<View style={styles.tempoContainer}>
<AntDesign name="clockcircleo" size={18} color="#46210B" />
<Text style={styles.tempoTexto}>20min</Text>
</View>
<Text style={styles.sectionTitle}>Ingredientes</Text>
<Text style={styles.sectionSubTitle}>Massa</Text>
<Text style={styles.text}>
• 200 g de manteiga sem sal{'\n'}
• 1 xícara (chá) de açúcar{'\n'}
• 1 lata de creme de leite sem soro{'\n'}
• 1 pacote de bolacha maisena{'\n'}
• Leite, o quanto baste, para molhar a bolacha{'\n'}
• 1 lata de leite condensado, sabor chocolate (ou cobertura de sorvete)
</Text>
<Text style={styles.sectionTitle}>Modo de preparo</Text>
<Text style={styles.sectionSubTitle}>Montagem</Text>
<Text style={styles.text}>
1. Coloque a manteiga e o açúcar na batedeira e bata até obter um creme bem fofo e liso.{'\n\n'}
2. Acrescente o creme de leite e bata rapidamente apenas para misturar. Desligue a batedeira e reserve.{'\n\n'}
3. Separe um recipiente médio para montar o doce.{'\n\n'}
4. Acrescente um pouco de leite num prato fundo e molhe rapidamente algumas bolachas maisena no leite.{'\n\n'}
5. Forre o fundo do recipiente escolhido com uma camada de bolachas.{'\n\n'}
6. Acrescente uma camada do creme reservado sobre as bolachas.{'\n\n'}
7. Acrescente mais uma camada de bolachas molhadas no leite e repita o procedimento, finalizando com a bolacha.{'\n\n'}
8. Cubra a última camada de bolachas com o leite condensado sabor chocolate (ou cobertura).{'\n\n'}
9. Leve à geladeira por no mínimo 3 horas ou até que o doce fique bem gelado.{'\n\n'}
10. Retire da geladeira e sirva a seguir.
</Text>
</ScrollView>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F5DDC7'
},
imagem: {
width: '100%',
height: 200,
borderRadius: 10
},
header: {
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
padding: 15

},
titulo: {
fontSize: 24,
fontWeight: 'bold',
color: '#46210B'
},
tempoContainer: {
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 15,
marginTop: 5
},
tempoTexto: {
marginLeft: 5,
fontSize: 16,
color: '#46210B'
},
sectionTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#46210B',
paddingHorizontal: 15,
marginTop: 20,
marginBottom: 8
},
sectionSubTitle: {
fontSize: 16,
fontWeight: 'bold',
color: '#46210B',
paddingHorizontal: 15,
marginTop: 10,
marginBottom: 4
},
text: {
fontSize: 16,
color: '#46210B',
lineHeight: 24,
paddingHorizontal: 15,
marginBottom: 20
}
});