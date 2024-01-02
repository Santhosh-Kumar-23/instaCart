import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  TextInput,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Colors from '../colors/colors';
import User from 'react-native-vector-icons/FontAwesome6';
import Microphone from 'react-native-vector-icons/FontAwesome';
import Search from 'react-native-vector-icons/Feather';
import Down from 'react-native-vector-icons/MaterialIcons';

const HomeSearch = ({line}) => {
  const placeholderText = ['Maggie', 'Noodles', 'Shamboo',"Atta"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = () => {
      setIndex(prevIndex => {
        if (prevIndex === placeholderText.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    };
    setInterval(timer, 2000);

    //cleanup function in order clear the interval timer
    //when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <View>
        <TextInput
          style={{
            borderRadius: 10,
            backgroundColor: 'white',
            marginHorizontal: 10,
            marginVertical: 5,
            paddingHorizontal: 40,
            borderWidth: StyleSheet.hairlineWidth,
          }}
          placeholderTextColor={"black"}
          placeholder={placeholderText[index]}
        />
        <Search
          name="search"
          size={18}
          color={'#000518'}
          style={{marginHorizontal: 20, position: 'absolute', top: 20}}
        />
        <Microphone
          name="microphone"
          size={18}
          color={'#000518'}
          style={{
            marginHorizontal: 25,
            position: 'absolute',
            right: 0,
            top: 20,
          }}
        />
      </View>
    </>
  );
};

export default HomeSearch;
