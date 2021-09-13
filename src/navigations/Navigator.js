import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import SearchBank from '../screens/Search';
import SearchCamp from '../screens/CampSearch';
import CampDetail from '../screens/CampDetail';
import Location from '../screens/Location';

import Login from '../screens/Login';
import SingUp from '../screens/SingUp';
import OtpVerify from '../screens/OtpVerify';

import Header from '../components/Header';
import LocationHeader from '../components/LocationHeader';
import SearchHeader from '../components/SearchHeader';

const Stack = createStackNavigator();

function Mainstack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name='SearchBank'
        component={SearchBank}
        options={{
          header: ({ navigation }) => <SearchHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name='SearchCamp'
        component={SearchCamp}
        options={{
          header: ({ navigation }) => <SearchHeader navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name='CampDetail'
        component={CampDetail}
        options={{
          headerTitle: '',
          headerTransparent: true,
        }}
      />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen
        name='Location'
        component={Location}
        options={{
          header: ({ navigation }) => (
            <LocationHeader navigation={navigation} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Authstack() {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='OtpVerify' component={OtpVerify} />
      <Stack.Screen name='SingUp' component={SingUp} />
    </Stack.Navigator>
  );
}

export default function Navigator() {
  const isLogin = useSelector(state => state.auth.isLogin);

  // return (
  //   <SafeAreaProvider>
  //     <NavigationContainer>
  //       <Mainstack />
  //     </NavigationContainer>
  //   </SafeAreaProvider>
  // );

  return isLogin ? (
    <SafeAreaProvider>
      <NavigationContainer>
        <Mainstack />
      </NavigationContainer>
    </SafeAreaProvider>
  ) : (
    <SafeAreaProvider>
      <NavigationContainer>
        <Authstack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
