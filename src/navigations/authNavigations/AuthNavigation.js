import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, useColorScheme, Image} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Login from '../../screens/authScreens/Login';
import SplashScreen from '../../screens/authScreens/SplashScreen';
import IntroSlider from '../../screens/authScreens/introScreen';
import EmailLogin from '../../screens/authScreens/loginScreens/emailLogin';
import PhoneNumberLogin from '../../screens/authScreens/loginScreens/phoneNumberScreen';
import Images from '../../assets';
import Colors from '../../colors/colors';
import Search from 'react-native-vector-icons/Feather';
import Anumation from '../../screens/authScreens/loginScreens/phoneNumberScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Counter from '../../screens/authScreens/counter';
import HomeSearch from '../../components/homeSearch';

const AuthNavigation = () => {
  const Stack = createStackNavigator();

  function Tobtab() {
    const Tab = createMaterialTopTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.black,
          tabBarInactiveTintColor: Colors.gray,
        }}>
        <Tab.Screen name="Email" component={EmailLogin} />
        <Tab.Screen name="Phonenumber" component={PhoneNumberLogin} />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name="sample"
          component={EmailLogin}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerShown: true,
            headerStyle: {
              backgroundColor: 'white',
            },
            title: 'Instant & Forzen Food',
            headerShadowVisible: true,
            headerTitle: () => (
              <>
                <Text style={{color: 'black', fontWeight: '700'}}>
                  Instant & Forzen Food
                </Text>
                <Text style={{fontSize: 10}}>208 products</Text>
              </>
            ),
            headerRight: () => (
              <>
                <Search
                  name="search"
                  size={20}
                  color={'#000518'}
                  style={{marginHorizontal: 20}}
                />
              </>
            ),
            headerTitleStyle: {
              fontSize: 13,
              fontWeight: '700',
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            headerTitleStyle: {color: 'white'},
            headerLeft: () => null,
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Counter"
          component={Counter}
          options={{
            headerShown: true,
            headerTitleStyle: {color: 'white'},
            // headerLeft: () => null,
            // headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="Anumation"
          component={Anumation}
          options={{
            headerShown: true,
            headerTitleStyle: {color: 'transparent'},
            headerLeft: () => null,
          }}
        />
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen
          name="IntroSlider"
          component={IntroSlider}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#f0f5ff',
            },
            headerTitle: () => (
              <View style={{width: '100%', width: '100%'}}>
                <Image
                  style={{width: 110, height: 110}}
                  resizeMode="contain"
                  source={Images.logo}
                />
              </View>
            ),
            headerTitleAlign: 'center',
            headerLeft: () => null,
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AuthNavigation;
