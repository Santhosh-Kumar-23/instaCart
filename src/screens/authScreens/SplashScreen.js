import React from 'react';
import {View, Image, StatusBar} from 'react-native';
import styles from '../../styles/styles';
import Images from '../../assets';

const SplashScreen = props => {
  setTimeout(() => {
    props.navigation.navigate('IntroSlider');
  }, 2000);

  return (
    <View style={styles.containerStyle}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={{height: '100%', width: '100%'}}>
        <Image
          resizeMode="cover"
          source={require('../../assets/1698407728131.png')}
          style={{height: '100%', width: '100%'}}
        />
      </View>
    </View>
  );
};
export default SplashScreen;
