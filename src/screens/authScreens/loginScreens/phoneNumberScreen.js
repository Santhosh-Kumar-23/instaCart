import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  TextInput,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Colors from '../../../colors/colors';
import User from 'react-native-vector-icons/FontAwesome6';
import Microphone from 'react-native-vector-icons/FontAwesome';
import Search from 'react-native-vector-icons/Feather';
import Down from 'react-native-vector-icons/MaterialIcons';
import HomeSearch from '../../../components/homeSearch';
import Images from '../../../assets';
import ImageCard from '../../../components/imageCard';
import {useHeaderHeight} from '@react-navigation/stack';

function Home({navigation}) {
  const yOffset = useRef(new Animated.Value(0)).current;
  const headerOpacity = yOffset.interpolate({
    inputRange: [0, Dimensions.get('window').height * 0.125],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const headerBackground = yOffset.interpolate({
    inputRange: [0, Dimensions.get('window').height * 0.125, Dimensions.get('window').height * 0.25, Dimensions.get('window').height * 0.375,  Dimensions.get('window').height * 0.5, Dimensions.get('window').height * 0.625],
    outputRange: ['transparent', '#330033', '#330033', '#330033', 'white', 'white'],
    extrapolate: 'clamp',
  });
  

  useEffect(() => {
    navigation.setOptions({
      headerBackground: () => (
        <>
          <Animated.View
            style={{
              backgroundColor: headerBackground,
              ...StyleSheet.absoluteFillObject,
              opacity: headerOpacity,
              elevation: 3,
            }}>
            <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
              <HomeSearch />
            </View>
          </Animated.View>
        </>
      ),

      headerTransparent: true,
    });
  }, [headerOpacity, headerBackground, navigation]);




  const array3 = [
    {
      image: require('../../../assets/m1.jpg'),
      name: 'maggie',
      color: '#CCFFE5',
    },
    {
      image: require('../../../assets/m10.webp'),
      name: 'Atta',
      color: '#FFCCFF',
    },
    {
      image: require('../../../assets/m3.jpg'),
      name: 'chik',
      color: '#FFCCE5',
    },
    {
      image: require('../../../assets/m7.png'),
      name: 'atta',
      color: '#FFFFCC',
    },
    {
      image: require('../../../assets/m9.webp'),
      name: 'maggie',
      color: '#CCFFFF',
    },
    {
      image: require('../../../assets/m10.webp'),
      name: 'maggie',
      color: '#CCFFE5',
    },
    {
      image: require('../../../assets/m1.jpg'),
      name: 'maggie',
      color: '#FFCCFF',
    },
    {
      image: require('../../../assets/m3.jpg'),
      name: 'maggie',
      color: '#FFCCE5',
    },
    {
      image: require('../../../assets/m3.jpg'),
      name: 'maggie',
      color: '#CCFFFF',
    },
    {
      image: require('../../../assets/m1.jpg'),
      name: 'maggie',
      color: '#FFCCE5',
    },
    {
      image: require('../../../assets/m2.jpeg'),
      name: 'maggie',
      color: '#CCFFFF',
    },
    {
      image: require('../../../assets/m3.jpg'),
      name: 'maggie',
      color: '#FFCCE5',
    },
    {
      image: require('../../../assets/m1.jpg'),
      name: 'maggie',
      color: '#CCFFFF',
    },
    {
      image: require('../../../assets/m2.jpeg'),
      name: 'maggie',
      color: '#FFCCFF',
    },
    {
      image: require('../../../assets/m3.jpg'),
      name: 'maggie',
      color: '#CCFFE5',
    },
    {
      image: require('../../../assets/m3.jpg'),
      name: 'maggie',
      color: '#CCFFE5',
    },
    {
      image: require('../../../assets/m2.jpeg'),
      name: 'maggie',
      color: '#CCFFFF',
    },
    {
      image: require('../../../assets/m3.jpg'),
      name: 'maggie',
      color: '#FFCCE5',
    },
    {
      image: require('../../../assets/m1.jpg'),
      name: 'maggie',
      color: '#CCFFFF',
    },
    {
      image: require('../../../assets/m2.jpeg'),
      name: 'maggie',
      color: '#FFCCFF',
    },
  ];

  const array = [
    {
      image: require('../../../assets/li.jpg'),
      name: 'Cleaning Needs',
      color: '#CCFFE5',
    },
    {
      image: require('../../../assets/app.jpg'),
      name: 'Furnishings & Serveware',
      color: '#FFCCFF',
    },
    {
      image: require('../../../assets/m10.webp'),
      name: 'Gadgets & Appliance',
      color: '#FFCCE5',
    },
    {
      image: require('../../../assets/li.jpg'),
      name: 'Festive Decor',
      color: '#FFFFCC',
    },
    {
      image: require('../../../assets/m10.webp'),
      name: 'Deals Corner',
      color: '#CCFFFF',
    },
    {
      image: require('../../../assets/li.jpg'),
      name: 'Party Essentials',
      color: '#CCFFE5',
    },
  ];

  const seller = [
    {
      image: require('../../../assets/li.jpg'),
      name: 'Cleaning Needs',
      color: '#CCFFE5',
    },
    {
      image: require('../../../assets/app.jpg'),
      name: 'Furnishings & Serveware',
      color: '#FFCCFF',
    },
    {
      image: require('../../../assets/m10.webp'),
      name: 'Gadgets & Appliance',
      color: '#FFCCE5',
    },
    {
      image: require('../../../assets/li.jpg'),
      name: 'Festive Decor',
      color: '#FFFFCC',
    },
  ];

  _renderItem = ({item, index}) => <ImageCard index={index} item={item} />;
  _renderItemmmmmmmmmmmmm = ({item, index}) => (
    <View
      style={{
        flex: 0.5,
        backgroundColor: 'white',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 3,
        marginVertical: 3,
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{height: 30, width: 30}}>
        <Image
          source={item.image}
          style={{height: '100%', width: '100%'}}
          resizeMode="contain"
        />
      </View>
    </View>
  );

  _shop = ({item, index}) => (
    <>
      <View>
        <View
          style={{
            height: 90,
            width: 90,
            backgroundColor: '#f0f8ff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginVertical: 3,
            marginHorizontal: 3,
          }}>
          <View style={{height: 60, width: 60}}>
            <Image
              source={item.image}
              style={{height: '100%', width: '100%'}}
              resizeMode="contain"
            />
          </View>
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            color: 'black',
            fontWeight: '600',
            marginBottom: 10,
          }}>
          {item.name}
        </Text>
      </View>
    </>
  );

  _renderItemmm = ({item, index}) => (
    <View
      style={{
        backgroundColor: 'white',
        height: 250,
        width: 130,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 5,
      }}>
      <View
        style={{
          flex: 0.5,
          backgroundColor: '#f0f8ff',

          // marginHorizontal:5,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 3,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={seller}
          renderItem={_renderItemmmmmmmmmmmmm}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>

      <View style={{backgroundColor: 'white', flex: 0.5}}>
        <View
          style={{flex: 0.5, backgroundColor: 'white', marginHorizontal: 10}}>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
              fontWeight: '700',
              marginTop: 10,
            }}>
            Milk,Curd and Panner
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '500',
              color: 'gray',
              marginVertical: 5,
            }}>
            6 Products
          </Text>
        </View>
        <View style={{flex: 0.5, backgroundColor: 'white'}}>
          <TouchableOpacity
            style={{
              elevation: 1,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              borderRadius: 5,
              marginVertical: 15,
              borderWidth: StyleSheet.hairlineWidth,
            }}>
            <Text
              style={{
                color: Colors.green,
                fontWeight: '600',
                marginHorizontal: 10,
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  

  return (
    <Animated.ScrollView
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: yOffset,
              },
            },
          },
        ],
        {useNativeDriver: true},
      )}
      scrollEventThrottle={16}
      // stickyHeaderIndices={[1]}
      style={{flex: 1, backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={'dark-content'}
      />
      <View style={{height: 570, width: '100%'}}>
        <ImageBackground
          imageStyle={{borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}
          source={require('../../../assets/Diwali.jpg')}
          resizeMode="cover"
          style={{height: '100%', width: '100%'}}>
          <View style={{top: StatusBar.currentHeight, flex: 0.55}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <View>
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: '700',
                    fontSize: 10,
                  }}>
                  DELIVERY
                </Text>
                <Text
                  style={{
                    color: Colors.white,
                    fontWeight: '900',
                    letterSpacing: 2,
                    fontSize: 18,
                  }}>
                  8 minutes
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: Colors.white,
                      fontSize: 11,
                      fontWeight: '600',
                    }}>
                    Delhi, India
                  </Text>
                  <Down name="arrow-drop-down" size={22} color="white" />
                </View>
              </View>
              <View>
                <User name="circle-user" size={40} color="white" />
              </View>
            </View>
            <HomeSearch />
          </View>
          <View style={{flex: 0.45}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={array}
              renderItem={_renderItem}
              keyExtractor={item => item.id}
              numColumns={3}
              contentContainerStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 15,
          marginTop: 10,
        }}>
        <View>
          <Text
            style={{color: Colors.black, fontWeight: '900', marginBottom: 5}}>
            Bestsellers
          </Text>
        </View>
        <View>
          <Text style={{fontWeight: '900', color: Colors.green, fontSize: 12}}>
            see all
          </Text>
        </View>
      </View>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={array}
        renderItem={_renderItemmm}
        keyExtractor={item => item.id}
      />

      <View style={{marginHorizontal: 15, marginVertical: 10}}>
        <Text style={{color: Colors.black, fontWeight: '900'}}>
          Shop by category
        </Text>
      </View>

      <FlatList
        data={array3}
        renderItem={_shop}
        keyExtractor={item => item.id}
        numColumns={4}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </Animated.ScrollView>
  );
}
export default Home;
