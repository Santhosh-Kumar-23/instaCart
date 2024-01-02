import {View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import Eyes from 'react-native-vector-icons/Ionicons';
import Colors from '../colors/colors';

const Input = ({
  label = '',
  secureTextEntry = {},
  onPress = () => {},
  onChangeText = {},
  iconsStatus,
  visible = {},
}) => {
  return (
    <View>
      <TextInput
      
        onChangeText={onChangeText}
        error={false}
        activeOutlineColor="black"
        secureTextEntry={secureTextEntry}
        mode="outlined"
        style={{marginHorizontal: 20, marginVertical: 4}}
        label={label}
      />
      {!visible ? (
        <TouchableOpacity
          style={{position: 'absolute', right: 35, bottom: 16}}
          onPress={onPress}>
          <Eyes
            name={!iconsStatus ? 'eye' : 'eye-off'}
            size={25}
            color={'black'}
          />
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Input;
