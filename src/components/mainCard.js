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
  FlatList,
} from 'react-native';

import Down from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../colors/colors';
import Swiper from 'react-native-swiper';

const MainCard = ({item = '', index}) => {
  return (
    <View
      key={index + 1}
      style={{
        flex: 0.5,
        backgroundColor: 'white',
        padding: 5,
        height: 300,
        marginHorizontal: 5,
        borderRadius: 10,
        marginVertical: 4,
        elevation: 1,
        
      }}>
      <View
        style={{
          flex: 0.5,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{height: 80, width: '100%'}}>
          <Swiper autoplay={true}
          autoplayTimeout={3.5}
            style={styles.wrapper}
            activeDotColor="black"
            dotStyle={{height: 5, width: 5, marginBottom: -90, marginLeft: -1}}
            activeDotStyle={{
              height: 5,
              width: 5,
              marginBottom: -90,
              marginLeft: -1,
            }}>
            <Image
              source={item.image}
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/m3.jpg')}
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
            />
            <Image
              source={require('../assets/m7.png')}
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
            />
          </Swiper>
        </View>
      </View>
      <View style={{flex: 0.5, backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: '#f0f8ff',
            height: 20,
            width: 60,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <Down name="timer" size={12} color="black" />
          <Text style={{fontSize: 10, color: 'black', fontWeight: '700'}}>
            8 MINS
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
            fontWeight: '700',
            marginHorizontal: 10,
            fontSize: 11,
            marginTop: 10,
          }}>
          Maggie Masala 2 Minute Instant Noodles
        </Text>
        <Text
          style={{
            color: 'gray',
            fontWeight: '600',
            marginHorizontal: 10,
            fontSize: 11,
            marginTop: 10,
          }}>
          280 g
        </Text>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 15,
            marginHorizontal: 10,
          }}>
          <View>
            <Text style={{fontWeight: '600', fontSize: 12, color: 'black'}}>
              $56
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              paddingHorizontal: 25,
              paddingVertical: 8,
              borderRadius: 5,
              borderColor: Colors.green,
              backgroundColor: '#e7f2e7',
            }}>
            <Text style={{fontWeight: '700', color: Colors.green}}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          height: 30,
          width: 30,
          position: 'absolute',
          backgroundColor: '#256FEF',
          justifyContent: 'center',
          alignItems: 'center',
          left: 15,
        }}>
        <Text style={{color: 'white', fontSize: 8, fontWeight: '700'}}>5%</Text>
        <Text style={{color: 'white', fontSize: 8, fontWeight: '700'}}>
          OFF
        </Text>
      </View>
    </View>
  );
};
export default MainCard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
});
