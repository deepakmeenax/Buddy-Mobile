import React, { useEffect } from 'react';
// import { Notifications } from 'expo';
// import * as Permissions from 'expo-permissions';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function Home({ navigation }) {
  // const registerForPushNotifications = async () => {
  //   try {
  //     const { status: existingStatus } = await Permissions.getAsync(
  //       Permissions.NOTIFICATIONS
  //     );
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== 'granted') {
  //       const { status } = await Permissions.askAsync(
  //         Permissions.NOTIFICATIONS
  //       );
  //       finalStatus = status;
  //     }
  //     const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     if (finalStatus !== 'granted') return;

  //     const token = await Notifications.getExpoPushTokenAsync();
  //     console.log(token);
  //   } catch (error) {
  //     console.log('Error getting a token', error);
  //   }
  // };
  // const locationPermission = async () => {
  //   if (Location.hasServicesEnabledAsync()) {
  //     console.log('enabled');
  //   } else {
  //     console.log('not enabled');
  //   }

  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== 'granted') {
  //     console.log('Permission to access location was denied');
  //     return;
  //   } else {
  //     console.log('Permission granted');
  //   }
  // };

  // useEffect(() => {
  //   registerForPushNotifications();
  //   Notifications.addListener(notification => console.log(notification));
  // }, []);

  return (
    <View style={styles.home_page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top_area}>
          <View style={styles.text_box}>
            <Text style={styles.home_text}>You can save</Text>
            <Text style={styles.home_text}>
              some
              <Text style={styles.spanText}>one Life</Text>
            </Text>
          </View>
        </View>

        <View style={styles.services_view}>
          <Text style={styles.actions_text}>Actions</Text>
          <View style={styles.box_row}>
            <View style={styles.service_box}>
              <View style={styles.service_box_back}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Search', { what: true })}
                  style={styles.first_box}
                >
                  <Text style={styles.service_box_text}>Emergency Need</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.service_box}>
              <View style={styles.service_box_back}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SearchBank')}
                  style={{ ...styles.first_box, ...styles.second_box }}
                >
                  <Text style={styles.service_box_text}>
                    Find nearby BloodBanks
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.box_row}>
            <View style={styles.service_box}>
              <View style={styles.service_box_back}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SearchCamp')}
                  style={{ ...styles.first_box, ...styles.third_box }}
                >
                  <Text style={styles.service_box_text}>Find nearby Camps</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.service_box}>
              <View style={styles.service_box_back}>
                <TouchableOpacity
                  style={{ ...styles.first_box, ...styles.fourth_box }}
                >
                  <Text style={styles.service_box_text}>
                    Register As Blood Bank
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  home_page: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  top_area: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    marginTop: 30,
    marginBottom: 30,
  },
  spanText: {
    color: '#ff1f5a',
  },
  home_text: {
    fontSize: 30,
    fontFamily: 'Bold',
    color: '#4f4a4a',
  },
  services_view: {
    marginVertical: 20,
  },
  actions_text: {
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'Bold',
    marginBottom: 10,
  },
  box_row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  service_box: {
    width: '50%',
    padding: 20,
  },
  service_box_text: {
    fontSize: 15,
    fontFamily: 'Bold',
    color: '#4f4a4a',
    textAlign: 'center',
  },
  first_box: {
    width: '100%',
    height: 150,
    backgroundColor: '#f7475b',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 15,
  },
  second_box: { backgroundColor: '#fccde2' },
  third_box: { backgroundColor: '#fffeb8' },
  fourth_box: { backgroundColor: '#c5e3f6' },
  service_box_back: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ff1f5a',
    backgroundColor: 'red',
  },
});
