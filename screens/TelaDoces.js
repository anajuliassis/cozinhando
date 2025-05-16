import React from 'react'; 
import { 
View, 
Text, 
Image, 
StyleSheet, 
FlatList, 
Dimensions, 
TouchableOpacity 
} from 'react-native'; 
import TelaReceitaCheesecake from './TelaReceitaCheesecake'; 
export default function TelaDoces({ navigation }) { 
const doces = [ 
{ nome: 'Bolo de cenoura', imagem: require('../assets/cenoura.jpg'), rota: 'ReceitaCenoura' }, 
{ nome: 'Bolo de chocolate', imagem: require('../assets/chocolate.jpg'), rota: 'ReceitaChocolate' }, 
{ nome: 'Bolo de trigo', imagem: require('../assets/trigo.jpg'), rota: 'ReceitaTrigo' }, 
{ nome: 'Palha italiana', imagem: require('../assets/palha.jpg'), rota: 'ReceitaPalha' }, 
{ nome: 'Torta Alemã', imagem: require('../assets/alema.jpg'), rota: 'ReceitaAlema' }, 
{ nome: 'Cheesecake', imagem: require('../assets/cheesecake.jpg'), rota: 'ReceitaCheesecake' }, 
]; 
return ( 
<View style={styles.container}> 
<FlatList 
data={doces} 
numColumns={2} 
contentContainerStyle={styles.lista} 
keyExtractor={(item) => item.nome} 
renderItem={({ item }) => ( 
<TouchableOpacity 
style={styles.item} 
onPress={() => { 
if (item.rota) { 
navigation.navigate(item.rota); 
} 
}} 
activeOpacity={0.7} 
> 
<Image source={item.imagem} style={styles.imagem} /> 
<Text style={styles.nome}>{item.nome}</Text> 
</TouchableOpacity> 
)} 
/> 
</View> 
); 
} 
const styles = StyleSheet.create({ 
container: { 
flex: 1, 
backgroundColor: '#F5DDC7' 
}, 
lista: { 
padding: 20, 
justifyContent: 'center', 
alignItems: 'center' 
}, 
item: { 
margin: 10, 
alignItems: 'center', 
width: Dimensions.get('window').width / 2.5 
}, 
imagem: { 
width: 100, 
height: 100, 
borderRadius: 10 
}, 
nome: { 
marginTop: 8, 
fontSize: 14, 
color: '#C23116', 
textAlign: 'center', 
fontWeight: '600' 
} 
}); 