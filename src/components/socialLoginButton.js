import React from 'react';
import {Text, Touchable, View, Image, TouchableOpacity} from 'react-native';
import Strings from '../strings/strings';
import Images from '../assets';

const SocialLogin = ({
    name="",
    image="",
    height={},
    width={}
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginHorizontal: 20,
        alignItems: 'center',
        // borderWidth: 0.5,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginVertical:7,
        elevation:2
      }}>
      <View>
        <Image source={image} style={{height: height, width:width}} />
      </View>
      <View>
        <Text style={{color:"black",}}>{name}</Text>
      </View>
      <View></View>
    </TouchableOpacity>
  );
};
export default SocialLogin;
