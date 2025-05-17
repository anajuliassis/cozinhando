import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FavoritosProvider } from './FavoritosContext';

import TelaInicial from './screens/TelaInicial';
import TelaMenu from './screens/TelaMenu';
import TelaDoces from './screens/TelaDoces';
import TelaSalgados from './screens/TelaSalgados';
import TelaFavoritos from './screens/TelaFavoritos';

import TelaReceitaCenoura from './screens/TelaReceitaCenoura';
import TelaReceitaChocolate from './screens/TelaReceitaChocolate';
import TelaReceitaTrigo from './screens/TelaReceitaTrigo';
import TelaReceitaParmegiana from './screens/TelaReceitaParmegiana';
import TelaReceitaLasanha from './screens/TelaReceitaLasanha';
import TelaReceitaFrango from './screens/TelaReceitaFrango';
import TelaReceitaEstrogonofe from './screens/TelaReceitaEstrogonofe';
import TelaReceitaBatata from './screens/TelaReceitaBatata';
import TelaReceitaCarbonara from './screens/TelaReceitaCarbonara';
import TelaReceitaPalha from './screens/TelaReceitaPalha';
import TelaReceitaAlema from './screens/TelaReceitaAlema';
import TelaReceitaCheesecake from './screens/TelaReceitaCheesecake';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FavoritosProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicial"
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#C23116', // padrão para telas principais
            },
            headerTintColor: '#FFF',
            headerBackTitle: null,
          }}
        >
          
          <Stack.Screen name="Inicial" component={TelaInicial} options={{ title: 'Início' }} />
          <Stack.Screen name="Menu" component={TelaMenu} options={{ title: 'Menu' }} />
          <Stack.Screen name="Doces" component={TelaDoces} options={{ title: 'Doces' }} />
          <Stack.Screen name="Salgados" component={TelaSalgados} options={{ title: 'Salgados' }} />
          <Stack.Screen name="Favoritos" component={TelaFavoritos} options={{ title: 'Favoritos' }} />

          
          <Stack.Screen
            name="ReceitaCenoura"
            component={TelaReceitaCenoura}
            options={{
              title: 'Bolo de Cenoura',
              headerStyle: { backgroundColor: '#B15129' },
            }}
          />
          <Stack.Screen
            name="ReceitaChocolate"
            component={TelaReceitaChocolate}
            options={{
              title: 'Bolo de Chocolate',
              headerStyle: { backgroundColor: '#B15129' },
            }}
          />
          <Stack.Screen
            name="ReceitaParmegiana"
            component={TelaReceitaParmegiana}
            options={{
              title: 'Parmegiana',
              headerStyle: { backgroundColor: '#B15129' },
            }}
          />
          <Stack.Screen
            name="ReceitaLasanha"
            component={TelaReceitaLasanha}
            options={{
              title: 'Lasanha',
              headerStyle: { backgroundColor: '#B15129' },
            }}
          />
          <Stack.Screen
            name="ReceitaFrango"
            component={TelaReceitaFrango}
            options={{
              title: 'Frango à Delícia',
              headerStyle: { backgroundColor: '#B15129' },
            }}
          />
          <Stack.Screen
            name="ReceitaEstrogonofe"
            component={TelaReceitaEstrogonofe}
            options={{
              title: 'Estrogonofe',
              headerStyle: { backgroundColor: '#B15129' },
            }}
          />
          <Stack.Screen
            name="ReceitaBatata"
            component={TelaReceitaBatata}
            options={{
              title: 'Batata Recheada',
              headerStyle: { backgroundColor: '#B15129' },
            }}
          />
          <Stack.Screen
            name="ReceitaCarbonara"
            component={TelaReceitaCarbonara}
            options={{
              title: 'Carbonara',
              headerStyle: { backgroundColor: '#B15129' },
            }}
          />
          <Stack.Screen
            name="ReceitaTrigo"
            component={TelaReceitaTrigo}
            options={{
              title: 'Bolo de Trigo',
              headerStyle: { backgroundColor: '#B15129' },
            }}
          />
          <Stack.Screen
            name="ReceitaPalha"
            component={TelaReceitaPalha}
            options={{
              title: 'Palha Italiana',
              headerStyle: { backgroundColor: '#B15129' },
            }}
          />
          <Stack.Screen
            name="ReceitaAlema"
            component={TelaReceitaAlema}
            options={{
              title: 'Torta Alemã',
              headerStyle: { backgroundColor: '#B15129' },
            }}
          />
          <Stack.Screen
            name="ReceitaCheesecake"
            component={TelaReceitaCheesecake}
            options={{
              title: 'Cheesecake',
              headerStyle: { backgroundColor: '#B15129' },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritosProvider>
  );
}
