import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Down from 'react-native-vector-icons/MaterialIcons';

const Drop = ({
    label=""
}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          borderWidth: StyleSheet.hairlineWidth,
          height: 40,
          width: 70,
          borderRadius: 5,
          marginHorizontal: 6,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:"white"
        }}>
        <Text style={{color:"black",fontSize:12}}>{label}</Text>
        <Down name="arrow-drop-down" size={22} color="black" />
      </View>
    </View>
  );
};

export default Drop;
