import React, {useState, useRef, useEffect} from 'react';
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
  Animated,
  Easing,
} from 'react-native';
import Colors from '../colors/colors';

const Slider = ({array = {}}) => {
  const translation = useRef(new Animated.Value(0)).current;

  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {width, height} = Dimensions.get('window');

  const setSliderPage = event => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  // useEffect(()=>{
  //   Animated.timing(translation, {
  //     toValue:200,
  //     // delay:2000,
  //     // duration:5000,
  //     // useNativeDriver: true,
  //     // easing: Easing.bounce,
  //   }).start();
  // },[])

  const {currentPage: pageIndex} = sliderState;
  return (
    <SafeAreaView style={{flex: 0.8, backgroundColor: 'white'}}>
      <ScrollView
        style={{flex: 1}}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          setSliderPage(event);
          Animated.timing(translation, {
            toValue:10,
            // delay:2000,
            // duration:5000,
            useNativeDriver: true,
            // easing: Easing.bounce,
          }).start();
          
        }}>
        {array.map((item, index) => {
          return (
            <View style={{width, height}} key={index + 1}>
              <Image source={item?.image} style={styles.imageStyle} />
              <View style={styles.wrapper}>
                <Text style={styles.header}>{item?.title}</Text>
                <Text style={styles.paragraph}>{item?.content}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View
        style={[
          styles.paginationWrapper,
          ,
        ]}>
        {Array.from(Array(4).keys()).map((key, index) => (
          <Animated.View
            style={[
              styles.paginationDots,

              {
                opacity: pageIndex === index ? 1 : 0.2,
                transform: [{translateX: translation}],
              },
            ]}
            key={index}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Slider;
const styles = StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(90),
    width: '100%',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  header: {
    fontSize: 20,
    marginHorizontal: 70,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.black,
  },
  paragraph: {
    fontSize: 13,
    marginHorizontal: 40,
    textAlign: 'center',
    color: Colors.black,
  },
  paginationWrapper: {
    position: 'absolute',
    top: 360,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 8,
    width: 8,
    borderRadius: 10 / 2,
    backgroundColor: Colors.green,
    marginLeft: 10,
  },
});
