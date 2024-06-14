import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Busca from '../src/busca';
import Destaque from '../src/destaque';
import FilmesQueIndico from '../src/FilmesQueIndico';
import Contato from '../src/Contato';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Busca">
        <Stack.Screen name="Busca" component={Busca} />
        <Stack.Screen name="Destaque" component={Destaque} />
        <Stack.Screen name="FilmesQueIndico" component={FilmesQueIndico} />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;