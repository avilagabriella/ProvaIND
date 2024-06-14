import React from 'react';
import { View, Text, Image } from 'react-native';

const Destaque = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://br.web.img3.acsta.net/medias/nmedia/18/92/91/32/20224832.jpg' }}
        style={{ width: 300, height: 450 }}
      />
      <Text>
        O Senhor dos Anéis: A Sociedade do Anel (The Lord of the Rings: The Fellowship of the Ring) é um filme épico de fantasia de 2001, dirigido por Peter Jackson e baseado no romance de J. R. R. Tolkien.
      </Text>
    </View>
  );
};

const FilmesQueIndico = () => {
  return (
    <View>
      <Text>Meus filmes favoritos:</Text>
      <Text>- O Senhor dos Anéis: A Sociedade do Anel</Text>
      <Text>- Star Wars: Episódio V - O Império Contra-Ataca</Text>
      <Text>- Meu Malvado favorito</Text>
      <Text>- Rapunzel</Text>
      (...)
    </View>
  );
};

export default function App() {
  return (
    <View>
      <Destaque />
      <FilmesQueIndico />
    </View>
  );
}