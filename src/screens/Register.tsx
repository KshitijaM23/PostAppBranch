import React, {FC, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Input from '../components/input';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
 
const Register: FC = () => {
  const [email, setEmail] = useState('');
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const navigation = useNavigation();
  
 return (
  <SafeAreaView style={styles.wrapper}>
  <View style={styles.contentWrapper}>
     <Input 
         value={email}
         onChangeText={setEmail}
         placeholder="Email address"
         keyboardType="email-address"
     />
     <Input 
         value={password}
         onChangeText={setPassword}
         placeholder="Password"
         keyboardType="default"
     />
     <Input 
         value={confirmPass}
         onChangeText={setConfirmPass}
         placeholder="Confirm Password"
         keyboardType="default"
     />
     <Button buttonType="regular" buttonText="Register" onButtonPress={() => navigation.navigate('PostList')}/>
  </View>
</SafeAreaView>
 );
};
 
const styles = StyleSheet.create({
  textstyle: {
    textAlign: 'center',
    fontSize: 18,
  },
  wrapper: {
     backgroundColor: "white",
     flex: 1
  },
  contentWrapper: {
     justifyContent: 'center',
     alignItems: 'center',
     flex: 1
  }
});
 
export default Register;