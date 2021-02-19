import React,{Component, useState, useEffect} from 'react';
import {View, StyleSheet, Text,TextInput, TouchableOpacity,
   Image, ScrollView, ImageBackground, Dimensions} from 'react-native';


const {height, width}= Dimensions.get("window")
export default class MainScreen extends React.Component {
 

  render() {
   

    return (
        <View style={styles.container}>
            <Text>로그인 성공</Text>
        </View>
    )

  }
}

const styles = StyleSheet.create({

    container:{
      flex:1,
      backgroundColor:'white'
    },
});