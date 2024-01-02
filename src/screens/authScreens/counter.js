import React, {useEffect} from 'react';
import {SafeAreaView, View, StatusBar, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  decrement,
  increment,
  reset,
  logOut,
  logIn,
} from '../../redux/actions/action';

const Counter = () => {
  const counter = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();


  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
      <Text>Counter</Text>
      <Text style={{fontSize:30,fontWeight:"800",color:"black"}}>{counter}</Text>
      <Text onPress={() => dispatch(increment())}>Increase</Text>
      <Text onPress={() => dispatch(reset())}>Reset</Text>
      <Text onPress={() => dispatch(decrement())}>Decrease</Text>
    </View>
  );
};
export default Counter;
