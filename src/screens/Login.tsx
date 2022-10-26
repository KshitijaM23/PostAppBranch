import React, {FC, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Dimensions, Text} from 'react-native';
import Input from '../components/input';
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native';
import firebaseAnalytics from '../../config'
//import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
 
const Login: FC = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const navigation = useNavigation();

const loginUser = async(email: string,password: string) => {
   try {
      //await firebaseAnalytics.auth().signInWithEmailAndPassword(email,password)
   } catch (error) {
      
   }
}
 return (
   <SafeAreaView style={styles.wrapper}>
     <View style={styles.contentWrapper}>
        <Input 
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="default"
        />
        <Input 
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            keyboardType="default"
        />
        <Button buttonType="regular" buttonText="Login" onButtonPress={() =>loginUser(email,password)}/>
        <Button buttonType="linebutton" buttonText="Register" 
            onButtonPress={() => navigation.navigate('Register') }
         />
     </View>
   </SafeAreaView>
 );
};
 
const styles = StyleSheet.create({
 wrapper: {
    backgroundColor: "white",
    flex: 1
 },
 contentWrapper: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1
 },
});
 
export default Login;