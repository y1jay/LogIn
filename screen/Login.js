import React from 'react';
import {View, StyleSheet, Text,TextInput, TouchableOpacity,
   Image, ScrollView, ImageBackground, Dimensions} from 'react-native';
import {withNavigation} from 'react-navigation'

//
const {height, width}= Dimensions.get("window")
class Login extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={{width:width,height:height,margin:200}}>
            <TouchableOpacity>
            <Text style={{fontSize:20}}>ㅇㅇㅇㅇ</Text>
            </TouchableOpacity>
          
          </View>
          
        </View>
    )

  }
}
export default withNavigation(Login);
const styles = StyleSheet.create({

    container:{
      flex:1,
      backgroundColor:'white'
    },
});