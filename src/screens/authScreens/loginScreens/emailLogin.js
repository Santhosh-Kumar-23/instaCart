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
import VerticalScroll from '../../../components/verticalScroll';
import Drop from '../../../components/drop';
import HorozontalScroll from '../../../components/HorizontalScroll';
import SliderOne from '../../../components/Slider';
import Down from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../colors/colors';
import MainCard from '../../../components/mainCard';

function EmailLogin() {
  const array = [
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
  ];

  _renderItem = ({item, index}) => <MainCard index={index} item={item} />;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.verticalContainerSmall}>
        <VerticalScroll array={array} />
      </View>
      <View style={styles.verticalContainerBig}>
        <View style={styles.horizontalContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Drop label="Sort" />
            <Drop label="Brand" />
            {array.map((lol, index) => {
              return <HorozontalScroll lol={lol} index={index} />;
            })}
            <Drop label="More" />
          </ScrollView>
        </View>
        <View style={styles.flat}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={array}
            renderItem={_renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={{paddingVertical: 8}}
          />
        </View>
      </View>
    </View>
  );
}
export default EmailLogin;

const styles = StyleSheet.create({
  verticalContainerSmall: {
    flex: 0.2,
    backgroundColor: 'white',
    elevation: 5,
  },
  verticalContainerBig: {
    flex: 0.8,
    backgroundColor: 'white',
  },
  horizontalContainer: {
    flex: 0.07,
    backgroundColor: 'white',
    elevation:5
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  flat: {
    flex: 0.94,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
  },
});
