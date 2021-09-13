import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import CampDetail from '../screens/CampDetail';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function CampCard({ item, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CampDetail', { id: item._id });
      }}
    >
      <View style={styles.event_card}>
        <Image
          style={styles.cover_img}
          source={require('../assets/images/blood-drive.jpg')}
        ></Image>
        <View style={styles.card_info}>
          <Text style={styles.info_name} numberOfLines={1}>
            {item.camp_name
              ? item.camp_name.toUpperCase()
              : 'Baba Saheb Blood Donation Camp'}
          </Text>

          <View style={styles.info_text_row}>
            <View style={styles.info_text_col}>
              <Text style={styles.info_main_text}>Timing</Text>
              <Text style={styles.info_second_text}>
                {item.startDate ? item.startDate : null}
              </Text>
            </View>
            <View style={styles.info_text_col}>
              <Text style={styles.info_main_text}>Participant</Text>
              <Text style={styles.info_second_text}>
                {item.startTime ? item.startTime : null}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  event_card: {
    width: 0.8 * Width,
    height: 0.25 * Height,
    flexDirection: 'column',
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 2,
    overflow: 'hidden',
    marginVertical: 15,
    backgroundColor: '#fff',
  },
  cover_img: {
    width: '100%',
    height: '40%',
  },
  card_info: {
    padding: 10,
  },
  info_name: {
    fontFamily: 'Bold',
    fontSize: 15,
    textAlign: 'auto',
  },
  info_text_row: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  info_text_col: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  info_main_text: {
    textAlign: 'left',
    fontSize: 15,
    fontFamily: 'Medium',
  },
  info_second_text: {
    textAlign: 'center',
    fontSize: 12,
  },
});
