import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Blood({ item }) {
  return (
    <View style={styles.blood_box}>
      <Text style={styles.blood_type} numberOfLines={1}>
        {item.group}
      </Text>
      <Text style={styles.blood_unit} numberOfLines={1}>
        {item.value} Unit
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  blood_box: {
    width: 50,
    height: 50,
    flexDirection: 'column',
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#f7475b',
  },
  blood_type: {
    textAlign: 'center',
    fontFamily: 'Bold',
    fontSize: 13,
    color: '#fff',
  },
  blood_unit: {
    textAlign: 'center',
    fontFamily: 'Medium',
    fontSize: 13,
    color: '#fff',
  },
});
