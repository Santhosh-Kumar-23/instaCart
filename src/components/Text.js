import React from 'react';
import {Text} from 'react-native';
import Colors from '../colors/colors';

const Textt = ({
    label,
    fontWeightt,
    color="",
    onPress=()=>{},
    fontSize=16
    
}) => {
  return (
    <Text onPress={onPress}
      style={{
        fontSize: fontSize,
        textAlign: 'center',
        color:color,
        marginBottom: 10,
        fontWeight:fontWeightt
      }}>
      {label}
    </Text>
  );
};

export default Textt;
