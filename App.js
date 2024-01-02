/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, View, StatusBar} from 'react-native';
import AuthNavigation from './src/navigations/authNavigations/AuthNavigation';
import NetInfo from '@react-native-community/netinfo';
import NetworkCheck from './src/components/networkStatus';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './src/redux/store/store';
import store from './src/redux/store/store';
const App = () => {
  //The created store


  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log(state);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const [connectionStatus, setConnectionStatus] = React.useState(true);

  const handleNetworkChange = state => {
    setConnectionStatus(state.isConnected);
  };

  useEffect(() => {
    const netInfoSubscription = NetInfo.addEventListener(handleNetworkChange);
    return () => {
      netInfoSubscription && netInfoSubscription();
    };
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={"dark-content"}
      /> */}
      <Provider store={store}>
        <AuthNavigation />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
