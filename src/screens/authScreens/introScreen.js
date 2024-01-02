import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  SafeAreaView,
  ScrollView,
  PixelRatio,
  Image,
  StyleSheet,
} from 'react-native';
import Images from '../../assets';
import Colors from '../../colors/colors';
import Strings from '../../strings/strings';
import Button2 from '../../components/button2';
import Slider from '../../components/Slider';

const IntroSlider = props => {
  const array = [
    {
      image: Images.mus,
      title: Strings.Tap_a_button_get_your_groceries,
      content: Strings.content1,
    },
    {
      image: Images.mus2,
      title: Strings.Shop_from_your_favourite_stores,
      content: Strings.content2,
    },
    {
      image: Images.mus1,
      title: Strings.Get_quality_groceries_pikced_with_care,
      content: Strings.content3,
    },
    {
      image: Images.mus3,
      title: Strings.Shop_more_deals_save_more_with_us,
      content: Strings.content4,
    },
  ];

  return (
    <>
      <>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle={'dark-content'}
        />
        <Slider array={array} />
        <View style={{flex: 0.2, backgroundColor: Colors.white}}>
          <View
            style={{
              borderBottomColor: Colors.gray,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />

          <View style={{flexDirection: 'row', marginTop: 30}}>
            <View style={{flex: 0.5}}>
              <Button2
                onPress={() => {
                  props.navigation.navigate('Login');
                }}
                label={Strings.login}
                backgroundColor={Colors.azure}
                color={Colors.black}
              />
            </View>
            <View style={{flex: 0.5}}>
              <Button2 onPress={() => {
                  props.navigation.navigate('sample');
                }}
                label={Strings.signup}
                backgroundColor={Colors.green}
                color={Colors.white}
              />
            </View>
          </View>
          <Text style={{textAlign: 'center', color: Colors.black}} onPress={()=>{
            props.navigation.navigate('Anumation')
          }}>
            {Strings.Not_looking_for_groceries}{' '}
            <Text style={{color: Colors.green, fontWeight: '600'}} onPress={()=>{
              props.navigation.navigate('Counter')
            }}>
              {Strings.become_a_shopper}
            </Text>
          </Text>
        </View>
      </>
    </>
  );
};

export default IntroSlider;
