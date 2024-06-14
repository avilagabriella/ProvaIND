import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const Busca = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (search !== '') {
      setLoading(true);
      try {
        const response = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=3aef4fb8`);
        setResults(response.data.Search);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (search !== '') {
      handleSearch();
    }
  }, [search]);

  return (
    <View>
      <TextInput
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Buscar filme"
      />
      <TouchableOpacity onPress={handleSearch}>
        <Text>Buscar</Text>
      </TouchableOpacity>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={results}
          renderItem={({ item }) => (
            <View>
              <Text>{item.Title}</Text>
              <Text>{item.Year}</Text>
            </View>
          )}
          keyExtractor={(item) => item.imdbID}
        />
      )}
    </View>
  );
};

export default Busca;