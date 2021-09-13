import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function LocationHeader({ navigation }) {
  const formatedAddress = useSelector(state => state.location.formatedAddress);

  return (
    <SafeAreaView>
      <View style={styles.searchHeader}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.backButton}
        >
          <Ionicons name='arrow-back-outline' size={25} color='black' />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Location');
            }}
            style={styles.searchBox}
          >
            <Text style={styles.searchText} numberOfLines={1}>
              {formatedAddress}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchHeader: {
    width: windowWidth,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
  },
  searchBar: {
    width: windowWidth * 0.75,
    paddingVertical: 10,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },

  searchText: {
    marginLeft: 10,
    fontSize: 15,
    fontFamily: 'Medium',
  },
  searchBox: {},
});
