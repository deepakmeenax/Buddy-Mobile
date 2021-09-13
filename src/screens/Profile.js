import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { logout } from '../redux/actions/auth';

export default function Profile() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/images/login.png')}
        style={styles.center_img}
      />
      <Text style={styles.center_text}>Welcome!</Text>
      <Text style={styles.center_text}>{user.name}</Text>

      <TouchableOpacity onPress={() => LogOut()} style={styles.send_otp_btn}>
        <Text style={styles.send_otp_btn_text}>LogOut</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center_img: {
    marginVertical: 30,
    width: 200,
    alignSelf: 'center',
    height: '25%',
  },
  center_text: {
    fontSize: 18,
    fontFamily: 'Bold',
    alignSelf: 'center',
    marginHorizontal: 30,
  },
  send_otp_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7475b',
    marginHorizontal: 55,
    marginVertical: 20,
    borderRadius: 23,
    height: 50,
  },
  send_otp_btn_text: {
    color: '#fff',
    fontSize: 15,
  },
});
