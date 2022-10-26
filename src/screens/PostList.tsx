import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';
 
const PostList: FC = () => {
  const [list, setList] = useState();

  useEffect(() => {
    postListAPICall();
  })

  const postListAPICall = () => {
    fetch('https://examples.com/data.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setList(data)
    })
  }

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
 
export default PostList;