import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const HorozontalScroll = ({lol,index}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View key={index}
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          height: 40,
          width: 85,
          borderRadius: 5,
          marginHorizontal: 5,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <View style={{height: 30, width: 30}}>
          <Image
            resizeMode="contain"
            source={lol.image}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <Text style={{color: 'black', fontSize: 11, marginHorizontal: 5}}>
          {lol.name}
        </Text>
      </View>
    </View>
  );
};
export default HorozontalScroll;
