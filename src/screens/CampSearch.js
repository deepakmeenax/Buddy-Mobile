import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  FlatList,
} from 'react-native';

import CampCard from '../components/CampCard';

import { getCamp } from '../redux/actions/search';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function Search({ navigation }) {
  const dispatch = useDispatch();

  const coord = useSelector(state => state.location.coord);
  const Camps = useSelector(state => state.search.camps);
  const loading = useSelector(state => state.search.loading);
  const error = useSelector(state => state.search.error);

  useEffect(() => {
    coord ? dispatch(getCamp({ lat: coord[0], lng: coord[1] })) : null;
  }, []);

  const renderItem = item => {
    return <CampCard item={item} navigation={navigation} />;
  };

  if (loading) {
    return (
      <View style={styles.search_Screen}>
        <Text style={styles.loading_text}>Loading ...</Text>
      </View>
    );
  } else if (Camps.length > 0) {
    return (
      <View style={{ ...styles.search_Screen, alignItems: 'center' }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Camps}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={Camp => Camp._id}
        />
      </View>
    );
  } else if (error) {
    return (
      <View style={styles.search_Screen}>
        <Text style={styles.loading_text}>Error</Text>
      </View>
    );
  } else {
    return (
      <View style={{ ...styles.search_Screen, backgroundColor: '#fff' }}>
        <Image
          style={styles.center_search_img}
          source={require('../assets/images/searchimg.png')}
        ></Image>
        <Text style={styles.center_text}>
          Found Nothing may be you should change your location.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search_Screen: {
    flex: 1,
    width: Width,
    height: Height,
  },
  loading_text: {
    textAlign: 'center',
    marginTop: Height * 0.4,
    fontSize: 20,
    fontFamily: 'Medium',
  },
  center_search_img: {
    width: 0.6 * Width,
    height: 200,
    alignSelf: 'center',
    marginTop: Height * 0.5 - 200,
  },
  center_text: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'Bold',
    margin: 15,
  },
});
