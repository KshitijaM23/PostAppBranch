import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';
 
const Details: FC = props => {
 return (
   <SafeAreaView>
     <StatusBar backgroundColor="white" />
     <Text style={styles.textstyle}></Text>
   </SafeAreaView>
 );
};
 
const styles = StyleSheet.create({
 textstyle: {
   textAlign: 'center',
   fontSize: 18,
 },
});
 
export default Details;