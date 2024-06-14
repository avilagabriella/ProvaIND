import React from 'react';
import { View, Text, Image } from 'react-native';

const Destaque = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://play-lh.googleusercontent.com/JQKfopRtWqyD1cUXjx4V00qLnKecgKlSTS6sL0YX1T0H4bzyOK8SxdQIUbZ6NTsKfkBm' }}
        style={{ width: 300, height: 450 }}
      />
      <Text>
      Como eu era antes de você: De origem modesta e sem grandes aspirações, a peculiar Louisa Clark é contratada para ser cuidadora de Will, um jovem tetraplégico depressivo e cínico.
      </Text>
    </View>
  );
};

export default Destaque;