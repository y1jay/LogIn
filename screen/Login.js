import React from 'react';
import {View, StyleSheet, Text,TextInput, TouchableOpacity,
   Image, ScrollView, ImageBackground, Dimensions} from 'react-native';
import {withNavigation} from 'react-navigation'
import appleAuth, {
  AppleButton,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState,
} from '@invertase/react-native-apple-authentication';


const {height, width}= Dimensions.get("window")
class Login extends React.Component {
  render() {
    async function onAppleButtonPress() {
      // performs login request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [AppleAuthRequestScope.EMAIL, AppleAuthRequestScope.FULL_NAME],
      });
    
      // get current authentication state for user
      // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
      const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);
    
      // use credentialState response to ensure the user is authenticated
      if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
        // user is authenticated
      }
    }

    return (
        <View style={styles.container}>
          <View style={{width:width,height:height,margin:200}}>
            <TouchableOpacity>
            <Text style={{fontSize:20}}>ㅇㅇㅇㅇ</Text>
            </TouchableOpacity>
            <AppleButton
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
        style={{
          width: 160, // You must specify a width
          height: 45, // You must specify a height
        }}
        onPress={() => onAppleButtonPress()}
      />
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