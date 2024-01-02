import React, {useState} from 'react';
import {View, Text, SafeAreaView, StatusBar, Image, Alert} from 'react-native';
import styles from '../../styles/styles';
import Strings from '../../strings/strings';
import Colors from '../../colors/colors';
import SocialLogin from '../../components/socialLoginButton';
import Images from '../../assets';
import Input from '../../components/TextInput';
import Button from '../../components/button';
import Textt from '../../components/Text';
import CustomButton from '../../components/CustomButton';

const Login = () => {
  //state variables
  const [icon, setIcon] = useState(true);
  const [visible, setIsvisible] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  //error variables
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  //check error variabls
  const [checkEmail, setCheckEmail] = useState(null);
  const [checkPassword, setCheckPassword] = useState(null);

  const validate = text => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setCheckEmail(!reg.test(text));
  };
  const validatePassword = text => {
    let reg = /[0-9a-zA-Z]{6,}/;
    setCheckPassword(!reg.test(text));
  };

  const handleError = () => {
    setEmailError(!Boolean(email));
    setPasswordError(!Boolean(password));
    validate(email);
    validatePassword(password);
  };

  const handleLogin = () => {
    if (
      Boolean(email) &&
      Boolean(password) &&
      !Boolean(checkEmail) &&
      !Boolean(checkPassword)
    ) {
      Alert.alert('Success');
    } else {
      handleError();
    }
  };

  return (
    <SafeAreaView style={styles.containerStyle}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={'dark-content'}
      />

      <Textt
        label={Strings.login}
        color={Colors.black}
        fontWeight="700"
        fontSize={30}
      />
      <SocialLogin
        name={Strings.continueWithGoogle}
        image={Images.google}
        height={30}
        width={30}
      />
      <SocialLogin
        name={Strings.continuewithfacebook}
        image={Images.facebook}
        height={23}
        width={23}
      />
      <SocialLogin
        name={Strings.continueWithPhone}
        image={Images.phone}
        height={23}
        width={23}
      />
      <Text style={{textAlign: 'center', fontSize: 15}}>or</Text>
      <Input
        label={Strings.Email}
        secureTextEntry={false}
        onChangeText={item => {
          setEmail(item);
          setEmailError(!Boolean(item));
          validate(item);
        }}
      />

      <>
        {emailError ? (
          <Text style={{marginHorizontal: 20, color: Colors.red, fontSize: 12}}>
            {Strings.Emailisrequired}
          </Text>
        ) : checkEmail ? (
          <Text style={{marginHorizontal: 20, color: Colors.red, fontSize: 12}}>
            {Strings.Emailidisinvalid}
          </Text>
        ) : (
          <></>
        )}
      </>

      <Input
        onPress={() => {
          setIcon(!icon);
        }}
        iconsStatus={icon}
        visible={visible}
        label={Strings.Password}
        secureTextEntry={icon}
        onChangeText={item => {
          setPassword(item);
          setPasswordError(!Boolean(item));
          validatePassword(item);
        }}
      />

      {passwordError ? (
        <Text style={{marginHorizontal: 20, color: Colors.red, fontSize: 12}}>
          {Strings.Passwordisrequired}
        </Text>
      ) : checkPassword ? (
        <Text style={{marginHorizontal: 20, color: Colors.red, fontSize: 12}}>
          {Strings.Passwordmustbeatleast6character}
        </Text>
      ) : (
        <></>
      )}

      <Text style={{marginHorizontal: 20, color: Colors.black, marginTop: 10}}>
        {Strings.forgotPassword}{' '}
        <Text style={{fontSize: 16, fontWeight: '600', color: Colors.green}}>
          {Strings.reset}
        </Text>
      </Text>
      <Button onPress={handleLogin} />
      <Textt label={Strings.donthaveanaccount} color={Colors.black} />
      <Textt label={Strings.signup} fontWeightt="700" color={Colors.green} />
    </SafeAreaView>
  );
};
export default Login;
