import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

import { updatelocation } from '../redux/actions/location';

const API_KEY = 'AIzaSyBBvQLI7BPpXln_Jzl_tIUVH1f775C7GXM';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LocationHeader({ navigation }) {
  // const [searchKeyword, setSearchkeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isShowingResults, setShowingResults] = useState(false);

  const timeout = useRef();
  const searchKeyword = useRef();

  const dispatch = useDispatch();

  const onsucess = () => {
    navigation.goBack();
  };

  const handleChanges = async text => {
    clearTimeout(timeout.current);
    searchKeyword.current.value = text;
    if (searchKeyword.current.value.trim() === '') {
      setShowingResults(false);
      setSearchResults([]);
      return;
    }

    if (searchKeyword.current.value.length >= 3) {
      timeout.current = setTimeout(() => {
        searchLocation();
      }, 600);
    }
  };

  const searchLocation = async () => {
    axios
      .request({
        method: 'post',
        url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}&input=${searchKeyword.current.value}&type=(regions)&language=en&components=country:in`,
      })
      .then(response => {
        setSearchResults(response.data.predictions);
        setShowingResults(true);
      })
      .catch(e => {
        console.log(`error on axios ${e}`);
        setShowingResults(false);
      });
  };

  const getLocation = place_id => {
    // https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJrTLr-GyuEmsRBfy61i59si0&key=YOUR_API_KEY
    axios
      .request({
        method: 'post',
        url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${API_KEY}`,
      })
      .then(response => {
        dispatch(
          updatelocation({
            coord: [
              response.data.result.geometry.location.lat,
              response.data.result.geometry.location.lng,
            ],
            formatedAddress: response.data.result.formatted_address,
            onsucess: onsucess,
          })
        );
      })
      .catch(e => {
        console.log(`error on axios ${e}`);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.autocompleteContainer}>
        <AntDesign name='search1' size={20} color='black' />
        <TextInput
          ref={searchKeyword}
          placeholder='Search for an address'
          returnKeyType='search'
          style={styles.searchBox}
          placeholderTextColor='#000'
          onChangeText={text => handleChanges(text)}
        />

        {isShowingResults && (
          <FlatList
            data={searchResults}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.resultItem}
                  onPress={() => {
                    searchKeyword.current.value = item.description;
                    setShowingResults(false);
                    getLocation(item.place_id);
                    console.log(item.place_id);
                  }}
                >
                  <Text>{item.description}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={loc => loc.place_id}
            style={styles.searchResultsContainer}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  autocompleteContainer: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchResultsContainer: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 50,
  },
  resultItem: {
    width: '100%',
    justifyContent: 'center',
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
    paddingLeft: 15,
  },
  searchBox: {
    width: 340,
    height: 50,
    fontSize: 18,
    color: '#000',
    backgroundColor: '#fff',

    paddingLeft: 15,
  },
});
