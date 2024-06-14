import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Contato = () => {
  return (
    <View>
      <Text>Sobre o aplicativo Cinema na mão</Text>
        Nós
      <TextInput
        placeholder="Enviar mensagem"
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity>
        <Text>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Contato;