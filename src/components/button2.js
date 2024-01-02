import React from 'react';
import {View, Text, TouchableOpacity,Touchable} from 'react-native';
import Strings from '../strings/strings';
import Colors from '../colors/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Button2 = ({onPress = () => {},label="",backgroundColor,color}) => {
  return (
    <TouchableWithoutFeedback
      style={{
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
        elevation:1
      }}
      onPress={onPress}>
      <Text style={{color: color, fontWeight: '700', fontSize: 16}}>
        {label}
      </Text>
    </TouchableWithoutFeedback>
  );
};

export default Button2;
