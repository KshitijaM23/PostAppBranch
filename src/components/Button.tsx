import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface Props {
    buttonType: string;
    buttonText: string;
    onButtonPress: any;
}
const Button: React.FC<Props> = ({buttonType,buttonText,onButtonPress}) => {
  return (
    buttonType == 'regular' ?
    <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.9} onPress={onButtonPress}>
        <Text style={[styles.buttonTextStyle,{color: 'black'}]}>{buttonText}</Text>
      </TouchableOpacity>
    :
    <TouchableOpacity style={styles.lineButtonStyle} activeOpacity={0.9} onPress={onButtonPress}>
        <Text style={[styles.buttonTextStyle,{color: '#87CEFA'}]}>{buttonText}</Text>
      </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "#87CEFA",
        width: windowWidth * 0.7,
        height: 45,
        borderRadius: 20,
        marginTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        justifyContent: 'center'
    },
    lineButtonStyle: {
        backgroundColor: "transparent",
        width: windowWidth * 0.7,
        height: 45,
        borderColor: "#87CEFA",
        borderRadius: 20,
        borderWidth: 2,
        marginTop: 30,
        justifyContent: 'center'
    },
    buttonTextStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
export default Button;