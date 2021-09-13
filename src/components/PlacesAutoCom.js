import React from 'react';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// navigator.geolocation = require('react-native-geolocation-service');

const GOOGLE_PLACES_API_KEY = 'AIzaSyBBvQLI7BPpXln_Jzl_tIUVH1f775C7GXM';

export default function PlacesAutoCom({ lat, lng, setLat, setLng }) {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={3} // minimum length of text to search
      autoFocus={true}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto' // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details) => {
        console.log(details.formatted_address);
        console.log(details.geometry.location.lat);
        console.log(details.geometry.location.lng);
        setLat(details.geometry.location.lng);
        setLng(details.geometry.location.lat);
      }}
      onFail={error => console.log('error' + error)}
      keyboardShouldPersistTaps='handled'
      getDefaultValue={() => ''}
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: GOOGLE_PLACES_API_KEY,
        language: 'en', // language of the results
        types: '(regions)', // default: 'geocode'
        components: 'country:IN',
      }}
      styles={styles}
      debounce={200}
      // currentLocation={true}
      // currentLocationLabel='Current location'
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderRadius: 30,
    fontSize: 18,
    alignSelf: 'center',
  },
  poweredContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: '#c8c7cc',
    borderTopWidth: 0.5,
  },
  powered: {},
  listView: { width: '125%' },
  row: {
    backgroundColor: '#FFFFFF',
    padding: 13,
    height: 44,
    flexDirection: 'row',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#c8c7cc',
  },
  description: {},
  loader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 20,
  },
});
