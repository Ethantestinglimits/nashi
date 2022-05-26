import { ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { Text, View } from '../components/Themed';
import SearchBar from "../components/SearchBar";
import { RootTabScreenProps } from '../types';
import MangaGrid from '../components/MangaGrid/MangaGrid';
import MangaPoster from '../components/MangaPoster/MangaPoster';

export default function LibraryScreen() {

  // const { state, loading } = useHomeFetch();

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Library</Text>
        <SearchBar
          placeholder={'Search in library'}
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
        <MangaGrid>
      
          <MangaPoster/>
          <MangaPoster/>
          <MangaPoster/>
          <MangaPoster/>
          <MangaPoster/>
          <MangaPoster/>
          <MangaPoster/>
          <MangaPoster/>
          <MangaPoster/>
          <MangaPoster/>
                  
        </MangaGrid>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: ',
    marginTop: 55,
    justifyContent: 'flex-start',
    textAlign: 'left',
    direction: 'ltr',
    flexDirection: 'column',
  },
  title: {
    marginLeft: 20,
    fontSize: 40,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
