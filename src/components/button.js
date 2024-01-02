import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Strings from '../strings/strings';
import Colors from '../colors/colors';

const Button = ({onPress = () => {}}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 13,
        marginHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
      }}
      onPress={onPress}>
      <Text style={{color: Colors.white, fontWeight: '700', fontSize: 16}}>
        {Strings.login}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
