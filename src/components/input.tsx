import React from 'react';
import {TextInput, StyleSheet, Dimensions, Text, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface Props {
    value: string;
    onChangeText: any;
    placeholder: string;
    keyboardType: any;
}
const Input: React.FC<Props> = ({value, onChangeText, placeholder, keyboardType}) => {
  return (
    <View style={{marginTop: 15}}>
      <Text style={styles.inputTextStyle}>{placeholder}</Text>
      <TextInput
        style={styles.inputStyle}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        secureTextEntry={placeholder == 'Password' || 'Confirm Password' ? true : false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    inputStyle: {
        width: windowWidth * 0.7,
        height: 40,
        borderBottomColor: '#87CEFA',
        borderBottomWidth: 1
     },
     inputTextStyle: {
       color: '#87CEFA',
       fontSize: 15,
       textAlign: 'left'
     }
});
export default Input;