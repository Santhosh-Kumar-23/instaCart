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
import Colors from '../colors/colors';

const SliderOne = ({array = {}}) => {
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
        }}>
        {array.map((item, index) => {
          return (
            <View style={{width:50,height:50}} key={index + 1}>
              <Image source={item?.image} style={{height:"100%",width:"100%"}} />
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.paginationWrapper}>
        {Array.from(Array(4).keys()).map((key, index) => (
          <View
            style={[
              styles.paginationDots,
              {opacity: pageIndex === index ? 1 : 0.2},
            ]}
            key={index}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default SliderOne;
const styles = StyleSheet.create({
  imageStyle: {
    height: PixelRatio.getPixelSizeForLayoutSize(90),
    width: '100%',
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  header: {
    fontSize: 20,
    marginHorizontal: 70,
    textAlign: 'center',
    fontWeight: 'bold',

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
    top: 760,
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
