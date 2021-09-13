import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';

export default function BloodType({ setType, type }) {
  return (
    <ModalDropdown
      defaultValue='Blood Type'
      showsVerticalScrollIndicator={false}
      onSelect={(index, value) => {
        setType(value);
      }}
      options={['Blood Type', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']}
      style={{
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderLeftColor: 'red',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
      }}
      textStyle={{
        width: '100%',
        fontSize: 15,
        paddingHorizontal: 10,
      }}
      dropdownStyle={{
        width: 150,
        marginVertical: 2,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
      }}
      dropdownTextStyle={{ fontSize: 20 }}
    />
  );
}
