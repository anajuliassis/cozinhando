import React, { useContext } from 'react'; 
import { 
  ScrollView, 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FavoritosContext } from '../FavoritosContext'; 
 
export default function TelaReceitaCheesecake() { 
  const { adicionarFavorito, removerFavorito, estaFavorito } = useContext(FavoritosContext); 
  const id = 'cheesecake'; 
  const favorito = estaFavorito(id); 
 
  function alternarFavorito() { 
    if (favorito) removerFavorito(id); 
    else adicionarFavorito({ 
      id, 
      nome: 'Cheesecake', 
      imagem: require('../assets/cheesecake.jpg'), 
    }); 
  } 
 
  return ( 
    <ScrollView style={styles.container}> 
      <Image source={require('../assets/cheesecake2.jpg')} style={styles.imagem} /> 
 
      <View style={styles.header}> 
        <Text style={styles.titulo}>Cheesecake</Text> 
        <TouchableOpacity onPress={alternarFavorito}> 
          <AntDesign name={favorito ? 'star' : 'staro'} size={24} color="#46210B" /> 
        </TouchableOpacity> 
      </View> 
 
      <View style={styles.tempoContainer}> 
        <AntDesign name="clockcircleo" size={18} color="#46210B" /> 
        <Text style={styles.tempoTexto}>20min</Text> 
      </View> 
 
      <Text style={styles.sectionTitle}>Ingredientes</Text> 
      <Text style={styles.text}> 
        <Text style={{ fontWeight: 'bold' }}>Massa biscoito</Text>{'\n'} 
        • 100 g de manteiga sem sal{'\n'} 
        • 200 g de biscoito maisena{'\n\n'} 
 
        <Text style={{ fontWeight: 'bold' }}>Recheio</Text>{'\n'} 
        • 1 kg de ricota sem sal ou cream cheese{'\n'} 
        • 395 g de leite condensado{'\n'} 
        • 60 g de açúcar refinado{'\n'} 
        • 4 g de essência de baunilha{'\n'} 
        • Raspas de 2 limões{'\n'} 
        • 4 ovos levemente batidos{'\n\n'} 
 
        <Text style={{ fontWeight: 'bold' }}>Cobertura:</Text>{'\n'} 
        • 10 g de gelatina sem sabor{'\n'} 
        • 60 ml de água{'\n'} 
        • 100 g de morangos{'\n'} 
        • 100 g de açúcar refinado 
      </Text> 
 
      <Text style={styles.sectionTitle}>Modo de preparo</Text> 
      <Text style={styles.text}> 
        <Text style={{ fontWeight: 'bold' }}>Massa</Text>{'\n'} 
        1. Triture os biscoitos e misture com a manteiga até obter uma farofa úmida.{'\n'} 
        2. Forre com essa massa o fundo de uma forma redonda desmontável de 25 cm de diâmetro e leve à geladeira.{'\n'} 
        3. Asse por 5 minutos a 150°C, em forno pré-aquecido.{'\n\n'} 
 
        <Text style={{ fontWeight: 'bold' }}>Recheio</Text>{'\n'} 
        4. Triture no processador a ricota com o açúcar, leite condensado e a essência de baunilha.{'\n'} 
        5. Misture as raspas de limão e os ovos.{'\n'} 
        6. Encha com o recheio a forma com a base de biscoitos.{'\n'} 
        7. Leve ao forno 165°C por 15 a 20 minutos, ou até que o recheio esteja firme.{'\n\n'} 
 
        <Text style={{ fontWeight: 'bold' }}>Cobertura</Text>{'\n'} 
        8. Hidrate a gelatina sem sabor com a água e reserve.{'\n'} 
        9. Triture os morangos e leve-os para ferver com o açúcar.{'\n'} 
        10. Retire do fogo e acrescente a gelatina hidratada ainda quente.{'\n'} 
        11. Espere o cheesecake esfriar, desenforme e distribua a geleia por cima.{'\n'} 
        12. Conservar refrigerado por 5 dias entre 5°C e 8°C. 
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
  text: { 
    fontSize: 16, 
    color: '#46210B', 
    lineHeight: 24, 
    paddingHorizontal: 15, 
    marginBottom: 20 
  } 
}); 
