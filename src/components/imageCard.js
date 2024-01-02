import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';

const ImageCard = ({
    item="",
    index
}) => {
  return (
    <View
      style={{
        height: 110,
        width: 110,
        backgroundColor: '#f0f8ff',
        borderRadius: 10,
        marginHorizontal: 7,
        marginVertical: 7,
        elevation: 2,
        shadowColor: 'blue',
      }}
      key={index}>
      <View
        style={{
          backgroundColor: '#f0f8ff',
          flex: 0.4,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{
            fontSize: 12,
            textAlign: 'center',
            fontWeight: '700',
            color: 'black',
            paddingHorizontal: 20,
          }}>
          {item.name}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#f0f8ff',
          flex: 0.6,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <View style={{width: 50, height: 60}}>
          <Image
            source={item.image}
            style={{height: '100%', width: '100%'}}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default ImageCard;
