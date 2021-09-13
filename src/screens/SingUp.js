import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { singup } from '../redux/actions/auth';

export default function SingUp({ route, navigation }) {
  const { number } = route.params;
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const register = () => {
    dispatch(singup({ name, number }));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Image
        source={require('../assets/images/login.png')}
        style={styles.center_img}
      />
      <Text style={styles.center_text}>Tell Us More About YourSelf</Text>

      <View style={styles.number_input_box}>
        <TextInput
          style={styles.number_input}
          onChangeText={text => setName(text)}
          placeholder='Name'
        />
      </View>

      <TouchableOpacity onPress={() => register()} style={styles.send_otp_btn}>
        <Text style={styles.send_otp_btn_text}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.extra_view}></View>
    </KeyboardAvoidingView>
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
    marginBottom: 30,
  },
  number_input_box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 55,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderColor: '#f7475b',
    borderRadius: 10,
    paddingVertical: 2,
  },
  number_input: {
    paddingHorizontal: 10,
    width: '100%',
    height: 40,
  },
  send_otp_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7475b',
    marginHorizontal: 55,
    marginVertical: 10,
    borderRadius: 23,
    height: 50,
  },
  send_otp_btn_text: {
    color: '#fff',
    fontSize: 15,
  },
  new_user_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 55,
    marginVertical: 20,
    borderRadius: 23,
    height: 50,
  },
  new_user_btn_text: {
    color: '#f7475b',
    fontSize: 15,
  },
});
