import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Colors from '../colors/colors';

const VerticalScroll = ({array = {}}) => {
  let animatedValue = new Animated.Value(0);
  const handleAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };
  const [selectedItem, setSelectedItem] = useState(0);
  const edhachum=React.useRef()
  const height=Dimensions.get('window').height
  return (
    <ScrollView ref={edhachum}
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'white', elevation: 2}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {array.map((item, index) => {
          return (
            <View key={index} style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 0.9,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 60,
                    width: 60,
                    marginVertical: 10,
                    borderRadius: 70,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      selectedItem == index ? '#CCFFE5' : '#f0f8ff',
                    overflow: 'hidden',
                  }}>
                  <TouchableOpacity
                    style={{height: 48, width: 40, bottom: -12}}
                    onPress={() => {
                      setSelectedItem(index);
                      handleAnimation()
                    }}>
                    <Animated.Image
                      resizeMode={'contain'}
                      source={item.image}
                      style={{
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                        transform: [
                          {
                            translateY: animatedValue.interpolate({
                              inputRange: [0, 1],
                              outputRange: [0, -6],
                            }),
                          },
                          {
                            scaleX: animatedValue.interpolate({
                              inputRange: [0, 1],
                              outputRange: [1, 1],
                            }),
                          },
                        ],
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    color: 'black',
                    fontWeight: selectedItem == index ? '700' : '',
                  }}>
                  {item.name}
                </Text>
              </View>

              <View
                style={{
                  flex: 0.06,
                  backgroundColor:
                    selectedItem == index ? Colors.green : 'transparent',
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default VerticalScroll;
