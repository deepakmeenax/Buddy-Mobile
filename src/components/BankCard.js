import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
} from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

import Blood from './Blood';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function BankCard({ item }) {
  return (
    <TouchableNativeFeedback>
      <View style={styles.event_card}>
        <View style={styles.card_detail}>
          <View style={styles.card_info}>
            <View style={styles.info_text_row}>
              <Text style={styles.info_name_text} numberOfLines={1}>
                {item.bloodbank_name}
              </Text>
            </View>
            <View style={styles.info_text_row}>
              <Text style={styles.info_loc_text} numberOfLines={1}>
                {item.location ? Object.values(item.location)[1] : null}
              </Text>
            </View>
            <View style={styles.info_text_row}>
              <Text style={styles.info_disc_text} numberOfLines={3}>
                {item.disc}
              </Text>
            </View>
          </View>
          <Image
            style={styles.card_img}
            source={require('../assets/images/findDonor.jpg')}
          />
        </View>

        <View style={styles.blood_view}>
          <Text style={{ margin: 5 }}> Avalability</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={true}
            data={item.blood}
            renderItem={Blood}
            keyExtractor={Blood => Blood._id}
          />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  event_card: {
    width: 0.9 * Width,
    height: 0.3 * Height,
    flexDirection: 'column',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 2,
    overflow: 'hidden',
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  card_detail: {
    width: '100%',
    height: '60%',
    flexDirection: 'row',
    padding: 10,
  },
  card_img: {
    width: 0.3 * Width,
    height: '100%',
  },
  blood_view: {
    width: '100%',
    height: '40%',
  },
  card_info: {
    flexDirection: 'column',
    marginHorizontal: 10,
  },
  info_name_text: {
    width: 0.4 * Width,
    fontFamily: 'Bold',
    textAlign: 'justify',
    fontSize: 15,
    color: '#4f4a4a',
    marginBottom: 5,
  },
  info_loc_text: {
    fontFamily: 'Medium',
    width: 0.4 * Width,
    textAlign: 'justify',
    fontSize: 13,
    color: '#4f4a4a',
    marginBottom: 5,
  },
  info_disc_text: {
    width: 0.4 * Width,
    textAlign: 'justify',
    fontSize: 12,
    color: '#4f4a4a',
    marginBottom: 5,
  },
});
