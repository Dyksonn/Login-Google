import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage } from 'react-native';
import GoogleSignIn from 'expo-google-sign-in';
import * as Google from 'expo-google-app-auth'
import * as AppAuth from 'expo-app-auth';

export default function App() {

  // useEffect(() => {
  //   async function connectionGoogle() {
  //     try {
  //       GoogleSignIn.initAsync({ clientId: '639458259938-ppffos21u8lk1e8jg2dtqt9arvt68rml.apps.googleusercontent.com' });
  //     } catch ({ message }) {
  //       alert('GoogleSignIn.initAsync(): ' + message);
  //     }

  //     try {
  //       const result = await GoogleSignIn.logInAsync({
  //         androidClientId: '639458259938-ppffos21u8lk1e8jg2dtqt9arvt68rml.apps.googleusercontent.com',
  //         // iosClientId: '598859419864-rdarhvsor6sqmr20ithta5r9bb8iq3v7.apps.googleusercontent.com',
  //         scopes: ['profile', 'email'],
  //       });
  //       console.log(result)
  //       if (result.type === 'success') {
  //         return result.accessToken;
  //       } else {
  //         return { cancelled: true };
  //       }
  //     } catch (e) {
  //       console.log(e)
  //       return { error: true };
  //     }
  //   }

  //   connectionGoogle();

  // }, [])


  async function logIn() {
    // First- obtain access token from Expo's Google API
    const { type, accessToken, user } = await Google.logInAsync({
      // iosClientId: `639458259938-t603ivmd4m6ftn53add91h2mskq69p4u.apps.googleusercontent.com`,
      androidClientId: '731666219277-bbu152bk0vuc1258hmvkoon26nt60k39.apps.googleusercontent.com',
      // iosStandaloneAppClientId: `639458259938-t603ivmd4m6ftn53add91h2mskq69p4u.apps.googleusercontent.com`,
      androidStandaloneAppClientId: '731666219277-bbu152bk0vuc1258hmvkoon26nt60k39.apps.googleusercontent.com',
      scopes: ['profile', 'email']
    });
    
    
    if (type === 'success') {
      /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
      console.log(user);
    }
    // if (type === 'success') {
    //   // Then you can use the Google REST API
    //   let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
    //     headers: { Authorization: `Bearer ${accessToken}` },
    //   });
    //   console.log(userInfoResponse)
    // }


  }


  return (
    <View style={styles.container}>
      <Button title="LogIn" onPress={logIn} />
      {/* <Text>AppAuth: {JSON.stringify(AppAuth.URLSchemes, null, 2)}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});